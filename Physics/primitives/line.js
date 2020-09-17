class Line extends Element {

    constructor (p1, p2)
    {
        super();

        this.p1 = p1;
        this.p2 = p2;
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
        line(this.p1.x, this.p1.y, this.p1.z, this.p2.x, this.p2.y, this.p2.z);
    }
}