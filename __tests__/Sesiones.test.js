const SesionRegular = require('../SesionRegular');
const SesionPoster = require('../SesionPoster');
const SesionWorkshop = require('../Sesion');
const ArticuloRegular = require('../ArticuloRegular');
const ArticuloPoster = require('../ArticuloPoster');

const hoy = new Date();
const futuraFecha = new Date(hoy);
futuraFecha.setDate(hoy.getMilliseconds() + 30);

console.log(futuraFecha);


describe('Test de la clase SesionRegular', () => {
    it('debería agregar un artículo regular correctamente', () => {
        const sesion = new SesionRegular('Sesion de IA', futuraFecha);
        const articuloRegular = new ArticuloRegular('Un artículo de IA', 'url', 'Un abstract');

        expect(() => sesion.agregarArticulo(articuloRegular)).not.toThrow();
        expect(sesion.articulos.length).toBe(1);
    });

    it('debería rechazar un artículo poster', () => {
        const sesion = new SesionRegular('Sesion de IA', futuraFecha);
        const articuloPoster = new ArticuloPoster('Un poster', 'url', 'fuentes');

        expect(() => sesion.agregarArticulo(articuloPoster)).toThrow('Solo se permiten artículos de tipo ArticuloRegular en esta sesión.');
    });
});

describe('Test de la clase SesionPoster', () => {
    it('debería agregar un artículo poster correctamente', () => {
        const sesion = new SesionPoster('Sesion de Posters', futuraFecha);
        const articuloPoster = new ArticuloPoster('Un poster sobre BigData', 'url', 'fuentes');

        expect(() => sesion.agregarArticulo(articuloPoster)).not.toThrow();
        expect(sesion.articulos.length).toBe(1);
    });

    it('debería rechazar un artículo regular', () => {
        const sesion = new SesionPoster('Sesion de Posters', futuraFecha);
        const articuloRegular = new ArticuloRegular('Un artículo regular', 'url', 'Un abstract');

        expect(() => sesion.agregarArticulo(articuloRegular)).toThrow('Solo se permiten artículos de tipo ArticuloPoster en esta sesión.');
    });
});

describe('Test de sesion con fecha anterior a la de hoy', () => {
    it('no debería permitir agregar artículos', () => {
        const sesion = new SesionWorkshop('Workshop sobre AI', hoy);
        const articuloRegular = new ArticuloRegular('Un artículo regular', 'url', 'Un abstract');
        const articuloPoster = new ArticuloPoster('Un poster sobre AI', 'url', 'fuentes');

        expect(() => sesion.agregarArticulo(articuloRegular)).toThrow("Ya finalizó el tiempo de envio de articulos");
        expect(() => sesion.agregarArticulo(articuloPoster)).toThrow("Ya finalizó el tiempo de envio de articulos");
        expect(sesion.articulos.length).toBe(0);
    });

});