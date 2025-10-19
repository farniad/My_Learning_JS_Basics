number1= parseInt(prompt("enter first number"));
number2= parseInt(prompt("enter second number"));
let sum= number1+number2
function check_number(){

    if (number1===50 || number2===50 || sum===50){
        console.log("true");
    }
    else{
        console.log("false");
    }
}
check_number();