function setup() {
    createCanvas(1000, 500);

    for (var x = 1; x < 26; x++) {
        //black circles
        fill(0);
        circle(x*30, 250, 25);}

    for (var x = 1; x < 9; x++) {
        //purple circles, div by 3
        fill(162, 40, 255);
        circle((x*90), 250, 25);}

    for (var x = 1; x < 6; x++) {   
        //green square, div by 5
        fill(0, 200, 0);
        square((x*150)-12.5, 237.5, 25);}

    for (var x = 1; x < 2; x++) {   
        //blue square, div by 3 & 5
        fill(0, 0, 200);
        square((x*450)-12.5, 237.5, 25);}
        




    }


