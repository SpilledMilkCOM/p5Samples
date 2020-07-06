// REF: https://p5js.org/reference/

let angle = 0;
let w = 24;
let ma;     // "magic angle"
let maxD;
let canvasSide = 500;

let halfWidth;
let halfHeight;

function setup() {
    createCanvas(canvasSide, canvasSide, WEBGL);
    ma = Math.atan(1 / Math.sqrt(2));     // "magic angle"
    maxD = dist(0, 0, 200, 200);

    halfWidth = width / 2;
    halfHeight = height / 2;
}

// This is called MANY times per second.
function draw() {
    background(175);

    ortho(-canvasSide, canvasSide, -canvasSide, canvasSide, -canvasSide * 2, canvasSide * 2);

    // ambientLight();
    // pointLight();

    //directionalLight(255, 255, 255, 0, -1, 0);

    //translate(0, 0, -100);
    rotateX(-QUARTER_PI);
    rotateY(ma);

    let offset = 0;

    for (let z = 0; z < height; z += w) {
        for (let x = 0; x < width; x += w) {
            push();

            let d = dist(x, z, halfWidth, halfHeight);
            let offset = map(d, 0, maxD, -PI, PI);
            let a = angle + offset;
            let h = floor(map(sin(a), -1, 1, 100, 300));

            normalMaterial();
            translate(x - halfWidth, 0, z - halfHeight);
            box(w, h, w);

            pop();
        }
    }

    angle += 0.1;
}