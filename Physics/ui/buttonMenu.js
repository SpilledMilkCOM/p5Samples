class ButtonMenu {

    constructor() {
        this.buttons = new Array();

        this.menuMargin = 4;
    }

    addButton(label, clickEvent) {
        let button = createButton(label);               // p5.js global method.

        button.mousePressed(clickEvent);

        // Initially the buttons are horizontal

        let previousButtonPosition = { x: this.menuMargin, y: this.menuMargin };
        let previousButtonSize = {width: 0, height: 0};

        if (this.buttons.length > 0) {
            let previousButton = this.buttons[this.buttons.length - 1];

            previousButtonPosition = previousButton.position();
            previousButtonSize = previousButton.size();
        }

        // Stack the buttons up side by side using the same Y position.

        button.position(previousButtonPosition.x + previousButtonSize.width, previousButtonPosition.y);

        this.buttons.push(button);
    }

    position() {
        let result = { x: 0, y: 0};

        if (this.buttons.length > 0) {
            // The first button contains the position of the entire bar.

            result = this.buttons[0].position();
        }

        return result;
    }

    render() {
        // possibly reposition the button menu (horizontal / vertical)
    }
}