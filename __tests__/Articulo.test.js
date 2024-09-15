const ArticuloRegular = require('../ArticuloRegular');
const ArticuloPoster = require('../ArticuloPoster');
const Usuario = require('../Usuario');

let autores = [];

beforeEach( ()=> {
    autores.push(new Usuario('nombreCompleto', 'afiliacion', 'email', 'contraseña'));  
});

describe('Test de la clase Articulo', () => {
    it('debería crear un artículo regular correctamente', () => {
        const articulo = new ArticuloRegular('Un artículo regular', 'url', 'Un abstract', autores);
        expect(articulo.titulo).toBe('Un artículo regular');
        expect(articulo.urlArchivo).toBe('url');
        expect(articulo.validar()).toBe(true);
    });

    it('debería crear un artículo regular incorrecto', () => {
        const articulo = new ArticuloRegular('Un artículo regular', 'url', 'Un abstract');
        expect(articulo.titulo).toBe('Un artículo regular');
        expect(articulo.urlArchivo).toBe('url');
        expect(articulo.validar()).toBe(false);
    });

    it('debería crear un artículo poster correctamente', () => {
        const articulo = new ArticuloPoster('Un poster', 'url', 'fuentes');
        expect(articulo.titulo).toBe('Un poster');
        expect(articulo.urlArchivo).toBe('url');
        //expect(articulo.fuentes).toBe('fuentes');
    });
});
