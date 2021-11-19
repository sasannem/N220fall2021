let indyCapital = document.getElementById("eventTest");
let cityWorld = document.getElementById("cityWorld");
let nameWorld = document.getElementById("nameWorld");
indyCapital.addEventListener("click", indyClick);
cityWorld.addEventListener("click", cityClick);
nameWorld.addEventListener("click", nameClick);

function indyClick(){
    event.target.innerHTML = "Indianapolis";   
}

function cityClick(){
    event.target.innerHTML = "Manila, Philippeans";
}

function nameClick(){
    event.target.innerHTML = "Maria";
}