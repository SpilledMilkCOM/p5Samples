class Element {
    constructor(size) {

        this.originalSize = createVector(size.x, size.y, size.z);
        this.size = size.copy();        // Create a copy of the reference passed in (DON'T use it)
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
    
    changeSize(size)
    {
        this.size = size.copy();
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

        this.drawElement();

        pop();

        if (!mouseIsPressed) {
            this.location.add(this.velocity);
            this.rotation.add(this.rotationalVelocity);
        }
    }
}