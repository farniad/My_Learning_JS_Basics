function multiplyBy() {
    // Get the values of the input fields with the ids "firstNumber" and "secondNumber"
    num1 = document.getElementById("firstNumber").value;
    num2 = document.getElementById("secondNumber").value;
    result=num1 * num2;
    // Set the inner HTML of the element with the id "result" to the product of the two numbers
    document.getElementById("result").innerHTML = result;
}

function divideBy() {
    // Get the values of the input fields with the ids "firstNumber" and "secondNumber"
    num1 = document.getElementById("firstNumber").value;
    num2 = document.getElementById("secondNumber").value;
    result=num1 /num2;

    // Set the inner HTML of the element with the id "result" to the quotient of the two numbers
    document.getElementById("result").innerHTML = result;
} 
