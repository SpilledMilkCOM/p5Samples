class Composite extends Element {

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

    drawElement() {
        this.elements.forEach(element => element.draw());
    }
}