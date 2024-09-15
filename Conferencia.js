class Conferencia {
    constructor(nombre, fechaLimite) {
        this.nombre = nombre;
        this.chairs = []; // Usuarios con rol 'chair'
        this.comitePrograma = []; // Usuarios con rol 'revisor'
        this.sesiones = []; // Sesiones de la conferencia
    }

    agregarChair(usuario) {
        this.chairs.add(usuario);
    }

    eliminarChair(usuario) {
        this.chairs.delete(usuario);
    }

    agregarRevisor(usuario) {
        this.comitePrograma.add(usuario);
    }

    eliminarRevisor(usuario) {
        this.comitePrograma.delete(usuario);
    }

    agregarSesion(sesion) {
        this.sesiones.set(sesion.id, sesion);
        sesion.setConferencia(this);
    }

}

module.exports = Conferencia;