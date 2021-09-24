let colors = ["#ffa4ab", "#fffdd0", "#a55318"]

function setup(){
    createCanvas(400, 300);

    for(var i = 0; i < colors.length; i++){
        fill(colors[i]);
        rect(10 + 100 * i, 0, 100, 200);
    }
}