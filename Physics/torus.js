class Torus extends Element {

    constructor (size)
    {
        super();

        this.collisionRadius = size.x;
        this.size = size;
    }

    changeSize(size)
    {
        this.size = size;
    }

    collided(element)
    {
        return (dist(this.location, element.location) < this.collisionRadius + element.collisionRadius)
        || (dist(add(this.location, this.velocity), add(element.location, element.velocity)) < this.collisionRadius + element.collisionRadius);
    }

    drawElement() {     // OVERRIDE
        // Spheres don't look very good with their lattice.
        noStroke();

        torus(this.size.x, this.size.y);
    }
}