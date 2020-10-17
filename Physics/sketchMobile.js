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

let environmentMenu = null;
let primitiveMenu = null;

let activeShape = 'Ellipsoid';

function setup() {
    originalWindowWidth = windowWidth;
    originalWindowHeight = windowHeight;

    createCanvas(windowWidth, windowHeight, WEBGL);

    setupUI();

    // https://p5js.org/reference/#/p5.Vector

    scene = new Scene();

    scene.changePointLightLocation(createVector(windowWidth / 2, windowHeight / 2, windowWidth / 2));
    scene.changeContainment(new ContainmentBox(createVector(windowWidth / 8 * containmentScale, windowHeight / 8 * containmentScale, windowWidth / 7 * containmentScale)));

    populateSceneWithMovingElements(scene);
}

// ----==== MENU EVENTS ====-------------------------------------------------------------------------------------

function clickBoxButton() {
    activeShape = 'Box';

    populateSceneWithMovingElements(scene);
}

function clickClearButton() {
    scene.clearElements();
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

function clickOctantsButton() {
    activeShape = 'Octants';

    populateSceneWithPlanes(scene);
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

    return element;
}

function populateSceneWithMovingElements(scene) {
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

function setupUI() {
    primitiveMenu = new ButtonMenu();

    // The order matters.  These will be stacked up left to right.

    primitiveMenu.addButton('Box', clickBoxButton);
    primitiveMenu.addButton('Cone', clickConeButton);
    primitiveMenu.addButton('Cylinder', clickCylinderButton);
    primitiveMenu.addButton('Ellipsoid', clickEllipsoidButton);
    //primitiveMenu.addButton('Line', clickLineButton);
    primitiveMenu.addButton('Plane', clickPlaneButton);
    //primitiveMenu.addButton('Point', clickPointButton);
    primitiveMenu.addButton('Sphere', clickSphereButton);
    primitiveMenu.addButton('Torus', clickTorusButton);

    primitiveMenu.position(10, 10);

    environmentMenu = new ButtonMenu();

    environmentMenu.addButton('Clear', clickClearButton);
    environmentMenu.addButton('Octants', clickOctantsButton);

    environmentMenu.position(10, 45);
}