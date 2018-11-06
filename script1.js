function load(){
    console.log("connected");
}

function showNum(){
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    
    var result = addNumber(parseInt(num1),parseInt(num2));
    
    console.log(num1 + "+" + num2 +"="+ result );
}

function addNumber(number1,number2){
    return number1 + number2;
    
}