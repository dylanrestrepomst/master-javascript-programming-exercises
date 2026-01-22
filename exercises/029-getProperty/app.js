function getProperty(obj, key) { // esta funcion lee ña 
  
  // your code here
  return obj[key];// aqui le indicamos  que en la varible objecto que creemos
  // usemos key para buscar el dato que necesitamos puede ser nombre edad por ejemplo
}
let person ={ // es la variable creada que asociaremos a obj en la funcion de arriba
  name: "Dylan",  // y estan son las llaves que usaremos dependiendo la informacion que queramos del obj
  age : 27 


};
console.log(getProperty(person,"age")); // en esta ocasion queriamos la edad del obj nos la devuelve