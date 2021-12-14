let dvNumber = document.getElementById("dvNumber");


function makeRandom(){
    let randNumber = Math.floor(Math.random() * 10 + 1);

    dvNumber.innerHTML = randNumber;
}
