class Line extends Shape {

    constructor(p1, p2) {
        let size = createVector(Math.abs(p2.x - p1.x)
                                , Math.abs(p2.y - p1.y)
                                , Math.abs(p2.z - p1.z));

        super(size);

        this.p1 = p1;
        this.p2 = p2;

        this.strokeWeight = 1;
    }

    changeSize(size) {
        this.size = size;
    }

    drawElement() {
        line(this.p1.x, this.p1.y, this.p1.z, this.p2.x, this.p2.y, this.p2.z);
    }
}