const Articulo = require('./Articulo');

class ArticuloPoster extends Articulo {
    constructor(titulo, urlArchivo, autores, autorCorrespondiente, urlFuentes) {
        super(titulo, urlArchivo, autores, autorCorrespondiente);
        this.urlFuentes = urlFuentes; // URL de los archivos fuente
    }

    validar() {
        if (!this.titulo || this.autores) {
            return false;
        }
        return true;
    }
}

module.exports = ArticuloPoster;