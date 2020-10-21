class Composite extends Element {

    constructor()
    {
        super();

        this.elements = new Array();
    }

    addElement(element) {
        this.elements.push(element);

        return element;     // So you can use it for an assignment.
    }

    drawElement() {
        this.elements.forEach(element => {
            element.draw()
        });
    }
}