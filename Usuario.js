class Usuario {
    constructor(nombreCompleto, afiliacion, email, contraseña) {
        this.nombreCompleto = nombreCompleto;
        this.afiliacion = afiliacion;
        this.email = email;
        this.contraseña = contraseña; 
        this.revisiones = [];
    }

    agregarRevision(revision){
        this.revisiones.push(revision);
    }

    contarRevisionesPorConferencia(conferencia) {
        //console.log(this.revisiones.filter(revision => revision.articulo.sesion.conferencia === conferencia).length);
        return this.revisiones.filter(revision => revision.articulo.sesion.conferencia === conferencia).length;
      }

    getRevisionesPorConferencia(conferencia) {
        return this.revisiones.filter(revision => revision.articulo.sesion.conferencia === conferencia);
    }

}

module.exports = Usuario;