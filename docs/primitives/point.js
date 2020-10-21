class Point extends Shape {

    constructor (location)
    {
        super();

        this.location = location;
        this.strokeWeight = 1;
    }

    drawElement() {
        // The coordinates have already been translated in the Shape class.
        point(0, 0, 0);
    }
}