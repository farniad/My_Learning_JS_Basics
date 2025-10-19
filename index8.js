function animate_string(id){
    let element= document.getElementById("text");
    let textnode= element.childNodes[0];
    let text= textnode.data;

    setInterval(function (){
    //parva
    // Shift the last character to the front of the text
    text = text[text.length - 1] + text.substring(0, text.length - 1);

   
    textnode.data = text;}, 100 );
}
// Call the function with a sample id
animate_string("text"); 