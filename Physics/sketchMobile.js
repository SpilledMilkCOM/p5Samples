// REF: https://p5js.org/reference/

let canvasSide = 500;
let containmentScale = 2.0;
let velocityScale = 1.5;

let fishBowl = null;
let balls = null;
let scene = null;

let originalWindowWidth = null;
let originalWindowHeight = null;

function setup() {
    originalWindowWidth = windowWidth;
    originalWindowHeight = windowHeight;

    createCanvas(windowWidth, windowHeight, WEBGL);

    // https://p5js.org/reference/#/p5.Vector

    scene = new Scene();

    scene.changePointLightLocation(createVector(windowWidth / 2, windowHeight / 2, windowWidth / 2));
    scene.changeContainment(new ContainmentBox(createVector(windowWidth / 8 * containmentScale, windowHeight / 8 * containmentScale, windowWidth / 7 * containmentScale)));

    //populateSceneWithMovingElements(scene);
    populateSceneWithPlanes(scene);
}

// ----==== OVERRIDES ====-------------------------------------------------------------------------------------

/**
 * Called for every frame in p5.js
 */
function draw() {
    scene.draw();
}

function mouseWheel(event) {

    scene.adjustScale(event.delta * 0.0005);

    // uncomment to block page scrolling (return false)

    return false;
  }

function touchEnded() {
    scene.mouseOrTouch.touchEnded();
}

function touchMoved() {
    scene.mouseOrTouch.touchMoved();
}

function touchStarted() {
    scene.mouseOrTouch.touchStarted();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);

    scene.changeScale(windowWidth / originalWindowWidth);
}

// ----==== PRIVATE ====-------------------------------------------------------------------------------------

function createRandomElement() {
        //let element = new Sphere(windowWidth / 100 * random(0.75, 1.0));
        
        //let element = new Box(createVector(windowWidth / 100 * random(0.75, 1.0), windowWidth / 100 * random(0.75, 1.0), windowWidth / 100 * random(0.75, 1.0)));
        //let element = new Box(createVector(windowWidth / 100 * random(1.0, 1.5), windowWidth / 100 * random(0.25, 0.5), windowWidth / 100 * random(2.0, 2.5)));

        //let element = new Cone(windowWidth / 100 * random(0.75, 1.0), windowWidth / 100 * random(0.75, 1.0) * 2);
        //let element = new Cylinder(windowWidth / 100 * random(0.75, 1.0), windowWidth / 100 * random(0.75, 1.0) * 2);
        //let element = new Plane(createVector(windowWidth / 200 * random(0.75, 1.0), windowWidth / 200 * random(0.75, 1.0) * 2));

        //let element = new Ellipsoid(createVector(windowWidth / 100 * random(0.5, 1.0), windowWidth / 100 * random(0.5, 1.0), windowWidth / 100 * random(0.5, 1.0)));
        // M&M's
        let element = new Ellipsoid(createVector(windowWidth / 75, windowWidth / 75, windowWidth / 150));

        // Cheerios (or donuts)
        //let element = new Torus(createVector(windowWidth / 100, windowWidth / 200));

        // let element = new Line(createVector(windowWidth / 10 * random(0.75, 1.0), windowWidth / 10 * random(0.75, 1.0), windowWidth / 10 * random(0.75, 1.0))
        //                        , createVector(windowWidth / 10 * random(0.75, 1.0), windowWidth / 10 * random(0.75, 1.0), windowWidth / 10 * random(0.75, 1.0)));

        //let element = new Point(createVector(windowWidth / 10 * random(0.75, 1.0), windowWidth / 10 * random(0.75, 1.0), windowWidth / 10 * random(0.75, 1.0)));
        //let element = new Point(createVector(0, 0, 0));

        return element;
}

function populateSceneWithMovingElements(scene) {
    for(count = 0; count < 100; count++)
    {
        let element = createRandomElement();

        let xVelocity = random(-1, 1) * velocityScale;
        let yVelocity = random(-1, 1) * velocityScale;
        let zVelocity = random(-1, 1) * velocityScale;

        element.changeVelocity(createVector(xVelocity, yVelocity, zVelocity));
        //element.changeColor(color(random(128,255), random(128,255), random(128,255), random(128,255)));       // With random Alpha channel.
        element.changeColor(color(random(128,255), random(128,255), random(128,255)));

        let myFrameRate = 60; //frameRate();
        let rotationPerSecond = 2 * PI / myFrameRate * random(0.1, 0.2) * (random() < 0.5 ? -1 : 1);

        element.changeRotationalVelocity(createVector(rotationPerSecond, rotationPerSecond, rotationPerSecond));

        scene.addElement(element);
    }
}

function populateSceneWithPlanes(scene) {
    const PLANE_SIZE = 600;
    const COLOR_INTENSITY = 255;
    const ALPHA = 100;

    let plane = new Plane(createVector(PLANE_SIZE, PLANE_SIZE))

    plane.changeColor(color(COLOR_INTENSITY, 0, 0, ALPHA));
    // No rotation (plane is flat with respect to the viewer)

    scene.addElement(plane);

    plane = new Plane(createVector(PLANE_SIZE, PLANE_SIZE))

    plane.changeColor(color(0, COLOR_INTENSITY, 0, ALPHA));
    plane.changeRotation(createVector(0, PI / 2, 0));           // 90 degrees about the Y-axis (vertical)

    scene.addElement(plane);
    
    plane = new Plane(createVector(PLANE_SIZE, PLANE_SIZE))

    plane.changeColor(color(0, 0, COLOR_INTENSITY, ALPHA));
    plane.changeRotation(createVector(PI / 2, 0, 0));           // 90 degrees about the X-axis (horizontal)

    scene.addElement(plane);
}