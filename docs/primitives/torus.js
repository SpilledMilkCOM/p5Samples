class Torus extends Shape {

    constructor (size)
    {
        super(size);

        this.collisionRadius = size.x;
        this.size = size;
    }

    drawElement() {     // OVERRIDE
        torus(this.size.x, this.size.y);
    }
}