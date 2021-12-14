let txtBox = document.getElementById("txtBox");

function cleanSentence(){
    let txtSentence = txtBox.value;
    let splitSentence = txtSentence.split("#");

    dvResults.innerHTML = splitSentence;
}