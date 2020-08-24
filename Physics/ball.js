class Ball {

    constructor (radius)
    {
        this.collisionRadius = radius;
        this.radius = radius;

        // https://p5js.org/reference/#/p5.Vector

        this.color = color(255);
        this.location = createVector(0, 0, 0);
        this.velocity = createVector(0, 0, 0);
    }

    changeColor(color) {
        this.color = color;
    }

    changeLocation(location)
    {
        this.location = location;
    }

    changeRadius(radius)
    {
        this.radius = radius;
    }

    changeVelocity(velocity)
    {
        this.velocity = velocity;
    }

    collided(primitive)
    {
        return (dist(this.location, primitive.location) < this.collisionRadius + primitive.collisionRadius)
        || (dist(add(this.location, this.velocity), add(primitive.location, primitive.velocity)) < this.collisionRadius + primitive.collisionRadius);
    }

    draw() {
        push();

        fill(this.color);
        translate(this.location.x, this.location.y, this.location.z);

        sphere(this.radius);

        pop();

        this.location.add(this.velocity);
    }
}