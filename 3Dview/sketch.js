// REF: https://p5js.org/reference/

let canvasSide = 500;

let boxSide = 50;
let frameScale = 0.01;

function setup() {
    createCanvas(canvasSide, canvasSide, WEBGL);
    //createCheckbox('Stroke', true);
}

function draw() {
    background(128);

    // If no light is present, the color will be very flat

    ambientLight(60, 60, 60);
    pointLight(255, 255, 255, canvasSide / 2, canvasSide / 2, 100);

    //normalMaterial();         // Typically used for debugging.

    // Rotate the reference

    let angle = frameCount * frameScale;

    rotateX(angle);
    rotateY(angle * 0.25);

    //noStroke();      // Get ride of the edges

    box(boxSide);

    box(boxSide / 2, boxSide / 2, boxSide * 2);     // Longer along the Z axis.

    line(0, 0, boxSide * 2, 0);
    line(0, 0, -boxSide * 2, 0);

    line(0, 0, 0, boxSide);
    line(0, 0, 0, -boxSide);

    push();

    noStroke();

    let radius = boxSide / 5;

    torus(boxSide * 4, radius / 3, canvasSide / 10);

    drawSphere(boxSide * 2, 0, 0, radius);
    drawSphere(-boxSide * 2, 0, 0, radius);

    drawCone(boxSide * 3, 0, 0, radius, radius * 2);
    drawCone(-boxSide * 3, 0, 0, radius, radius * 2);

    drawSphere(0, boxSide, 0, radius);
    drawSphere(0, -boxSide, 0, radius);

    drawSphere(0, 0, boxSide * 2, radius);
    drawSphere(0, 0, -boxSide * 2, radius);

    pop();

    rotateY(HALF_PI);

    line(0, 0, boxSide * 2, 0);
    line(0, 0, -boxSide * 2, 0);
}

function drawCone(x, y, z, r, h)
{
    // TODO: Rotate to point in the direction of a unit vector

    push();
    translate(x, y, z);
    rotateZ(HALF_PI);
    cone(r, h);
    pop();
}

function drawSphere(x, y, z, r)
{
    push();
    translate(x, y, z);
    sphere(r);
    pop();
}