class Composite extends Shape {

    constructor() {
        super();

        this.elements = new Array();
    }

    addElement(element) {
        this.elements.push(element);

        // TODO: Adjust the size based on elements added.

        return element;     // So you can use it for an assignment.
    }

    changeScale(scale) {
        super.changeScale(scale);

        this.elements.forEach(element => element.changeScale(scale));
    }

    contain(containment) {
        this.elements.forEach(element => {
            if (containment) {
                containment.contain(element);
            }
        });
    }

    drawElement() {
        this.elements.forEach(element => element.draw());
    }
}