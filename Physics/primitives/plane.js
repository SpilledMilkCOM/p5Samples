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
    
    drawElement() {
        plane(this.size.x, this.size.y);
    }
}