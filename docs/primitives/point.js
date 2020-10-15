class Point extends Element {

    constructor (location)
    {
        super();

        this.location = location;
    }

    collided(element)
    {
        return (dist(this.location, element.location) < this.collisionRadius + element.collisionRadius)
        || (dist(add(this.location, this.velocity), add(element.location, element.velocity)) < this.collisionRadius + element.collisionRadius);
    }

    drawElement() {
        point(this.location.x, this.location.y, this.location.z);
    }
}