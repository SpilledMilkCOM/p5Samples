class Plane extends Shape {

    constructor(size)
    {
        super(size);

        this.collisionRadius = (size.x + size.y) / 4;
    }

    clone()
    {
        let result = new Plane(this.size);

        result.deepCopy(this);

        return result;
    }

    collided(element)
    {
        return (dist(this.location, element.location) < this.collisionRadius + element.collisionRadius)
        || (dist(add(this.location, this.velocity), add(element.location, element.velocity)) < this.collisionRadius + element.collisionRadius);
    }

    drawElement() {
        plane(this.size.x, this.size.y);
    }
}