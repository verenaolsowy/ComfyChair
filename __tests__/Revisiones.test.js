// __tests__/Sesion.test.js
const Conferencia = require('../Conferencia');
const Sesion = require('../Sesion');
const Articulo = require('../ArticuloPoster');
const Usuario = require('../Usuario');
const SeleccionCorteFijo = require('../SeleccionCorteFijo');

describe('Sesion', () => {
  let conferencia;
  let sesion;
  let articulo1, articulo2, articulo3, articulo4, articulo5, articulo6;
  let revisorComite1, revisorComite2, revisorComite3

  beforeEach(() => {
    // Crear una conferencia con un comité
    conferencia = new Conferencia('Conferencia Test');
    revisorComite1 = new Usuario('Juan', 'Perez', 'UNLP Informatica', 'aa', 'aa');
    revisorComite2 = new Usuario('Juana', 'Gomez', 'UNLP Informatica', 'aa', 'aa');
    revisorComite3 = new Usuario('Diana', 'Gonzalez', 'UNLP Informatica', 'aa', 'aa');
    conferencia.agregarRevisor(revisorComite1);
    conferencia.agregarRevisor(revisorComite2);
    conferencia.agregarRevisor(revisorComite3);

    // Crear artículos
    const autor = new Usuario('Santiago', 'Lopez', 'UNLP Informatica', 'aa', 'aa');
    articulo1 = new Articulo('Articulo 1', autor);
    articulo2 = new Articulo('Articulo 2', autor);
    articulo3 = new Articulo('Articulo 3', autor);
    articulo4 = new Articulo('Articulo 4', autor);
    articulo5 = new Articulo('Articulo 5', autor);
    articulo6 = new Articulo('Articulo 6', autor);

    /*fecha*/
    const hoy = new Date();
    fecha = new Date(hoy);
    fecha.setDate(hoy.getSeconds() + 20);
    // Crear sesión y añadir los artículos
    sesion = new Sesion('IA', fecha, new SeleccionCorteFijo(70)) ;
    conferencia.agregarSesion(sesion);
    sesion.agregarArticulo(articulo1);
    sesion.agregarArticulo(articulo2);
    sesion.agregarArticulo(articulo3);
    sesion.agregarArticulo(articulo4);
    sesion.agregarArticulo(articulo5);
    sesion.agregarArticulo(articulo6);

    
    /*el revisor 1 agrega interes en todos, solo se le debe asignar 2*/
    articulo1.agregarInteresados(revisorComite1);
    articulo2.agregarInteresados(revisorComite1);
    articulo3.agregarInteresados(revisorComite1);
    articulo4.agregarInteresados(revisorComite1);
    articulo5.agregarInteresados(revisorComite1);
    articulo6.agregarInteresados(revisorComite1);

    /*al 1 se le agrega quizas, puede completar de aca*/
    articulo1.agregarQuizas(revisorComite2);
    articulo1.agregarQuizas(revisorComite3);

  });

  it('debería asignar revisores del comité de la conferencia a los artículos', () => {
    // Asignar revisores del comité y los interesados a los artículos de la sesión
    sesion.validarArticulos();
    sesion.asignarRevisores();

    // Revisores asignados a artículo 1
    const revisoresArticulo1 = articulo1.revisiones;
    expect(revisoresArticulo1.length).toBe(3);  
    /*expect(revisoresArticulo1).toEqual(expect.arrayContaining([
      expect.objectContaining({ nombre: 'Dr. Comite1' }),
      expect.objectContaining({ nombre: 'Interesado 1' })
    ]));*/

    // Revisores asignados a artículo 2
    const revisoresArticulo2 = articulo2.revisiones;
    expect(revisoresArticulo2.length).toBe(3);  
    /*expect(revisoresArticulo2).toEqual(expect.arrayContaining([
      expect.objectContaining({ nombre: 'Dra. Comite2' }),
      expect.objectContaining({ nombre: 'Interesado 2' })
    ]));*/

    expect(articulo3.revisiones.length).toBe(3);  

    expect(articulo4.revisiones.length).toBe(3); 

    expect(articulo5.revisiones.length).toBe(3); 

    expect(articulo6.revisiones.length).toBe(3); 

    expect(revisorComite1.getRevisionesPorConferencia(conferencia).length).toBe(6);  
    expect(revisorComite2.getRevisionesPorConferencia(conferencia).length).toBe(6);  
    expect(revisorComite3.getRevisionesPorConferencia(conferencia).length).toBe(6);  
    sesion.limpiarEspera();
  });
});
