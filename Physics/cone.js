class Cone extends Element {

    constructor (radius, height)
    {
        super();

        this.collisionRadius = (height / 2 + radius) / 2;
        this.height = height;
        this.radius = radius;
    }

    changeHeight(height)
    {
        this.height = height;
    }

    changeRadius(radius)
    {
        this.radius = radius;
    }

    collided(element)
    {
        return (dist(this.location, element.location) < this.collisionRadius + element.collisionRadius)
        || (dist(add(this.location, this.velocity), add(element.location, element.velocity)) < this.collisionRadius + element.collisionRadius);
    }

    drawElement() {
        noStroke();     // TODO: Make this a property of the element.
        cone(this.radius, this.height);
    }
}