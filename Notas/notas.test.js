const notas = require('./notas');

describe('notas',  () =>{

    test('Muy deficiente', () =>{
        expect(notas (2)).toEqual('Muy Deficiente')
    });

    test('Insuficiente', () =>{
        expect(notas (4)).toEqual('Insuficiente')
    });

    test('Suficiente', () =>{
        expect(notas (5)).toEqual('Suficiente')
    });

    test('Bien', () =>{
        expect(notas (6)).toEqual('Bien')
    });

    test('Notable', () =>{
        expect(notas (7)).toEqual('Notable')
    });

    test('Sobresaliente', () =>{
        expect(notas (10)).toEqual('Sobresaliente')
    });


})