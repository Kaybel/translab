const assert = require('chai').assert;
global.window = global;
require('../src/js/test.js'); //Sólo enlaza el archivo, parecido al script de html


// emails 

describe('Validar emails', () => { //Describe lo que habrá dentro de cada función
  describe('Debería verificar si existe el arroba', () => {
    it('Debería el correo tener solo un arroba', () => {
      //Caso de prueba
      assert.equal(validateEmail("asdf@asdf.com"), true);
      //assert.equal verifica que el parámetro 1 sea igual al parámetro 2
      assert.equal(validateEmail("asdf@@asdf.com"), false);
      assert.equal(validateEmail("asdf.com"), false);
    });
    it('Debería el correo tener un arroba antes del dominio', () => {
      assert.equal(validateEmail(".com@asdf"), false);
      assert.equal(validateEmail("fabian@laboratoria.la"), true);
    });
  }); (
    describe('Debería verificar si tiene un dominio', () => {
      it('Tiene un punto y luego solo caracteres del alfabeto', () => {
        assert.equal(validateEmail('asdf@asdf'), false);
        assert.equal(validateEmail('asdf@asdf.'), false);
        assert.equal(validateEmail('asdf@asdf.com'), true);
      });
    }));
});

// password

describe('Validar password', () => {
  describe('Debería verificar el largo de la contraseña y el typeof', () => {
    it('Deberían ser sólo números', () => {
      //Caso de prueba
      assert.equal(validatePassword('12345678'), true);
      assert.equal(validatePassword('abcdefgh'), false);
      assert.equal(validatePassword('abcd1234'), false);
    });
    it('Debería verificar que sean máximo ocho caracteres', () => {
      assert.equal(validatePassword('123456789'), false);
      assert.equal(validatePassword('12345678'), true);
    });
    it('Deberían verificar que sea minimo un caracter', () => {
      //Caso de prueba
      assert.equal(validatePassword('12345678'), true);
      assert.equal(validatePassword(''), false);
    });
  });
});

// 
/*
describe('Validar ', () => {
  describe('Debería verificar el largo de la contraseña y el typeof', () => {
    it('Deberían ser sólo números', () => {
      //Caso de prueba
      assert.equal(validatePassword("12345678"), true);
      assert.equal(validatePassword("abcdefgh"), false);
      assert.equal(validatePassword("abcd1234"), false);
    });
    it('Debería verificar que sean máximo ocho caracteres', () => {
      assert.equal(validatePassword("123456789"), false);
      assert.equal(validatePassword("12345678"), true);
    });
    it('Deberían verificar que sea minimo un caracter', () => {
      //Caso de prueba
      assert.equal(validatePassword("12345678"), true);
      assert.equal(validatePassword(""), false);
    });
  });
});

// 

describe('Validar ', () => {
  describe('Debería verificar el largo de la contraseña y el typeof', () => {
    it('Deberían ser sólo números', () => {
      //Caso de prueba
      assert.equal(validatePassword("12345678"), true);
      assert.equal(validatePassword("abcdefgh"), false);
      assert.equal(validatePassword("abcd1234"), false);
    });
    it('Debería verificar que sean máximo ocho caracteres', () => {
      assert.equal(validatePassword("123456789"), false);
      assert.equal(validatePassword("12345678"), true);
    });
    it('Deberían verificar que sea minimo un caracter', () => {
      //Caso de prueba
      assert.equal(validatePassword("12345678"), true);
      assert.equal(validatePassword(""), false);
    });
  });
});
*/