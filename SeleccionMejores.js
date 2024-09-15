class SeleccionMejores extends Seleccion {
    constructor(puntajeMinimo) {
        super();
        this.puntajeMinimo = puntajeMinimo;
    }

    seleccionarArticulos(articulos) {
        aceptados = [];
        articulos.forEach(articulo => {
            if (articulo.puntaje >= this.puntajeMinimo) {
                articulo.estado = 'Aceptado'; 
                aceptados.push(articulo); 
            } else {
                articulo.estado = 'Rechazado'; 
            }
        });
        return aceptados;
    }
}