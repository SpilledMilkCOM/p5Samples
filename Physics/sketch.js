// REF: https://p5js.org/reference/

let canvasSide = 500;
let containmentScale = 2.0;
let velocityScale = 1.5;

let fishBowl = null;
let balls = null;
let scene = null;

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);

    // https://p5js.org/reference/#/p5.Vector

    scene = new Scene();

    scene.changePointLightLocation(createVector(windowWidth / 2, windowHeight / 2, windowWidth / 2));
    scene.changeContainment(new ContainmentBox(createVector(windowWidth / 8 * containmentScale, windowHeight / 8 * containmentScale, windowWidth / 7 * containmentScale)));

    for(count = 0; count < 100; count++)
    {
        //let element = new Ball(windowWidth / 200 * random(0.75, 1.0));
        //let element = new Box(createVector(windowWidth / 100 * random(0.75, 1.0), windowWidth / 100 * random(0.75, 1.0), windowWidth / 100 * random(0.75, 1.0)));
        let element = new Cone(windowWidth / 100 * random(0.75, 1.0), windowWidth / 100 * random(0.75, 1.0) * 2);
        //let element = new Cylinder(windowWidth / 100 * random(0.75, 1.0), windowWidth / 100 * random(0.75, 1.0) * 2);

        let xVelocity = random(-1, 1) * velocityScale;
        let yVelocity = random(-1, 1) * velocityScale;
        let zVelocity = random(-1, 1) * velocityScale;

        element.changeVelocity(createVector(xVelocity, yVelocity, zVelocity));
        element.changeColor(color(random(128,255), random(128,255), random(128,255)));

        let myFrameRate = 60; //frameRate();
        let rotationPerSecond = 2 * PI / myFrameRate * random(0.1, 0.2) * (random() < 0.5 ? -1 : 1);

        //element.changeRotationalVelocity(createVector(rotationPerSecond, rotationPerSecond, 0));
        element.changeRotationalVelocity(createVector(rotationPerSecond, 0, rotationPerSecond));

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