

function add() {
    let num1 = parseFloat(document.getElementById("n1").value);
    let num2 = parseFloat(document.getElementById("n2").value);
    let result = num1 + num2;
    document.getElementById("res").innerText = "Result: " + result;
}


function sub(){
    let num1 = parseFloat(document.getElementById("n1").value);
    let num2 = parseFloat(document.getElementById("n2").value);
    let result = num1 - num2;
    document.getElementById("res").innerText = "Result: " + result;
}
function div(){
    let num1 = parseFloat(document.getElementById("n1").value);
    let num2 = parseFloat(document.getElementById("n2").value);
    let result = num1 / num2;
    document.getElementById("res").innerText = "Result: " + result;
}
function mul(){
   let num1 = parseFloat(document.getElementById("n1").value);
    let num2 = parseFloat(document.getElementById("n2").value);
    let result = num1 * num2;
    document.getElementById("res").innerText = "Result: " + result;
}

