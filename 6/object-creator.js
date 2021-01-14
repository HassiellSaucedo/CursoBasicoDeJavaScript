let nombres = [
  "Juan",
  "Jose Luis",
  "Jose",
  "Maria Gudalupe",
  "Francisco",
  "Guadalupe",
  "Maria",
  "Juana",
  "Antonio",
  "Jesus",
  "Miguel Angel",
  "Pedro",
  "Alejandro",
  "Manuel",
  "Margarita",
  "Maria del Carmen",
  "Juan Carlos",
  "Roberto",
  "Fernando",
  "Daniel",
  "Carlos",
  "Jorge",
  "Ricardo",
  "Miguel",
  "Eduardo",
];

let personas = [];

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function randomPerson(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
  this.saludar = function () {
    console.log(`Hola, mi nombre es ${nombre} y tengo. ${edad}.`);
  };
}

for (var i = 0; i < 30; i++) {
  age = getRandomInt(18, 100);
  nameChooser = getRandomInt(0, 25);
  personName = nombres[nameChooser];
  var person = new randomPerson(personName, age);
  person.saludar();
  personas.push(person);
}
