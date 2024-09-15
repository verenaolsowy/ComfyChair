const Sesion = require("./Sesion");
const ArticuloRegular = require("./ArticuloRegular");


class SesionRegular extends Sesion {
    constructor(nombre, criterioSeleccion, fechaLimite) {
        super(nombre, criterioSeleccion, fechaLimite);
    }

    agregarArticulo(articulo) {
        if (articulo instanceof ArticuloRegular){
            super.agregarArticulo(articulo)
        }else{
            throw new Error('Solo se permiten artículos de tipo ArticuloRegular en esta sesión.');
        }
    }
}
module.exports = SesionRegular;