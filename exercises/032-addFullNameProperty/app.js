function addFullNameProperty(obj) {
  // Add your code after this line
  
  obj.fullName=`${obj.firstName} ${obj.lastName}`; // creamos un nombre entero concatenando ponemos el. porque 
  // sabemos el nombre de la propiedad y le devolvemos a la variable un nuevo nombre el de full name
  return obj;

}
let student ={
  firstName: "Miriam",
  lastName: "Sanchez"
}
console.log(addFullNameProperty(student))