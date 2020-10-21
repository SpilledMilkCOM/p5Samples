class Box extends Shape {

    constructor (size)
    {
        super(size);

        this.collisionRadius = (size.x + size.y + size.z) / 6;
    }

    drawElement() {
        box(this.size.x, this.size.y, this.size.z);
    }
}