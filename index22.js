//Remove a character at the specified position of a given string & return the new string

function change(){
    let text= document.getElementById("text").value;
    let first_index= Number(document.getElementById("first_index").value);
    let last_index=  Number(document.getElementById("last_index").value);
    let remove_textpart= text.slice(0,first_index) + text.slice(last_index+1);

    document.getElementById("result").innerHTML= '<t> new text :  '+  remove_textpart ;
}