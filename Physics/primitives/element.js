class Element {
    constructor(size) {

        this.originalSize = createVector(size.x, size.y, size.z);
        this.size = size;
        this.scale = 1.0;

        // https://p5js.org/reference/#/p5/color

        this.color = color(255);

        // https://p5js.org/reference/#/p5.Vector

        this.location = createVector(0, 0, 0);
        this.rotation = createVector(0, 0, 0);
        this.rotationalVelocity = createVector(0, 0, 0);        // Radians per seconds.
        this.velocity = createVector(0, 0, 0);

        this.collisionRadius = 0;
    }

    changeColor(color) {
        this.color = color;
    }

    changeLocation(location) {
        this.location = location;
    }

    changeRotation(rotation) {
        this.rotation = rotation;
    }

    changeRotationalVelocity(rotationalVelocity) {
        this.rotationalVelocity = rotationalVelocity;
    }
    
    changeScale(scale) {
        this.scale = scale;
        
        this.changeSize(createVector(this.originalSize.x * scale, this.originalSize.y * scale, this.originalSize.z * scale))
    }
    
    changeSize(size)
    {
        this.size = size;
    }

    changeVelocity(velocity) {
        this.velocity = velocity;
    }

    draw() {
        push();

        fill(this.color);

        // Then translate to its location.

        translate(this.location.x, this.location.y, this.location.z);

        // Rotate about itself.

        rotateX(this.rotation.x);
        rotateY(this.rotation.y);
        rotateZ(this.rotation.z);

        this.drawElement();

        pop();

        if (!mouseIsPressed) {
            this.location.add(this.velocity);
            this.rotation.add(this.rotationalVelocity);
        }
    }
}