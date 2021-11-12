let dvNumber = document.getElementById("dvNumber");

let randNumber
function makeRandom(){
randNumber = random(1, 10);
console.log(randNumber);
}

function randomNumber(){
    dvNumber.innerHtml = randNumber;
}