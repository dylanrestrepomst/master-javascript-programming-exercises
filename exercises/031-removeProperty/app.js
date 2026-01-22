function removeProperty(obj, key) {
  // your code here
  delete obj[key];  // de esta manera podemos borrar una caracter del objecto creeado y se lo devolvemos a la variable creada
  return obj;
}
let student={
firstname:"dylan",
secondname:"alberto"

}
console.log(removeProperty(student,"firstname"));