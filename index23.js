//Create a new string from a given string 
// changing the position of characters(chars)

function swap_characters(){
    let  Text=document.getElementById("string").value;
    let first_char= document.getElementById("first_index").value;
    let second_char= document.getElementById("second_index").value;

    if (!first_char || !second_char){
        document.getElementById("result").innerHTML="enter the characters";
        return;
    }

    
    let sample_text= "sample_text";
    let text_swap= Text.replaceAll(first_char,sample_text)
        .replaceAll(second_char,first_char)
        .replaceAll(sample_text,second_char);

    document.getElementById("result").innerHTML= text_swap;
    
}