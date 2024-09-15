const Sesion = require("./Sesion");
const ArticuloPoster = require("./ArticuloPoster");

class SesionPoster extends Sesion {
    constructor(nombre, criterioSeleccion, fechaLimite) {
        super(nombre, criterioSeleccion, fechaLimite);
    }

    agregarArticulo(articulo) {
        if (articulo instanceof ArticuloPoster){
            super.agregarArticulo(articulo)
        }else{
            throw new Error('Solo se permiten artículos de tipo ArticuloPoster en esta sesión.');
        }
    }
}

module.exports = SesionPoster;