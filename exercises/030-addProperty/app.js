function addProperty(obj, key) {// esta funcion crea propiedas del obj 
  // your code here
  obj[key]=true;    //el valor que llamemos key guardara en el obj  y sera true
  return obj // y devolveremos ese obj  con esa key nueva siendo true
}
let person={
  mote : "john",
  age : 18


}
console.log(addProperty(person,"isStundent"))// isStudent es la nueva caracteristica creada en la funcion