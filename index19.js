
function check(){
   let num= document.getElementById("number").value;

if ( 20<num && num<100){
    a= "the number " +num+ " is within 20 of 100";
    document.getElementById("txt").innerHTML= a;

}
else if(20<num && num<400){
    b= "the number " +num+ " is within 20 of 100";
    document.getElementById("txt").innerHTML= b;

}
else if( (20<num&& num<100) && (20<num && num<400)){
    c=" the number "+ num+ "is within 20 of 100 and also 20 of 400";
    document.getElementById("txt").innerHTML= c;

}

else {
    d="wrong number: "+num;
    document.getElementById("txt").innerHTML= d;

}
}
