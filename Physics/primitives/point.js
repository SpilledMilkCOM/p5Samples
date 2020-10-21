class Point extends Shape {

    constructor (location)
    {
        super(createVector(1, 0, 0));

        this.location = location;
        this.strokeWeight = 1;
    }

    changeSize(size) {
        this.strokeWeight = size.x * 10;

        super.changeSize(size);
    }

    drawElement() {
        // The coordinates have already been translated in the Shape class.
        point(0, 0, 0);
    }
}