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

function setup() {
    originalWindowWidth = windowWidth;
    originalWindowHeight = windowHeight;

    createCanvas(windowWidth, windowHeight, WEBGL);

    setupUI();

    // https://p5js.org/reference/#/p5.Vector

    scene = new Scene();

    scene.changePointLightLocation(createVector(windowWidth / 2, windowHeight / 2, windowWidth / 2));
    scene.changeContainment(new ContainmentBox(createVector(windowWidth / 8 * containmentScale, windowHeight / 8 * containmentScale, windowWidth / 7 * containmentScale)));

    populateSceneWithMovingElements(scene, 'Ellipsoid');
}

// ----==== MENU EVENTS ====-------------------------------------------------------------------------------------

function clickBoxButton() {
    populateSceneWithMovingElements(scene, 'Box');
}

function clickBoundsButton() {
    populateSceneWithBounds(scene);
}

function clickClearButton() {
    scene.clearElements();
}

function clickConeButton() {
    populateSceneWithMovingElements(scene, 'Cone');
}

function clickCylinderButton() {
    populateSceneWithMovingElements(scene, 'Cylinder');
}

function clickEllipsoidButton() {
    populateSceneWithMovingElements(scene, 'Ellipsoid');
}

function clickLineButton() {
    populateSceneWithMovingElements(scene, 'Line');
}

function clickOctantsButton() {
    populateSceneWithPlanes(scene);
}

function clickPlaneButton() {
    populateSceneWithMovingElements(scene, 'Plane');
}

function clickPointButton() {
    populateSceneWithMovingElements(scene, 'Point');
}

function clickSphereButton() {
    populateSceneWithMovingElements(scene, 'Sphere');
}

function clickTorusButton() {
    populateSceneWithMovingElements(scene, 'Torus');
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

function populateSceneWithBounds(scene) {
    const COLOR_INTENSITY = 255;
    const ALPHA = 100;

    let boundsBox = new Box(scene.containment.size);

    boundsBox.changeScale(2);
    boundsBox.changeColor(color(COLOR_INTENSITY, COLOR_INTENSITY, COLOR_INTENSITY, ALPHA));

    scene.addElement(boundsBox);
}

function setupUI() {
    primitiveMenu = new ButtonMenu();

    // The order matters.  These will be stacked up left to right.

    primitiveMenu.addButton('Box', clickBoxButton);
    primitiveMenu.addButton('Cone', clickConeButton);
    primitiveMenu.addButton('Cylinder', clickCylinderButton);
    primitiveMenu.addButton('Ellipsoid', clickEllipsoidButton);
    primitiveMenu.addButton('Line', clickLineButton);
    primitiveMenu.addButton('Plane', clickPlaneButton);
    primitiveMenu.addButton('Point', clickPointButton);
    primitiveMenu.addButton('Sphere', clickSphereButton);
    primitiveMenu.addButton('Torus', clickTorusButton);

    primitiveMenu.position(10, 10);

    environmentMenu = new ButtonMenu();

    environmentMenu.addButton('Clear', clickClearButton);
    environmentMenu.addButton('Bounds', clickBoundsButton);
    environmentMenu.addButton('Octants', clickOctantsButton);

    environmentMenu.position(10, 45);
}