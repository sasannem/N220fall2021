let txtExample = document.getElementById("txtExample");
let dvFound = document.getElementById("dvFound");


function checkWin(){
    var numberVals = txtExample.value;
    var myArray = numberVals.split(",");
    console.log(myArray)

    for(let i = 0; i < myArray.length; i++){
        if(myArray == 111){
            dvFound.innerHTML = "Winner"
        } 
        else{
            dvFound.innerHTML = "Not Winner"
        }
    }
    txtExample.value = "";
}