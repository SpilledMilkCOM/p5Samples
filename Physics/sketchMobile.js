// REF: https://p5js.org/reference/

let canvasSide = 500;
let containmentScale = 2.0;
let velocityScale = 1.5;

let menuMargin = 4;

let fishBowl = null;
let balls = null;
let scene = null;

let originalWindowWidth = null;
let originalWindowHeight = null;

let boxButton = null;
let coneButton = null;
let cylinderButton = null;
let ellipsoidButton = null;
let lineButton = null;
let planeButton = null;
let pointButton = null;
let sphereButton = null;
let torusButton = null;

let activeShape = 'Ellipsoid';

function setup() {
    let previousButton = null;

    originalWindowWidth = windowWidth;
    originalWindowHeight = windowHeight;

    createCanvas(windowWidth, windowHeight, WEBGL);

    boxButton = createButton('Box');
    boxButton.mousePressed(clickBoxButton);
    boxButton.position(menuMargin, menuMargin);
    previousButton = boxButton;

    coneButton = createButton('Cone');
    coneButton.mousePressed(clickConeButton);
    coneButton.position(previousButton.position().x + previousButton.size().width + menuMargin, menuMargin);
    previousButton = coneButton;

    cylinderButton = createButton('Cylinder');
    cylinderButton.mousePressed(clickCylinderButton);
    cylinderButton.position(previousButton.position().x + previousButton.size().width + menuMargin, menuMargin);
    previousButton = cylinderButton;

    ellipsoidButton = createButton('Ellipsoid');
    ellipsoidButton.mousePressed(clickEllipsoidButton);
    ellipsoidButton.position(previousButton.position().x + previousButton.size().width + menuMargin, menuMargin);
    previousButton = ellipsoidButton;

    // lineButton = createButton('Line');
    // lineButton.mousePressed(clickLineButton);
    // lineButton.position(previousButton.position().x + previousButton.size().width + menuMargin, menuMargin);
    // previousButton = lineButton;

    planeButton = createButton('Plane');
    planeButton.mousePressed(clickPlaneButton);
    planeButton.position(previousButton.position().x + previousButton.size().width + menuMargin, menuMargin);
    previousButton = planeButton;
    
    // pointButton = createButton('Point');
    // pointButton.mousePressed(clickPointButton);
    // pointButton.position(previousButton.position().x + previousButton.size().width + menuMargin, menuMargin);
    // previousButton = pointButton;

    sphereButton = createButton('Sphere');
    sphereButton.mousePressed(clickSphereButton);
    sphereButton.position(previousButton.position().x + previousButton.size().width + menuMargin, menuMargin);
    previousButton = sphereButton;
    
    torusButton = createButton('Torus');
    torusButton.mousePressed(clickTorusButton);
    torusButton.position(previousButton.position().x + previousButton.size().width + menuMargin, menuMargin);
    previousButton = torusButton;

    // https://p5js.org/reference/#/p5.Vector

    scene = new Scene();

    scene.changePointLightLocation(createVector(windowWidth / 2, windowHeight / 2, windowWidth / 2));
    scene.changeContainment(new ContainmentBox(createVector(windowWidth / 8 * containmentScale, windowHeight / 8 * containmentScale, windowWidth / 7 * containmentScale)));

    populateSceneWithMovingElements(scene);
    //populateSceneWithPlanes(scene);
}

// ----==== EVENTS ====-------------------------------------------------------------------------------------

function clickBoxButton() {
    activeShape = 'Box';

    populateSceneWithMovingElements(scene);
}

function clickConeButton() {
    activeShape = 'Cone';

    populateSceneWithMovingElements(scene);
}

function clickCylinderButton() {
    activeShape = 'Cylinder';

    populateSceneWithMovingElements(scene);
}

function clickEllipsoidButton() {
    activeShape = 'Ellipsoid';

    populateSceneWithMovingElements(scene);
}

function clickLineButton() {
    activeShape = 'Line';

    populateSceneWithMovingElements(scene);
}

function clickPlaneButton() {
    activeShape = 'Plane';

    populateSceneWithMovingElements(scene);
}

function clickPointButton() {
    activeShape = 'Point';

    populateSceneWithMovingElements(scene);
}

function clickSphereButton() {
    activeShape = 'Sphere';

    populateSceneWithMovingElements(scene);
}

function clickTorusButton() {
    activeShape = 'Torus';

    populateSceneWithMovingElements(scene);
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
    let element = null;

    switch (activeShape) {
        case 'Box':
            element = new Box(createVector(windowWidth / 100 * random(2.0, 2.5), windowWidth / 100 * random(2.0, 2.5), windowWidth / 100 * random(2.0, 2.5)));
            break;

        case 'Cone':
            element = new Cone(windowWidth / 100 * random(0.75, 1.0), windowWidth / 100 * random(0.75, 1.0) * 2);
            break;

        case 'Cylinder':
            element = new Cylinder(windowWidth / 100 * random(0.75, 1.0), windowWidth / 100 * random(0.75, 1.0) * 2);
            break;

        case 'Ellipsoid':
            //let element = new Ellipsoid(createVector(windowWidth / 100 * random(0.5, 1.0), windowWidth / 100 * random(0.5, 1.0), windowWidth / 100 * random(0.5, 1.0)));
            // M&M's
            element = new Ellipsoid(createVector(windowWidth / 75, windowWidth / 75, windowWidth / 150));
            break;
            
        case 'Line':
            element = new Line(createVector(windowWidth / 10 * random(0.75, 1.0), windowWidth / 10 * random(0.75, 1.0), windowWidth / 10 * random(0.75, 1.0))
                            , createVector(windowWidth / 10 * random(0.75, 1.0), windowWidth / 10 * random(0.75, 1.0), windowWidth / 10 * random(0.75, 1.0)));
            break;

        case 'Plane':
            element = new Plane(createVector(windowWidth / 200 * random(2.0, 4.0), windowWidth / 200 * random(2.0, 4.0)));
            break;
            
        case 'Point':
            element = new Point(createVector(0, 0, 0));
            break;

        case 'Sphere':
            element = new Sphere(windowWidth / 100 * random(0.75, 1.0));
            break;

        case 'Torus':
            // Cheerios (or donuts)
            element = new Torus(createVector(windowWidth / 100, windowWidth / 200));
            break;

        default:
    }

    //let element = new Point(createVector(windowWidth / 10 * random(0.75, 1.0), windowWidth / 10 * random(0.75, 1.0), windowWidth / 10 * random(0.75, 1.0)));
    //let element = new Point(createVector(0, 0, 0));

    return element;
}

function populateSceneWithMovingElements(scene) {
    scene.clearElements();

    for (count = 0; count < 100; count++) {
        let element = createRandomElement();

        let xVelocity = random(-1, 1) * velocityScale;
        let yVelocity = random(-1, 1) * velocityScale;
        let zVelocity = random(-1, 1) * velocityScale;

        element.changeVelocity(createVector(xVelocity, yVelocity, zVelocity));
        //element.changeColor(color(random(128,255), random(128,255), random(128,255), random(128,255)));       // With random Alpha channel.
        element.changeColor(color(random(128, 255), random(128, 255), random(128, 255)));

        let myFrameRate = 60; //frameRate();
        let rotationPerSecond = 2 * PI / myFrameRate * random(0.1, 0.2) * (random() < 0.5 ? -1 : 1);

        element.changeRotationalVelocity(createVector(rotationPerSecond, rotationPerSecond, rotationPerSecond));

        scene.addElement(element);
    }
}

function populateSceneWithPlanes(scene) {
    const PLANE_SIZE = 600;
    const COLOR_INTENSITY = 255;
    const ALPHA = 150;

    let myFrameRate = 60; //frameRate();
    let rotationPerSecond = 2 * PI / myFrameRate * random(0.1, 0.2) * (random() < 0.5 ? -1 : 1);

    let plane = new Plane(createVector(PLANE_SIZE, PLANE_SIZE))

    plane.changeColor(color(COLOR_INTENSITY, 0, 0, ALPHA));
    // No rotation (plane is flat with respect to the viewer)

    plane.changeRotationalVelocity(createVector(0, rotationPerSecond, 0));

    scene.addElement(plane);

    plane = new Plane(createVector(PLANE_SIZE, PLANE_SIZE))

    plane.changeColor(color(0, COLOR_INTENSITY, 0, ALPHA));
    plane.changeRotation(createVector(0, PI / 2, 0));           // 90 degrees about the Y-axis (vertical)
    plane.changeRotationalVelocity(createVector(0, rotationPerSecond, 0));

    scene.addElement(plane);

    plane = new Plane(createVector(PLANE_SIZE, PLANE_SIZE))

    plane.changeColor(color(0, 0, COLOR_INTENSITY, ALPHA));
    plane.changeRotation(createVector(PI / 2, 0, 0));           // 90 degrees about the X-axis (horizontal)
    plane.changeRotationalVelocity(createVector(0, 0, -rotationPerSecond));

    scene.addElement(plane);
}