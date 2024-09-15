const Articulo = require('./Articulo');

class ArticuloRegular extends Articulo {
    constructor(titulo, urlArchivo, abstract, autores, autorCorrespondiente ) {
        super(titulo, urlArchivo, autores, autorCorrespondiente);
        this.abstract = abstract; 
    }

    validar() {
        if (this.abstract.length < 300 && this.titulo.length > 1 && this.autores != null) {
            return true;
        }
        return false;
    }
}

module.exports = ArticuloRegular;
