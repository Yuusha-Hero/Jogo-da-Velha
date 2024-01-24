contador = 0;

vitoriaX = 0;
vitoriaO = 0;

var pontosX = document.querySelector("#pontosX");
var pontosO = document.querySelector("#pontosO");

jogadorUm = "X";
jogadorDois = "O";

var quadroUm = document.querySelector("#square1");
var quadroDois = document.querySelector("#square2");
var quadroTres = document.querySelector("#square3");
var quadroQuatro = document.querySelector("#square4");
var quadroCinco = document.querySelector("#square5");
var quadroSeis = document.querySelector("#square6");
var quadroSete = document.querySelector("#square7");
var quadroOito = document.querySelector("#square8");
var quadroNove = document.querySelector("#square9");

function Valor1(){
    if (quadroUm.textContent == ""){
        if (contador % 2 == 0){  
            var text = document.createTextNode(jogadorUm);
            quadroUm.replaceChildren(text);
        }
        else{
            var text = document.createTextNode(jogadorDois);
            quadroUm.replaceChildren(text); 
        }
    }
    contador++;
    calcularResultado();
}

function Valor2(){
    if (quadroDois.textContent == ""){
        if (contador % 2 == 0){  
            var text = document.createTextNode(jogadorUm);
            quadroDois.replaceChildren(text);
        }
        else{
            var text = document.createTextNode(jogadorDois);
            quadroDois.replaceChildren(text); 
        }
    }
    contador++;
    calcularResultado();
}

function Valor3(){
    if (quadroTres.textContent == ""){
        if (contador % 2 == 0){  
            var text = document.createTextNode(jogadorUm);
            quadroTres.replaceChildren(text);
        }
        else{
            var text = document.createTextNode(jogadorDois);
            quadroTres.replaceChildren(text); 
        }
    }
    contador++;
    calcularResultado();
}

function Valor4(){
    if (quadroQuatro.textContent == ""){
        if (contador % 2 == 0){  
            var text = document.createTextNode(jogadorUm);
            quadroQuatro.replaceChildren(text);
        }
        else{
            var text = document.createTextNode(jogadorDois);
            quadroQuatro.replaceChildren(text); 
        }
    }
    contador++;
    calcularResultado();
}

function Valor5(){
    if (quadroCinco.textContent == ""){
        if (contador % 2 == 0){  
            var text = document.createTextNode(jogadorUm);
            quadroCinco.replaceChildren(text);
        }
        else{
            var text = document.createTextNode(jogadorDois);
            quadroCinco.replaceChildren(text); 
        }
    }
    contador++;
    calcularResultado();
}

function Valor6(){
    if (quadroSeis.textContent == ""){
        if (contador % 2 == 0){  
            var text = document.createTextNode(jogadorUm);
            quadroSeis.replaceChildren(text);
        }
        else{
            var text = document.createTextNode(jogadorDois);
            quadroSeis.replaceChildren(text); 
        }
    }
    contador++;
    calcularResultado();
}

function Valor7(){
    if (quadroSete.textContent == ""){
        if (contador % 2 == 0){  
            var text = document.createTextNode(jogadorUm);
            quadroSete.replaceChildren(text);
        }
        else{
            var text = document.createTextNode(jogadorDois);
            quadroSete.replaceChildren(text); 
        }
    }
    contador++;
    calcularResultado();
}

function Valor8(){
    if (quadroOito.textContent == ""){
        if (contador % 2 == 0){  
            var text = document.createTextNode(jogadorUm);
            quadroOito.replaceChildren(text);
        }
        else{
            var text = document.createTextNode(jogadorDois);
            quadroOito.replaceChildren(text); 
        }
    }
    contador++;
    calcularResultado();
}

function Valor9(){
    if (quadroNove.textContent == ""){
        if (contador % 2 == 0){  
            var text = document.createTextNode(jogadorUm);
            quadroNove.replaceChildren(text);
        }
        else{
            var text = document.createTextNode(jogadorDois);
            quadroNove.replaceChildren(text); 
        }
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
        if (one == jogadorUm){
            alert("Vitória do Jogador: " + jogadorUm);
            vitoriaX++;
            pontosX.replaceChildren(vitoriaX);
            resetar();
        }
        else if (one == jogadorDois){
            alert("Vitória do Jogador: " + jogadorDois);
            vitoriaO++;
            pontosO.replaceChildren(vitoriaO);
            resetar(); 
        }
    }
    else if (one == five && five == nine && one != ""){
        if (one == jogadorUm){
            alert("Vitória do Jogador: " + jogadorUm);
            vitoriaX++;
            pontosX.replaceChildren(vitoriaX);
            resetar();
        }
        else if (one == jogadorDois){
            alert("Vitória do Jogador: " + jogadorDois);
            vitoriaO++;
            pontosO.replaceChildren(vitoriaO);
            resetar(); 
        }
    }
    else if (one == four && four == seven && one != ""){
        if (one == jogadorUm){
            alert("Vitória do Jogador: " + jogadorUm);
            vitoriaX++;
            pontosX.replaceChildren(vitoriaX);
            resetar();
        }
        else if (one == jogadorDois){
            alert("Vitória do Jogador: " + jogadorDois);
            vitoriaO++;
            pontosO.replaceChildren(vitoriaO);
            resetar(); 
        }
    }
    else if (two == five && five == eight && two != ""){
        if (two == jogadorUm){
            alert("Vitória do Jogador: " + jogadorUm);
            vitoriaX++;
            pontosX.replaceChildren(vitoriaX);
            resetar();
        }
        else if (two == jogadorDois){
            alert("Vitória do Jogador: " + jogadorDois);
            vitoriaO++;
            pontosO.replaceChildren(vitoriaO);
            resetar(); 
        }
    }
    else if (three == six && six == nine && three != ""){
        if (three == jogadorUm){
            alert("Vitória do Jogador: " + jogadorUm);
            vitoriaX++;
            pontosX.replaceChildren(vitoriaX);
            resetar();
        }
        else if (three == jogadorDois){
            alert("Vitória do Jogador: " + jogadorDois);
            vitoriaO++;
            pontosO.replaceChildren(vitoriaO);
            resetar(); 
        }
    }
    else if (three == five && five == seven && three != ""){
        if (three == jogadorUm){
            alert("Vitória do Jogador: " + jogadorUm);
            vitoriaX++;
            pontosX.replaceChildren(vitoriaX);
            resetar();
        }
        else if (three == jogadorDois){
            alert("Vitória do Jogador: " + jogadorDois);
            vitoriaO++;
            pontosO.replaceChildren(vitoriaO);
            resetar(); 
        }
    }
    else if (four == five && five == six && four != ""){
        if (four == jogadorUm){
            alert("Vitória do Jogador: " + jogadorUm);
            vitoriaX++;
            pontosX.replaceChildren(vitoriaX);
            resetar();
        }
        else if (four == jogadorDois){
            alert("Vitória do Jogador: " + jogadorDois);
            vitoriaO++;
            pontosO.replaceChildren(vitoriaO);
            resetar(); 
        }
    }
    else if (seven == eight && eight == nine && seven != ""){
        if (seven == jogadorUm){
            alert("Vitória do Jogador: " + jogadorUm);
            vitoriaX++;
            pontosX.replaceChildren(vitoriaX);
            resetar();
        }
        else if (seven == jogadorDois){
            alert("Vitória do Jogador: " + jogadorDois);
            vitoriaO++;
            pontosO.replaceChildren(vitoriaO);
            resetar(); 
        }
    }
    else if (one != "" && two != "" && three != "" && four != "" && five != "" && six != "" && seven != "" && eight != "" && nine != ""){
        alert("Deu Velha!");
        resetar();
    }
}

function resetar(){
    document.getElementById("square1").replaceChildren("");
    document.getElementById("square2").replaceChildren("");
    document.getElementById("square3").replaceChildren("");
    document.getElementById("square4").replaceChildren("");
    document.getElementById("square5").replaceChildren("");
    document.getElementById("square6").replaceChildren("");
    document.getElementById("square7").replaceChildren("");
    document.getElementById("square8").replaceChildren("");
    document.getElementById("square9").replaceChildren("");
}