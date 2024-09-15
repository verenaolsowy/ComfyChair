const Seleccion = require("./Seleccion");

class SeleccionMejores extends Seleccion {
    constructor(puntajeMinimo) {
        super();
        this.puntajeMinimo = puntajeMinimo;
    }

    seleccionarArticulos(articulos) {
        let aceptados = [];
        articulos.forEach(articulo => {
            if (articulo.getPuntaje() >= this.puntajeMinimo) {
                articulo.estado = 'Aceptado'; 
                aceptados.push(articulo); 
            } else {
                articulo.estado = 'Rechazado'; 
            }
        });
        return aceptados;
    }
}

module.exports = SeleccionMejores;