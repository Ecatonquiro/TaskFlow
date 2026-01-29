const proyectos = [
  {
    id: 1,
    nombre: "Desarrollo Web",
    descripcion: "Grupo dedicado al aprendizaje de tecnologías web",
    creador: "Juan Pérez",
    miembros: ["Juan Pérez", "María López", "Carlos Gómez"]
  },
  {
    id: 2,
    nombre: "Marketing Digital",
    descripcion: "Estrategias y tendencias en marketing online",
    creador: "Ana Rodríguez",
    miembros: ["Ana Rodríguez", "Luis Fernández"]
  },
  {
    id: 3,
    nombre: "Diseño UX/UI",
    descripcion: "Mejores prácticas de diseño centrado en el usuario",
    creador: "María López",
    miembros: ["María López", "Carlos Gómez", "Lucía Martínez"]
  }
];

//Method for creating a project
const create = (id,nombre,descripcion,creador,miembros) => {
    return {
        id,
        nombre,
        descripcion,
        creador,
        miembros
    }
}

//Method for getting all projects
const getAll = () => {
    return proyectos
}

//Method for getting a project
const getProject = id => {
    return proyectos.find(project => project.id == id)
}

//Method for update all data within a project
const put = (project,newData) => {
    for(key in newData){
        Object.defineProperty(project,key,{value:newData[key]})
    }
}

//Method for delete a project
const remove = id => {
    proyectos = proyectos.filter(project => project.id != id)
}

module.exports = {
    create,
    getAll,
    getProject,
    put,
    remove
}