// REF: https://p5js.org/reference/

let diameter = 30;
let direction = 1;
let footerSize = 60;
let footerP;
let lastNow;
let x = 0;

function setup() {
    // monitor sizes
    // createCanvas(displayWidth, displayHeight);

    createCanvas(windowWidth, windowHeight - footerSize);
    footerP = createP();
    footerSize = footerP.size().height;
    lastNow = Date.now();
}

// This is called MANY times per second.
function draw() {
    let durationMS = floor(1000 / (Date.now() - lastNow));
    lastNow = Date.now();

    background(128);

    ellipseMode(CORNER);
    circle(x, diameter, diameter, diameter);

    // changes the InnerHTML of the p5 element
    footerP.html("Iteration: " + x.toString() + " - FPS: " + durationMS.toString());

    // margin will return "16px 0px" and converting this to an int will remove the noise
    footerSize = footerP.size().height + int(footerP.style("margin")) * 2;

    //    alert("footerSize" + int(footerP.style("margin")));

    if (x + diameter + direction > windowWidth) {
        direction = -1;
    }
    else if (x < 0) {
        direction = 1;
    }

    x += direction;
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight - footerSize);
}