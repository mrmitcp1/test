function  Add() {
    let number1 = +document.getElementById('num1').value;
    let number2 = +document.getElementById('num2').value;
    let Result = number1 + number2;
    document.getElementById('Result').innerHTML='Result =' + Result

}
function Sub() {
    let number1 = +document.getElementById('num1').value;
    let number2 = +document.getElementById('num2').value;
    let Result = number1 - number2;
    document.getElementById('Result').innerHTML='Result =' + Result
}
function Mul(){
    let number1 = +document.getElementById('num1').value;
    let number2 = +document.getElementById('num2').value;
    let Result = number1 * number2;
    document.getElementById('Result').innerHTML='Result =' + Result
}
function Div(){
    let number1 = +document.getElementById('num1').value;
    let number2 = +document.getElementById('num2').value;
    let Result =  number1 / number2;
    document.getElementById('Result').innerHTML='Result =' +Result
}
