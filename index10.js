function boos(){
    document.getElementById("parva_text").innerHTML=" hehee اینارو ولش.. من خیلی دلم میخواد ببوسمتت "
}

function convert_temp(){
    let temp = document.getElementById("temp").value;
    let select= document.getElementById("select").value;
    let result=document.getElementById("result");
    let c_result= Math.round(10*(temp-32)* 5/9 )+"`C" ;
    let f_result=Math.round(10*(temp*9/5 +32))+"`F" ;

    if (select==="c"){
        result.innerHTML=c_result;
    }
    else{
        result.innerHTML=f_result;
    }

};

