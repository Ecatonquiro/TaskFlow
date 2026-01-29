const users = [
  {
    id: 1,
    nombre: "Juan Pérez",
    email: "juan.perez@email.com",
    contraseña: "123456",
    rol: "admin",
    activo: true
  },
  {
    id: 2,
    nombre: "María López",
    email: "maria.lopez@email.com",
    contraseña: "abcdef",
    rol: "member",
    activo: true
  },
  {
    id: 3,
    nombre: "Carlos Gómez",
    email: "carlos.gomez@email.com",
    contraseña: "qwerty",
    rol: "member",
    activo: false
  },
  {
    id: 4,
    nombre: "Ana Rodríguez",
    email: "ana.rodriguez@email.com",
    contraseña: "pass123",
    rol: "admin",
    activo: true
  }
]

//Method for getting all users
const getAll = ()=>{
    return users
}

//Method for getting an user
const getUserId = id => {
    return users.find(user => user.id == id)
}

//Method for patching an user
const patch = (user,newData)=> {
    for(key in newData){
        Object.defineProperty(user,key,{value:newData[key]})
    }
}

//Method for deleting an user
const remove = id => {
    users = users.filter(user => user.id != id)
}

module.exports = {
    getAll,
    getUserId,
    patch,
    remove
}