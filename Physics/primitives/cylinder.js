class Cylinder extends Shape {

    constructor (radius, height)
    {
        let diameter = radius * 2;

        super(createVector(diameter, diameter, height));

        this.collisionRadius = (height / 2 + radius) / 2;
        this.height = height;
        this.radius = radius;
    }

    changeHeight(height)
    {
        this.changeSize(createVector(this.size.x, this.size.y, height));
    }

    changeRadius(radius)
    {
        let diameter = radius * 2;
        this.changeSize(createVector(diameter, diameter, this.size.z));
    }

    changeSize(size)
    {
        super.changeSize(size);

        this.radius = size.x / 2.0;
        this.height = size.z;
    }

    drawElement() {
        cylinder(this.radius, this.height);
    }
}