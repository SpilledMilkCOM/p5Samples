class Element {
    constructor(size) {

        if (size != null) {
            this.originalSize = createVector(size.x, size.y, size.z);
            this.size = size.copy();        // Create a copy of the reference passed in (DON'T use it)
        }
        this.scale = 1.0;

        // https://p5js.org/reference/#/p5/color

        this.color = color(255);
        this.strokeWeight = 0;      // 0 means no-stroke

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
        this.location = location.copy();
    }

    changeRotation(rotation) {
        this.rotation = rotation.copy();
    }

    changeRotationalVelocity(rotationalVelocity) {
        this.rotationalVelocity = rotationalVelocity.copy();
    }

    changeScale(scale) {
        this.scale = scale;

        this.changeSize(createVector(this.originalSize.x * scale, this.originalSize.y * scale, this.originalSize.z * scale))
    }

    changeSize(size) {
        this.size = size.copy();
    }

    changeStroke(stroke) {
        this.stroke = stroke;
    }

    changeVelocity(velocity) {
        this.velocity = velocity.copy();
    }

    deepCopy(element) {
        this.originalSize = element.originalSize.copy();
        this.size = element.size.copy();
        this.scale = element.scale;

        this.color = element.color.copy();
        this.location = element.location.copy();
        this.rotation = element.rotation.copy();
        this.rotationalVelocity = element.rotationalVelocity.copy();
        this.velocity = element.velocity.copy();

        this.collisionRadius = element.collisionRadius;
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

        if (this.strokeWeight > 0) {
            strokeWeight(this.strokeWeight);
            stroke(this.color);
        }
        else {
            noStroke();
        }

        this.drawElement();

        pop();

        if (!mouseIsPressed) {
            this.location.add(this.velocity);
            this.rotation.add(this.rotationalVelocity);
        }
    }
}