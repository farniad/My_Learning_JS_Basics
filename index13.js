let input= prompt("enter the number");
let getnumber= Number(input);


function difference(num){
if (num <= 19 ){ 
 answer= 19-num ;
 console.log(answer);

}
else{
    answer=3*(num-19);
    console.log(answer);

}
}
difference(getnumber);
