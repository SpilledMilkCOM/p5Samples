class Sphere extends Shape {

    constructor (radius)
    {
        let diameter = radius * 2;

        super(createVector(diameter, diameter, diameter));

        this.collisionRadius = radius;
        this.radius = radius;
    }

    changeRadius(radius)
    {
        let diameter = radius * 2;
        this.changeSize(createVector(diameter, diameter, diameter));
    }

    changeSize(size)
    {
        super.changeSize(size);

        this.radius = size.x / 2.0;
    }

    collided(element)
    {
        return (dist(this.location, element.location) < this.collisionRadius + element.collisionRadius)
        || (dist(add(this.location, this.velocity), add(element.location, element.velocity)) < this.collisionRadius + element.collisionRadius);
    }

    drawElement() {     // OVERRIDE
        sphere(this.radius);
    }
}