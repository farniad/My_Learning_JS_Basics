function sum(){
    let num1= document.getElementById("first_number").value;
    let num2= document.getElementById("second_number").value;
    if (num1!==num2){
        let a= (num1+num2);
        document.getElementById("result").innerHTML= "result: "+ a;
    }
    else{
        let b= (num1+num2) *3;
        document.getElementById("result").innerHTML="result: "+b;

    }
}
function reset_all(){
    document.getElementById("content").reset();

    document.getElementById("result").innerHTML=""

    
}