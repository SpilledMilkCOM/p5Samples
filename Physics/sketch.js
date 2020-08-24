// REF: https://p5js.org/reference/

let canvasSide = 500;
let frameScale = 3.0;

let fishBox = null;
let myBall = null;

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);

    fishBox = new ContainmentBox(createVector(windowWidth / 4, windowHeight / 4, windowWidth / 2));

    myBall = new Ball(windowWidth / 20);

    myBall.changeVelocity(createVector(-1, -2, -5));
}

function draw() {
    background(128);

    // If no light is present, the color will be very flat

    ambientLight(60, 60, 60);
    pointLight(255, 255, 255, canvasSide / 2, canvasSide / 2, 100);

    // Spheres don't look very good with their lattice.

    noStroke();

    fishBox.contain(myBall);

    myBall.draw();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);

    myBall.changeRadius(windowWidth / 20);
}