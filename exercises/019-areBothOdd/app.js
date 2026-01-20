// Write your function here
function areBothOdd(num1,num2){

    if(num1%2 && num2%2 >0){  // queremos que dos condiciones se cumplan entonces añadimos && para añadir el y 
        return true;

    }
    else return false ;
}
console.log(areBothOdd(5,9));