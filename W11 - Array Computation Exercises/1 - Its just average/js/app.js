let txtExample = document.getElementById("txtExample");
let dvSum = document.getElementById("dvSum");
let dvAve = document.getElementById("dvAve");


function calcString(){
    var stringVals = txtExample.value;

    let myArray = stringVals.split(",");
    
    let sum = 0;
    for(let i = 0; i < myArray.length; i++){
        sum += Number(myArray[i]);
    }

    average = (sum/myArray.length);
    
    dvSum.innerHTML = "Sum: " + sum;
    dvAve.innerHTML = "Average: " + average;

    txtExample.value = "";


}