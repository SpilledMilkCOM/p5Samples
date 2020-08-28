class Sphere extends Element {

    constructor (radius)
    {
        super();

        this.collisionRadius = radius;
        this.radius = radius;
    }

    changeRadius(radius)
    {
        this.radius = radius;
    }

    changeSize(size)
    {
        this.radius = size.x;
    }

    collided(element)
    {
        return (dist(this.location, element.location) < this.collisionRadius + element.collisionRadius)
        || (dist(add(this.location, this.velocity), add(element.location, element.velocity)) < this.collisionRadius + element.collisionRadius);
    }

    drawElement() {     // OVERRIDE
        // Spheres don't look very good with their lattice.
        noStroke();

        sphere(this.radius);
    }
}