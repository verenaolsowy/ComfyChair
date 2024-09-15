const Revision = require("./Revision");

class Sesion {

    constructor(nombre, fechaLimite, criterioSeleccion) {
        this.nombre = nombre;
        this.criterioSeleccion = criterioSeleccion; // 'regular', 'workshop', 'poster'
        this.articulos = [];
        this.articulosAceptados = [];
        this.articulosValidados = [];
        this.fechaLimite = fechaLimite; // Fecha límite para recepción
        this.conferencia;
        this.estado='Recepcion';

        const tiempoRestante = this.fechaLimite - new Date();
        
        if (tiempoRestante > 0) {
            this.espera=setTimeout(() => this.finalizarRecepcion(), tiempoRestante);
        } else {
            this.finalizarRecepcion(); // Si la fecha ya ha pasado, se ejecuta inmediatamente
        }
    }

    limpiarEspera(){
        clearTimeout(this.espera);
    }

    setEstado(estado){
        this.estado=estado;
    }

    finalizarRecepcion() {
        if (this.estado === 'Recepcion') {
            this.estado = 'Bidding';
            this.validarArticulos(); //por si falto validar articulos
        }
    }

    setConferencia(conferencia){
        this.conferencia = conferencia;
    }

    /*Rechaza los articulos que no son validos. 
    Deja los articulos validos en articulosValidados*/
    validarArticulos(){
        this.articulos.forEach(articulo => {
            if(articulo.validar()){
                articulo.setEstado("Validado");
                this.articulosValidados.push(articulo);
            }else{
                articulo.setEstado("Rechazado");
            }
        }); 
    }

    getArticulos(){
        return this.articulos;
    }

    eliminarArticulo(articulo) {
        this.articulos.delete(articulo);
    }

    agregarArticulo(articulo) {
        const tiempoRestante = this.fechaLimite - new Date();
        if (tiempoRestante > 0 && this.estado === 'Recepcion') {
            this.articulos.push(articulo);
            articulo.setSesion(this);
        } else {
            throw new Error("Ya finalizó el tiempo de envio de articulos");
        }      
    }

    seleccionarArticulos(){
        if (this.estado = 'Seleccion'){
            this.articulosAceptados = this.criterioSeleccion.seleccionarArticulos(this.articulos);
        }else{
            throw new Error('La sesión no se encuentra en estado de selección'); 
        }   
    }

    asignarRevisores() {
        const maxRevisionesPorRevisor = Math.ceil(this.articulos.length * 3 / this.conferencia.comitePrograma.length);

        for (const articulo of this.articulosValidados) {
            const revisoresAsignados = [];

            // Paso 1: Revisores interesados
            let interesados = this.obtenerRevisoresValidos(articulo.interesados, revisoresAsignados, maxRevisionesPorRevisor);
            this.asignarRevisoresAArticulo(interesados, revisoresAsignados);

            // Paso 2: Revisores quizás
            if (revisoresAsignados.length < 3) {
                let quizas = this.obtenerRevisoresValidos(articulo.quizas, revisoresAsignados, maxRevisionesPorRevisor);
                this.asignarRevisoresAArticulo(quizas, revisoresAsignados);
            }

            // Paso 3: Revisores sin interés 
            
            if (revisoresAsignados.length < 3) {
                let sinInteres = this.obtenerRevisoresValidos(this.conferencia.comitePrograma, revisoresAsignados, maxRevisionesPorRevisor);
                this.asignarRevisoresAArticulo(sinInteres, revisoresAsignados);
            }
            revisoresAsignados.forEach(revisor => {
                let revision = new Revision(revisor, articulo);
                articulo.agregarRevision(revision);
                revisor.agregarRevision(revision);
            });
        }
    }

    // Método que filtra los revisores que aún no han alcanzado el límite de revisiones y no están ya asignados
    obtenerRevisoresValidos(listaRevisores, revisoresAsignados, maxRevisiones) {
        return listaRevisores.filter(revisor => 
            revisor.contarRevisionesPorConferencia(this.conferencia) < maxRevisiones &&
            !revisoresAsignados.includes(revisor)
        );
    }

    // Método que asigna los revisores a un artículo hasta que tenga 3
    asignarRevisoresAArticulo(revisores, revisoresAsignados) {
        for (const revisor of revisores) {
            if (revisoresAsignados.length < 3) {
                revisoresAsignados.push(revisor);
            }
        }
    }

}

module.exports = Sesion;