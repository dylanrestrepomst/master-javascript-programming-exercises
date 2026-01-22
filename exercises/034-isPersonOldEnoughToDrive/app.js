function isPersonOldEnoughToDrive(person) {
  // Add your code after this line
  if (person.age>=16){
return console.log("Puede conducir")
  }
else return console.log("No puede conducir")
  
}
let MANOLO={
  age:18
}
console.log(isPersonOldEnoughToDrive(MANOLO));