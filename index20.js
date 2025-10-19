//Check two given integers, whether one is positive and another one is negative
function check(){
    let number1= document.getElementById("number1").value;
    let number2= document.getElementById("number2").value;
    if (number1>0 && number2>0){
        let a="both numbers are positive";
        document.getElementById("answer").innerHTML=a
    }
    else if (number1>0 && number2<0){
        let a= number1+ " is positive";
        document.getElementById("answer").innerHTML=a

    }
    else if (number2>0 && number1<0){
        let a= number2+ " is positive";
        document.getElementById("answer").innerHTML=a

    }
    else{
        let b="both numbers are negative";
        document.getElementById("answer").innerHTML=b

    }

}