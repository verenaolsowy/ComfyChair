/*class Asignacion {
    constructor( revisor, articulo) {
        this.revisor = revisor; // Usuario con rol 'revisor'
        this.articulo = articulo; // Instancia de Articulo
        this.revision = null; // Instancia de Revision
    }

    asignarRevision(revision) {
        this.revision = revision;
    }
}

/*asignarRevisores(){
        const maxRevisionesPorRevisor = Math.ceil(this.articulosValidados.length * 3 / this.conferencia.comitePrograma.length); 
        this.articulos.forEach(art => {
            this.asignarRevisoresArticulo(art, maxRevisionesPorRevisor);
        });
    }

    asignarRevisoresArticulo(articulo) {
        const maxRevisionesPorRevisor = Math.ceil(this.articulos.length * 3 / this.conferencia.comitePrograma.length);
        let revisoresAsignados = [];

        // Primero asignamos los interesados
        revisoresAsignados = revisoresAsignados.concat(articulo.interesados.slice(0, 3));

        // Si no llegamos a 3, agregamos los "quizás"
        if (revisoresAsignados.length < 3) {
            const faltantes = 3 - revisoresAsignados.length;
            revisoresAsignados = revisoresAsignados.concat(articulo.quizas.slice(0, faltantes));
        }

        // Si aún no llegamos a 3, asignamos aleatoriamente del comité de programa
        if (revisoresAsignados.length < 3) {
            const faltantes = 3 - revisoresAsignados.length;

            // Filtrar usuarios del comité que no estén ya asignados
            const posiblesRevisores = this.conferencia.comitePrograma.filter(revisor => 
                !revisoresAsignados.includes(revisor)
            );

            // Asignar aleatoriamente
            while (revisoresAsignados.length < 3 && posiblesRevisores.length > 0) {
                const indiceAleatorio = Math.floor(Math.random() * posiblesRevisores.length);
                const revisorSeleccionado = posiblesRevisores.splice(indiceAleatorio, 1)[0];
                revisoresAsignados.push(revisorSeleccionado);
            }
        }
        revisoresAsignados.forEach(revisor => {
            articulo.revisiones.push(
                new Revision(revisor, articulo));
            });
    }*/

module.exports = Asignacion;*/