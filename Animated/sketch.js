// REF: https://p5js.org/reference/

let x = 0;
let footerSize = 60;
let footerP;

function setup() {
    // monitor sizes
    // createCanvas(displayWidth, displayHeight);

    createCanvas(windowWidth, windowHeight - footerSize);
    footerP = createP();
    footerSize = footerP.size().height;
}

// This is called MANY times per second.
function draw() {
    background(128);

    ellipseMode(CORNER);
    circle(x % windowWidth, 30, 30, 30);

    // changes the InnerHTML of the p5 element
    footerP.html("Iteration: " + x.toString());

    // margin will return "16px 0px" and converting this to an int will remove the noise
    footerSize = footerP.size().height + int(footerP.style("margin")) * 2;

//    alert("footerSize" + int(footerP.style("margin")));
    x++;
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight - footerSize);
  }