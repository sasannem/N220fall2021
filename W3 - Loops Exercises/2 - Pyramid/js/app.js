function setup(){
    createCanvas (400, 400);

    for (var x = 0; x < width; x++){
        for (var y = x; y < height; y++){
            stroke(255);
            strokeWeight(5);
            fill(255, 0, 0);
            square(x*100, y*100, 100);
        }
    }
}