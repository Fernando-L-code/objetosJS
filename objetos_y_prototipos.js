// Objetos literales
const Luis = {
  name: "Luis",
  age: 22,
  cursosAprobados: [
    "Curso Definitivo de HTML y CSS",
    "Curso Práctico de HTML y CSS",
  ],

  aprobarCurso(nuevoCurso) {
    this.cursosAprobados.push(nuevoCurso);
  },

};

// Prototipos
function Student(name, age, cursosAprobados) {
  this.name = name;
  this.age = age;
  this.cursosAprobados = cursosAprobados;
}

Student.prototype.aprobarCurso = function (nuevoCursito) {
  this.cursosAprobados.push(nuevoCursito);
}

const juanita = new Student(
  "Juanita Alejandra",
  15,
  [
    "Curso de Introducción a la Producción de Videojuegos",
    "Curso de Creación de Personajes",
  ],
);

// Prototipos con la sintaxis de clases
class Student2 {
  // obtenemos como parametros un objeto con cada uno de sus parametros
  constructor({
    name,
    cursosAprobados = [],
    age,
    email,
  }) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
  }

  aprobarCurso(nuevoCurso) {
    this.cursosAprobados.push(nuevoCurso);
  }
}

const miguelito = new Student2({
  name: "Miguel",
  age: 28,
  email: "miguelito@gmail.com",
});