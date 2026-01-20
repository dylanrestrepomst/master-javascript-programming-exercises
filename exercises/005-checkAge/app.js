function checkAge(name, age) {
  // your code here
  if (age>=21){
    return `Welcome, ${name}!`// en esta funcion usamos dos valores de la funcion al colacar ${variable}
    //el valor que le demos a name  apararecera en la consola tambien tenemos que usar `para que salga el string
  }
  else return `Go home, ${name}!`
}
console.log(checkAge("dylan",20));