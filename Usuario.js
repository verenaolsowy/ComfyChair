class Usuario {
    constructor(nombreCompleto, afiliacion, email, contraseña) {
        this.nombreCompleto = nombreCompleto;
        this.afiliacion = afiliacion;
        this.email = email;
        this.contraseña = contraseña; 
        this.revisiones = [];
    }

    agregarRevison(revision){
        this.revisiones.push(revision);
    }

    contarRevisionesPorConferencia(conferencia) {
        return this.revisiones.filter(revision => revision.conferencia === conferencia).length;
      }

    getRevisionesPorConferencia(conferencia) {
        return this.revisiones.filter(revision => revision.conferencia === conferencia);
    }

}

module.exports = Usuario;