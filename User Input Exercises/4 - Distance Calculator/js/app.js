let txtX1 = document.getElementById("txtX1");
let txtY1 = document.getElementById("txtY1");
let txtX2 = document.getElementById("txtX2");
let txtY2 = document.getElementById("txtY2");
let dvDiff = document.getElementById("dvDiff");

function distCalc(){
    let x1Diff = txtX1.value;
    let y1Diff = txtY1.value;
    let x2Diff = txtX2.value;
    let y2Diff = txtY2.value;

    d = Math.sqrt(x1Diff * x2Diff + y1Diff * y2Diff);
    

    dvDiff.innerHTML = d;

    
}