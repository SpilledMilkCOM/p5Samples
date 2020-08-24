// REF: https://p5js.org/reference/

let canvasSide = 500;
let velocityScale = 2.5;

let fishBowl = null;
let balls = null;

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);

    // https://p5js.org/reference/#/p5.Vector

    fishBowl = new ContainmentBox(createVector(windowWidth / 4, windowHeight / 4, windowWidth / 2));

    balls = new Array();

    for(count = 0; count < 1000; count++)
    {
        balls.push(new Ball(windowWidth / 100 * random(0.75, 1.0)));

        let xVelocity = random(-1, 1) * velocityScale;
        let yVelocity = random(-1, 1) * velocityScale;
        let zVelocity = random(-1, 1) * velocityScale;

        balls[count].changeVelocity(createVector(xVelocity, yVelocity, zVelocity));

        balls[count].changeColor(color(random(128,255), random(128,255), random(128,255)));
    }
}

function draw() {
    background(128);

    // If no light is present, the color will be very flat

    ambientLight(60, 60, 60);
    pointLight(255, 255, 255, canvasSide / 2, canvasSide / 2, 100);

    // Spheres don't look very good with their lattice.

    noStroke();

    balls.forEach(ball => {
        fishBowl.contain(ball);
        ball.draw()
    });
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);

    balls.forEach(ball => ball.changeRadius(windowWidth / 200 * random(0.5, 1.0)));
}