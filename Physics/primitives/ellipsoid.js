class Ellipsoid extends Shape {

    constructor (size)
    {
        super(size);

        this.collisionRadius = (size.x + size.y + size.z) / 3;
    }

    collided(element)
    {
        return (dist(this.location, element.location) < this.collisionRadius + element.collisionRadius)
        || (dist(add(this.location, this.velocity), add(element.location, element.velocity)) < this.collisionRadius + element.collisionRadius);
    }

    drawElement() {     // OVERRIDE
        ellipsoid(this.size.x, this.size.y, this.size.z);
    }
}