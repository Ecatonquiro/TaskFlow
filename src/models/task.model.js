const tareas = [
  {
    id: 1,
    título: "Configurar entorno de desarrollo",
    descripción: "Instalar dependencias y configurar el proyecto base",
    estado: "pendiente",
    proyecto: 1, // Desarrollo Web
    asignadoA: "Juan Pérez"
  },
  {
    id: 2,
    título: "Diseñar wireframes",
    descripción: "Crear wireframes iniciales para la aplicación",
    estado: "en_progreso",
    proyecto: 3, // Diseño UX/UI
    asignadoA: "Lucía Martínez"
  },
  {
    id: 3,
    título: "Crear estrategia de contenido",
    descripción: "Definir el plan de publicaciones y campañas",
    estado: "pendiente",
    proyecto: 2, // Marketing Digital
    asignadoA: "Luis Fernández"
  },
  {
    id: 4,
    título: "Implementar autenticación",
    descripción: "Login y registro de usuarios",
    estado: "completada",
    proyecto: 1, // Desarrollo Web
    asignadoA: "María López"
  }
];

//Method for creating a task
const create = (id,titulo,descripcion,estado,proyecto,asignadoA)=>{
    return {
        id,
        titulo,
        descripcion,
        estado,
        proyecto,
        asignadoA
    }
}

//Method for getting all tasks
const getAll = () => {
    return tareas
}

//Method for getting a task
const getTask = id => {
    return tareas.find(task => task.id == id)
}

//Method for updating a task
const update = (task,newData)=>{
    for(key in newData){
        Object.defineProperty(task,key,{value:newData[key]})
    }
}

//Method for deleting a task
const remove = id => {
    tareas = tareas.filter(task => task.id == id)
}

module.exports = {
    create,
    getAll,
    getTask,
    update,
    remove
}