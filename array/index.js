'use strict';

class MyArray {
  constructor() {
    // me sirve para saber la cantidad de elementos.
    this.length = 0;
    // objecto que guardará los datos
    this.data = {}
  }

  //metodo para obtener
  get(index) {
    return this.data[index];
  }

  // metodo para agregar a un elemento
  push(item) {
    // decirle que parta desde la longitud y se le asigne ese elemento a esa posicion
    this.data[this.length] = item;

    // aumentamos la longitud a uno
    this.length++;

    // retornamos los datos
    return this.data;
  }

  pop() {
    // necesitamos guardar el elemento eliminado
    const lastItem = this.data[this.length - 1];
    // delete me ayuda a borrar una propiedad de un objecto
    delete this.data[this.length - 1]
    this.length--;
    return lastItem;
  }

  delete(index) {
    const item = this.data[index];

    this.shiftIndex(index);

    return item;
  }

  // genera cambios en los indices
  shiftIndex(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }

    delete this.data[this.length - 1]

    this.length--;
  }

  shift() {
    const firstItem = this.data[0];
    this.shiftIndex(0);
    return firstItem;
  }

  unshift(item) {

    if (!item) {
      return this.length;
    }
    // item = "Hola"
    // { '0': 'Juan', '1': 'Cynthia' }

    // acá nos preguntamos si la longitud del array es diferente de cero
    if (this.length !== 0) {

      /*
       *1.- recoremos diciendo que i va a valer la longitud menos uno de nuestro array que en este caso es 1.
       *2.- validamos que el indice del array sea mayor o igual a cero, en este caso es 1 es mayor a cero.
       *3.- le restamos el valor a el indice, en este caso le restamos 1 a 1 = 0
       */
      for (let i = this.length - 1; i >= 0; i--) {
        // Decimos que en la posición siguiente del dato (2) que está undefined queremos asignarle el valor a la posición actual (1), es decir, {'1': 'Juan', '2': 'Cynthia'}
        this.data[i + 1] = this.data[i];
      }
    }

    // acá le asignamos el valor a la posición cero que actualmente esta undefined
    //{'0':'Hola', '1': 'Juan', '2': 'Cynthia'}
    this.data[0] = item;
    this.length++;
    return this.length;

  }
}

const myArray = new MyArray();

console.log(myArray.length);
console.log(myArray.push("Juan"));
console.log(myArray.push("Cynthia"));
console.log(myArray.push("Maria"));
console.log(myArray.get(0));
console.log(myArray.pop());
console.log(myArray.length);
console.log(myArray.shiftIndex(1));