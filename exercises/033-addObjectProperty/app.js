function addObjectProperty(obj1, key, obj2) {
  // Add your code after this line
obj1[key]=obj2;
return obj1;
}
let curso={
  nombre:"geek",
  endurence: 4

}
let temporada={
  fruta:"manzana",
  clima:"frio"
}
console.log(addObjectProperty(curso,"temp",temporada));