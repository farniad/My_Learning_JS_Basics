function difference(){

    let number= document.getElementById("number").value;
   let first_result= 
   "the differnce between 13 and " + number +" is: " + Math.round(13-number);
   let second_result= 
   "the double the absolute differnce between 13 and " + number+ " is " + Math.round(number-13)*2 ;


    if (number<=13){
        document.getElementById("result").innerHTML= first_result
    }
    else{
        document.getElementById("result").innerHTML= second_result
        
    }
    let button= document.getElementById("button"); button.remove();

};