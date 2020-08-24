class Ball {

    constructor (radius)
    {
        this.collisionRadius = radius;
        this.radius = radius;

        this.location = createVector(0, 0, 0);
        this.velocity = createVector(0, 0, 0);
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

    draw() {
        push();

        translate(this.location.x, this.location.y, this.location.z);
        sphere(this.radius);

        pop();

        this.location.add(this.velocity);
    }
}