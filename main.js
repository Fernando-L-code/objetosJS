class curso{
    constructor({
        nombre,
        instructor,
        duracion,
        descripcion,
        categoria,
        logo= undefined
    }){
        this._nombre = nombre;
        this._instructor = instructor;
        this.duracion = duracion;
        this.descripcion = descripcion;
        this.categoria = categoria;
        this.logo = logo;
    }

    get name(){
        return this._nombre;
    }
    
    set name(newName){
        this._nombre = newName;
    }
}

class learningPaths{
    constructor({
        logo= undefined,
        cursos = [],
        descripcion
    })
    {
        this.cursos = cursos;
        this.logo = logo;
        this.descripcion = descripcion;
    }
    AgregarCurso(nuevoCurso) {
        this.cursos.push(nuevoCurso);
    }
}

class Student{
    constructor({
        name,
        email,
        username,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approverCourser = [],
        learningPaths = []
    }){
        this.name  = name;
        this.email  = email;
        this.username  = username;
        this.socialMedia = {
            twitter,
            instagram,
            facebook
        };
        this.approverCourser = approverCourser; 
        this.learningPaths = learningPaths; 
    }
    AgregarLearningPaths(nuevoCurso) {
        this.learningPaths.push(nuevoCurso);
    }
}

const cssGrid = new curso({
    nombre: "cssGrid",
    instructor: "pedro",
    duracion: 4,
    descripcion: "instroduccion a css grid y sus funcionamiento"
})

const react = new curso({
    nombre: "react",
    instructor: "jose",
    duracion: 6,
    descripcion: "instroduccion a react y sus funcionamiento"
})

const Fron_end = new learningPaths({
    cursos: [ react, cssGrid ],
    descripcion: "instroduccion basica a la carrera de front end",
})


const luis = new Student({
    name: "Luis",
    username: "warstron",
    email: "Fer.@hotmail.com",
    twitter: "fer@",
    learningPaths:[Fron_end]
})