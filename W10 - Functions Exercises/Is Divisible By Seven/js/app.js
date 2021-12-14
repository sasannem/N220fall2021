let txtBox = document.getElementById("txtBox");

function divSeven(){
    let textValue = Number(txtBox.value);
    let divEquation = Math.abs(textValue / 7);
    let pleaseWork = Number.isInteger(divEquation);
    dvResults.innerHTML = pleaseWork;

}


