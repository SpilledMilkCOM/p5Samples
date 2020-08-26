// REF: https://p5js.org/reference/

let canvasSide = 500;
let containmentScale = 1.5;
let velocityScale = 2.5;

let fishBowl = null;
let balls = null;
let scene = null;

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);

    // https://p5js.org/reference/#/p5.Vector

    scene = new Scene();

    scene.changePointLightLocation(createVector(windowWidth / 2, windowHeight / 2, windowWidth / 2));
    scene.changeContainment(new ContainmentBox(createVector(windowWidth / 8 * containmentScale, windowHeight / 8 * containmentScale, windowWidth / 5 * containmentScale)));

    for(count = 0; count < 100; count++)
    {
        //let element = new Ball(windowWidth / 200 * random(0.75, 1.0));
        let element = new Box(createVector(windowWidth / 100 * random(0.75, 1.0), windowWidth / 100 * random(0.75, 1.0), windowWidth / 100 * random(0.75, 1.0)));

        let xVelocity = random(-1, 1) * velocityScale;
        let yVelocity = random(-1, 1) * velocityScale;
        let zVelocity = random(-1, 1) * velocityScale;

        element.changeVelocity(createVector(xVelocity, yVelocity, zVelocity));
        element.changeColor(color(random(128,255), random(128,255), random(128,255)));

        scene.addElement(element);
    }
}

function draw() {
    scene.draw();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);

    // TODO: Add a scale() method

    //scene.elements.forEach(element => element.changeRadius(windowWidth / 200 * random(0.5, 1.0)));
    scene.elements.forEach(element => element.changeSize(createVector(windowWidth / 200 * random(0.75, 1.0), windowWidth / 200 * random(0.75, 1.0), windowWidth / 200 * random(0.75, 1.0))));
}