let txtExample = document.getElementById("txtExample");
let dvFound = document.getElementById("dvFound");

let lookingFor = ["tires", "water", "clear"];

function wordCatcher(){
    var wordVals = txtExample.value;
    let myArray = wordVals.split(" ");

    let amount = 0;
    
    for(let i = 0; i < myArray.length; i++){
        if(myArray[i] == lookingFor[0, 1, 2]){
            amount += 1
            dvFound.innerHTML = "Found " + amount; 
        }
        else{
            dvFound.innerHTML = "Not Found";
        }
    }   
    txtExample.value = "";
}