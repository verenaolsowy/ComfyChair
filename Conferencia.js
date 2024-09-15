class Conferencia {
    constructor(nombre, fechaLimite) {
        this.nombre = nombre;
        this.chairs = []; // Usuarios con rol 'chair'
        this.comitePrograma = []; // Usuarios con rol 'revisor'
        this.sesiones = []; // Sesiones de la conferencia
    }

    agregarChair(usuario) {
        this.chairs.push(usuario);
    }

    eliminarChair(usuario) {
        this.chairs.delete(usuario);
    }

    agregarRevisor(usuario) {
        this.comitePrograma.push(usuario);
    }

    eliminarRevisor(usuario) {
        this.comitePrograma.delete(usuario);
    }

    agregarSesion(sesion) {
        this.sesiones.push(sesion);
        sesion.setConferencia(this);
    }

}

module.exports = Conferencia;