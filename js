var a;
var b;
var otvet;

function input(){
    a = document.getElementById('valueA').value;
    b = document.getElementById('valueB').value;
}

function sum(){
    input()

    otvet = `${a} + ${b} = ${Number(a) + Number(b)}`;
    document.getElementById("otvet").innerHTML = otvet;
}

function razn(){
    input()

    otvet = `${a} - ${b} = ${a - b}`;
    document.getElementById("otvet").innerHTML = otvet;
}

function del(){
    input()

    aotvet = `${a} / ${b} = ${a / b}`;
    document.getElementById("otvet").innerHTML = otvet;
}

function proiz(){
    input()

    otvet = `${a} * ${b} = ${a * b}`;
    document.getElementById("otvet").innerHTML = otvet;
}

function ost(){
    input()

    otvet = `${a} % ${b} = ${a % b}`;
    document.getElementById("otvet").innerHTML = otvet;
}

function step(){
    input()

    otvet = `${a} ^ ${b} = ${a ** b}`;
    document.getElementById("otvet").innerHTML = otvet;
}
