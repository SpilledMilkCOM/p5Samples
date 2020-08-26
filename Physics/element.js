class Element {
    constructor() {

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

    changeLocation(location)
    {
        this.location = location;
    }

    changeVelocity(velocity)
    {
        this.velocity = velocity;
    }

    draw() {
        push();

        fill(this.color);
        translate(this.location.x, this.location.y, this.location.z);

        this.drawElement();
 
        pop();

        this.location.add(this.velocity);
    }
}