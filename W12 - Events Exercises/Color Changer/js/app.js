let redSquare = document.getElementById("redSquare");
let greenSquare = document.getElementById("greenSquare");
let blueSquare = document.getElementById("blueSquare");
redSquare.addEventListener("click", redClick);
greenSquare.addEventListener("click", greenClick);
blueSquare.addEventListener("click", blueClick);

function redClick(){
    event.target.style.backgroundColor = "#8a1000";
}
function greenClick(){
    event.target.style.backgroundColor = "#228b22 ";
}

function blueClick(){
    event.target.style.backgroundColor = "#0e099c"; 
}