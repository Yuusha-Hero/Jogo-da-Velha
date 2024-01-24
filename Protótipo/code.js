contador = 0;

jogador1 = "X";
jogador2 = "O";

function Valor1(){
    if (contador % 2 == 0){
        var element = document.querySelector("#square1");
        var text = document.createTextNode("X");
        element.replaceChildren(text);
    }
    else{
        var element = document.querySelector("#square1");
        var text = document.createTextNode("O");
        element.replaceChildren(text); 
    }
    contador++;
    
    calcularResultado();
}

function Valor2(){
    if (contador % 2 == 0){
        var element = document.querySelector("#square2");
        var text = document.createTextNode("X");
        element.replaceChildren(text);
    }
    else{
        var element = document.querySelector("#square2");
        var text = document.createTextNode("O");
        element.replaceChildren(text); 
    }
    contador++;
    calcularResultado();
}

function Valor3(){
    if (contador % 2 == 0){
        var element = document.querySelector("#square3");
        var text = document.createTextNode("X");
        element.replaceChildren(text);
    }
    else{
        var element = document.querySelector("#square3");
        var text = document.createTextNode("O");
        element.replaceChildren(text); 
    }
    contador++;
    calcularResultado();
}

function Valor4(){
    if (contador % 2 == 0){
        var element = document.querySelector("#square4");
        var text = document.createTextNode("X");
        element.replaceChildren(text);
    }
    else{
        var element = document.querySelector("#square4");
        var text = document.createTextNode("O");
        element.replaceChildren(text); 
    }
    contador++;
    calcularResultado();
}

function Valor5(){
    if (contador % 2 == 0){
        var element = document.querySelector("#square5");
        var text = document.createTextNode("X");
        element.replaceChildren(text);
    }
    else{
        var element = document.querySelector("#square5");
        var text = document.createTextNode("O");
        element.replaceChildren(text); 
    }
    contador++;
    calcularResultado();
}

function Valor6(){
    if (contador % 2 == 0){
        var element = document.querySelector("#square6");
        var text = document.createTextNode("X");
        element.replaceChildren(text);
    }
    else{
        var element = document.querySelector("#square6");
        var text = document.createTextNode("O");
        element.replaceChildren(text); 
    }
    contador++;
    calcularResultado();
}

function Valor7(){
    if (contador % 2 == 0){
        var element = document.querySelector("#square7");
        var text = document.createTextNode("X");
        element.replaceChildren(text);
    }
    else{
        var element = document.querySelector("#square7");
        var text = document.createTextNode("O");
        element.replaceChildren(text); 
    }
    contador++;
    calcularResultado();
}

function Valor8(){
    if (contador % 2 == 0){
        var element = document.querySelector("#square8");
        var text = document.createTextNode("X");
        element.replaceChildren(text);
    }
    else{
        var element = document.querySelector("#square8");
        var text = document.createTextNode("O");
        element.replaceChildren(text); 
    }
    contador++;
    calcularResultado();
}

function Valor9(){
    if (contador % 2 == 0){
        var element = document.querySelector("#square9");
        var text = document.createTextNode("X");
        element.replaceChildren(text);
    }
    else{
        var element = document.querySelector("#square9");
        var text = document.createTextNode("O");
        element.replaceChildren(text); 
    }
    contador++;
    calcularResultado();
}

function calcularResultado(){
    var one = document.getElementById("square1").textContent;
    var two = document.getElementById("square2").textContent;
    var three = document.getElementById("square3").textContent;
    var four = document.getElementById("square4").textContent;
    var five = document.getElementById("square5").textContent;
    var six = document.getElementById("square6").textContent;
    var seven = document.getElementById("square7").textContent;
    var eight = document.getElementById("square8").textContent;
    var nine = document.getElementById("square9").textContent;
    if (one == two && two == three && one != ""){
        alert("Vitória do Jogador: " + one);
    }
    if (one == five && five == nine && one != ""){
        alert("Vitória do Jogador: " + one);
    }
    if (one == four && four == seven && one != ""){
        alert("Vitória do Jogador: " + one);
    }
    if (two == five && five == eight && two != ""){
        alert("Vitória do Jogador: " + two);
    }
    if (three == six && six == nine && three != ""){
        alert("Vitória do Jogador: " + three);
    }
    if (three == five && five == seven && three != ""){
        alert("Vitória do Jogador: " + three);
    }
    if (four == five && five == six && four != ""){
        alert("Vitória do Jogador: " + four);
    }
    if (seven == eight && eight == nine && seven != ""){
        alert("Vitória do Jogador: " + seven);
    }
}