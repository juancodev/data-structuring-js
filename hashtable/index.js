class HashTable {
  // constructor para definir el tamaño de los datos
  constructor(size) {
    this.data = new Array(size);
  }

  // hash function: es el que le indica el address
  hashMethod(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }
  // agregar elementos a nuestra hashtable
  set(key, value) {
    const address = this.hashMethod(key);

    // validar si existe o no el hash function
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);

    return this.data;
  }

  get(key) {
    const address = this.hashMethod(key);
    const currentBucket = this.data[address];

    // hacemos una validación si existe el dato
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  }

  getAllKeys() {
    // Tu código aquí 👈
    return this.data
      .flat()
      .map(([name]) => name);
  }

  delete(key) {

    const address = this.hashMethod(key);
    const currentBucket = this.data[address];

    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          let deletedSpace = currentBucket[i];
          delete currentBucket[i]
          currentBucket.splice(i, 1);
          return deletedSpace;
        }
      }
    } else {
      return undefined;
    }
  }
}

const myHashTable = new HashTable(50);

// hacemos el llamado de nuestra instancia de la clase hastTable y llamamos al método set para pasarle como lo indicamos en la primera posición el key y el value.
console.log(myHashTable.set("Juan", 1998)); // [ <41 empty items>, [ [ 'Juan', 1998 ] ], <8 empty items> ]

/* [<12 empty items>, [ [ 'Cynthia', 1999 ] ], <28 empty items>, [ [ 'Juan', 1998 ] ], <8 empty items>] */
console.log(myHashTable.set("Cynthia", 1999));

/* [ <12 empty items>, [ [ 'Cynthia', 1999 ] ], <15 empty items>, [ [ 'Maria', 1963 ] ], <12 empty items>, [ [ 'Juan', 1998 ] ], <8 empty items>] */
console.log(myHashTable.set("Maria", 1963));