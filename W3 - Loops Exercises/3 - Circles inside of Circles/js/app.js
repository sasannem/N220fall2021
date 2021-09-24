function setup(){
    createCanvas (500, 500);

    background(200);

    noFill();

    for (var x = 1; x < 50; x++){
        circle(250, 250, x * 7);
    }
      
}