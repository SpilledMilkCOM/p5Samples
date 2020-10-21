class Point extends Shape {

    constructor (location)
    {
        super();

        this.location = location;
        this.strokeWeight = 1;
    }

    drawElement() {
        point(this.location.x, this.location.y, this.location.z);
    }
}