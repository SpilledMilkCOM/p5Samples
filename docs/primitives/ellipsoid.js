class Ellipsoid extends Shape {

    constructor (size)
    {
        super(size);

        this.collisionRadius = (size.x + size.y + size.z) / 3;
    }

    drawElement() {     // OVERRIDE
        ellipsoid(this.size.x, this.size.y, this.size.z);
    }
}