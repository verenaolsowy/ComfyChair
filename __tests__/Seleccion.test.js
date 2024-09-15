const SeleccionCorteFijo = require('../SeleccionCorteFijo');
const SeleccionMejores = require('../SeleccionMejores');
const Articulo = require('../ArticuloPoster');
const Sesion = require('../Sesion');
const Revision = require('../Revision');
const Usuario = require('../Usuario');

let fecha, sesion, evaluador1, evaluador2,articulo1, articulo2, articulo3;

beforeEach( ()=> {
    /*fecha*/
    const hoy = new Date();
    fecha = new Date(hoy);
    fecha.setDate(hoy.getMilliseconds() + 30);
    /*evaluadores*/ 
    evaluador1  = new Usuario('Juan', 'Perez', 'UNLP Informatica', 'aa', 'aa');
    evaluador2  = new Usuario('Juana', 'Lopez', 'UNLP Infgenieria', 'aa', 'aa');
    
    /*articulos y revisiones */
    articulo1 = new Articulo('Articulo 1', evaluador1);
    let r1 = new Revision(evaluador1, articulo1);
    let r2 = new Revision(evaluador2, articulo1);
    r1.establecerPuntuacion(0);
    r2.establecerPuntuacion(0);
    articulo1.agregarRevision(r1);
    articulo1.agregarRevision(r2);

    articulo2 = new Articulo('Articulo 2', evaluador2);
    let r3 = new Revision(evaluador1, articulo2);
    r3.establecerPuntuacion(3);   
    articulo2.agregarRevision(r3);
    
    articulo3 = new Articulo('Articulo 3', evaluador2);
    let r4 = new Revision(evaluador1, articulo3);
    r4.establecerPuntuacion(2); 
    articulo3.agregarRevision(r4); 
    let r5 = new Revision(evaluador2, articulo3);
    r5.establecerPuntuacion(2); 
    articulo3.agregarRevision(r5);
    
});

describe('SeleccionCorteFijo', () => {
  it('debería seleccionar una cantidad fija de artículos con revisiones - 70% deben ser los 2 mejores', () => {
    
    sesion = new Sesion('IA', fecha, new SeleccionCorteFijo(70)) ;
    sesion.agregarArticulo(articulo1);
    sesion.agregarArticulo(articulo2);
    sesion.agregarArticulo(articulo3);

    sesion.validarArticulos();
    sesion.setEstado("Seleccion");
    sesion.seleccionarArticulos();
    expect(sesion.articulosAceptados.length).toBe(2);  // Solo deberían seleccionarse 2
    expect(sesion.articulosAceptados).toEqual(expect.arrayContaining([articulo3, articulo2]));
    expect(articulo1.estado).toEqual("Rechazado");
    expect(articulo2.estado).toEqual("Aceptado");
  });
});

describe('SeleccionMejores', () => {
    it('Debería Seleccionar los articulos con una suma de puntaje mayor o igual a 4', () => {
      
      sesion = new Sesion('IA', fecha, new SeleccionMejores(4)) ;
      sesion.agregarArticulo(articulo1);
      sesion.agregarArticulo(articulo2);
      sesion.agregarArticulo(articulo3);
  
      sesion.validarArticulos();
      sesion.setEstado("Seleccion");
      sesion.seleccionarArticulos();
      expect(sesion.articulosAceptados.length).toBe(1);  // Solo deberían seleccionarse 2
      expect(sesion.articulosAceptados).toEqual(expect.arrayContaining([articulo3]));
      expect(articulo2.estado).toEqual("Rechazado");
      expect(articulo1.estado).toEqual("Rechazado");
    });
  });
