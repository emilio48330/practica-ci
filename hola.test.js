// hola.test.js
const holaMundo = require('./hola');

test('La función holaMundo debería devolver "Hola, Mundo!"', () => {
    expect(holaMundo()).toBe("Hola, Mundo!");
});
