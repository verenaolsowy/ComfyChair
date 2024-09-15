class Articulo {
    constructor(titulo, urlArchivo, autores, autorCorrespondiente) {
        this.titulo = titulo;
        this.urlArchivo = urlArchivo;
        this.autores = autores; // Array de usuarios
        this.autorCorrespondiente = autorCorrespondiente; // Usuario encargado de notificaciones
        this.revisiones = []; // Array de Revision
        this.interesados = [];
        this.quizas = [];
        this.sesion;
        this.estado = 'recepcion'; // Estados: 'recepcion', 'validado', 'aceptado', 'rechazado'
    }

    setEstado(estado){
        this.estado=estado;
    }

    setSesion(sesion){
        this.sesion= sesion
    }

    getPuntaje(){
        let puntaje=0;
        this.revisiones.forEach(revision => {
            puntaje+=revision.puntaje;
        });
        return puntaje;
    }

    agregarRevision(revision) {
        if (this.revisiones.length < 3) {
            this.revisiones.push(revision);
        } else {
            throw new Error('Máximo de 3 revisiones alcanzado');
        }
    }

    agregarInteresados(interesado){
        this.interesados.push(interesado);
    }

    agregarQuizas(quizas){
        this.quizas.push(quizas);
    }

    validar() {
        throw new Error('Debe invocar a la clase concreta');
    }


}

module.exports = Articulo;