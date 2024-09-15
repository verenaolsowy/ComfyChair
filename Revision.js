
class Revision {
    constructor(revisor, articulo) {
        this.revisor = revisor; // Usuario con rol 'revisor'
        this.articulo = articulo; // Instancia de Articulo
        //this.puntuacion = puntuacion; // Número entre -3 y +3
        //this.texto = texto; // Texto de la revisión
    }

    establecerPuntuacion(nuevaPuntuacion) {
        if (nuevaPuntuacion < -3 || nuevaPuntuacion > 3) {
            throw new Error('La puntuación debe estar entre -3 y +3');
        }
        this.puntuacion = nuevaPuntuacion;
    }

    establecerTexto(nuevoTexto) {
        this.texto = nuevoTexto;
    }
}

module.exports = Revision;