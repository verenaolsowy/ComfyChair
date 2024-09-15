
class Revision {
    constructor(revisor, articulo) {
        this.revisor = revisor; 
        this.articulo = articulo; 
        this.puntaje;
    }

   

    establecerPuntuacion(nuevaPuntuacion) {
        if (nuevaPuntuacion < -3 || nuevaPuntuacion > 3) {
            throw new Error('La puntuación debe estar entre -3 y +3');
        }
        this.puntaje = nuevaPuntuacion;
    }

    establecerTexto(nuevoTexto) {
        this.texto = nuevoTexto;
    }
}

module.exports = Revision;