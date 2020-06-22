// REF: https://p5js.org/reference/

var iteration = 0;

function setup() {
    createCanvas(640, 480);
}

function draw() {
    background(128);

    // setting the attributes of the drawing
    fill(0, 255, 255);
    stroke(255, 0, 0);
    strokeWeight(4)

    // default draws from the top left.
    //rectMode(CENTER)

    rect(50, 50, 100, 100);

    // with radius
    rect(175, 50, 100, 100, 5);

    // with all radii defined
    rect(300, 50, 100, 100, 5, 10, 30, 50);

    // no border
    noStroke();

    for (i = 0; i < 100; i++) {
        fill(0, 255 - i, 255 - i)
        rect(i + 50, 200, 5, 40)
    }

    var fromColor = color(0, 255, 255)
    var toColor = color(0, 155, 155)

    // lerpColor interpolates the color between "from" and "to"

    for (i = 0; i < 100; i++) {
        fill(lerpColor(fromColor, toColor, i / 100))
        rect(i + 50, 250, 5, 40)
    }

    // Olympic rings (sort of) using alpha/opacity

    var weight = 6
    var radius = weight * 10

    noFill()
    strokeWeight(weight)

    stroke(color(0, 0, 128, 128))
    ellipse(100, 350, radius, radius)

    stroke(color(0, 0, 0, 128))
    ellipse(100 + radius + weight * 2, 350, radius, radius)

    stroke(color(255, 0, 0, 128))
    ellipse(100 + 2 * (radius + weight * 2), 350, radius, radius)

    stroke(color(255, 255, 0, 128))
    ellipse(100 + radius / 2 + weight, 350 + radius / 2, radius, radius)

    stroke(color(0, 255 * 0.75, 0, 128))
    ellipse(100 + 3 * (radius / 2 + weight), 350 + radius / 2, radius, radius)


    translate(250, 0)

    weight = 6
    radius = weight * 10

    noFill()
    strokeWeight(weight)

    stroke(color(0, 0, 128))
    ellipse(100, 350, radius, radius)

    stroke(color(0, 0, 0))
    ellipse(100 + radius + weight * 2, 350, radius, radius)

    stroke(color(255, 0, 0))
    ellipse(100 + 2 * (radius + weight * 2), 350, radius, radius)

    stroke(color(255, 255, 0))
    ellipse(100 + radius / 2 + weight, 350 + radius / 2, radius, radius)

    stroke(color(0, 255 * 0.75, 0))
    ellipse(100 + 3 * (radius / 2 + weight), 350 + radius / 2, radius, radius)

    // blue over yellow
    stroke(color(0, 0, 128))
    arc(100, 350, radius, radius, -PI / 4, PI / 4)

    // black over yellow
    stroke(color(0, 0, 0))
    arc(100 + radius + weight * 2, 350, radius, radius, PI / 4, PI * 3 / 4)

    // red over green
    stroke(color(255, 0, 0))
    arc(100 + 2 * (radius + weight * 2), 350, radius, radius, PI / 4, PI * 3 / 4)

    //print(iteration++);
}