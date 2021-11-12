let txtExample = document.getElementById("txtExample");

let lookingFor = ["clear", "water", "tires"];

function wordCatcher(){
    var wordVals = txtExample.value;
    let myArray = wordVals.split(" ");

    var element = myArray.find( function(item) {
        return item == "clear";
    })
    console.log(element);
}