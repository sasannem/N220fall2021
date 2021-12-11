let cardOne = document.getElementById("cardOne");
let cardTwo = document.getElementById("cardTwo");
let cardThree = document.getElementById("cardThree");
let cardFour = document.getElementById("cardFour");
let cardFive = document.getElementById("cardFive");
let cardSix = document.getElementById("cardSix");
let cardSeven = document.getElementById("cardSeven");
let cardEight = document.getElementById("cardEight");
let cardNine = document.getElementById("cardNine");
let cardTen = document.getElementById("cardTen");
let cardEleven = document.getElementById("cardEleven");
let cardTwelve = document.getElementById("cardTwelve");
let cardThirteen = document.getElementById("cardThirteen");
let cardFourteen = document.getElementById("cardFourteen");
let cardFifteen = document.getElementById("cardFifteen");
let cardSixteen = document.getElementById("cardSixteen");

function showBird(event){
    event.target.innerHTML = "BIRD";

    setTimeout(function(){
        event.target.innerHTML = "";
    }, 2000);
    
}

function showFlower(event){
    event.target.innerHTML = "FLOWER";

    setTimeout(function(){
        event.target.innerHTML = "";
    }, 2000);
}

function showBee(event){
    event.target.innerHTML = "BEE";

    setTimeout(function(){
        event.target.innerHTML = "";
    }, 2000);
}

function showSquare(event){
    event.target.innerHTML = "SQUARE";

    setTimeout(function(){
        event.target.innerHTML = "";
    }, 2000);
}

function showArm(event){
    event.target.innerHTML = "ARM";

    setTimeout(function(){
        event.target.innerHTML = "";
    }, 2000);
}

function showRed(event){
    event.target.innerHTML = "RED";

    setTimeout(function(){
        event.target.innerHTML = "";
    }, 2000);
}

function showCup(event){
    event.target.innerHTML = "CUP";

    setTimeout(function(){
        event.target.innerHTML = "";
    }, 2000);
}

function showLeaf(event){
    event.target.innerHTML = "LEAF";

    setTimeout(function(){
        event.target.innerHTML = "";
    }, 2000);
}


function restartFunc() {
    location.reload();
  }

