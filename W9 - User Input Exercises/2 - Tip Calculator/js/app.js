let txtBox = document.getElementById("txtBox");
let dvTipTotal = document.getElementById("dvTipTotal")
let dvTotal = document.getElementById("dvTotal");

function mealPrice(){
    let mealPrice = Number(txtBox.value);
    let tipPrice = Math.abs(mealPrice *.2);
    let totalPrice = Math.abs(tipPrice + mealPrice);

    dvTipTotal.innerHTML = tipPrice;
    dvTotal.innerHTML = totalPrice;
}