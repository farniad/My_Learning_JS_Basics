//1-Create a new string from a given string 
//2-Changing the position of characters(chars)
//remove a character at the specified position of a given string & return the new string

function change(){
    let text= document.getElementById("text1").value;
    let first_index= Number(document.getElementById("first_index").value);
    let last_index=  Number(document.getElementById("last_index").value);
    let remove_textpart= text.slice(0,first_index) + text.slice(last_index+1);

    document.getElementById("result1").innerHTML= '<t> new text :  '+  remove_textpart ;
}


function swap_characters(){
    let  Text=document.getElementById("text2").value;
    let first_char= document.getElementById("first_char").value;
    let second_char= document.getElementById("second_char").value;

    if (!first_char || !second_char){
        document.getElementById("result1").innerHTML="enter the characters";
        return;
    }
    let sample_text= "sample_text";
    let text_swap= Text.replaceAll(first_char,sample_text)
        .replaceAll(second_char,first_char)
        .replaceAll(sample_text,second_char);

    document.getElementById("result2").innerHTML= text_swap;
    
}