class Box extends Element {

    constructor (size)
    {
        super();

        this.collisionRadius = (size.x + size.y + size.z) / 6;
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

    drawElement() {
        noStroke();     // TODO: Make this a property of the element.
        box(this.size.x, this.size.y, this.size.z);
    }
}