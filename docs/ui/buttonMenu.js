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
        let previousButtonSize = { width: 0, height: 0 };

        if (this.buttons.length > 0) {
            let previousButton = this.buttons[this.buttons.length - 1];

            previousButtonPosition = previousButton.position();
            previousButtonSize = previousButton.size();
        }

        // Stack the buttons up side by side using the same Y position.

        button.position(previousButtonPosition.x + previousButtonSize.width + this.menuMargin, previousButtonPosition.y);

        this.buttons.push(button);
    }

    position(x, y) {
        let result = { x: 0, y: 0 };

        if (this.buttons.length > 0) {
            // The first button contains the position of the entire bar.

            if (x != null && y != null) {
                let previousButtonPosition = null;
                let previousButtonSize = null;

                result.x = x;
                result.y = y;

                for (let index = 0; index < this.buttons.length; index++) {
                    if (previousButtonPosition == null) {
                        this.buttons[index].position(result.x, result.y);
                    } else {
                        this.buttons[index].position(previousButtonPosition.x + previousButtonSize.width + this.menuMargin, previousButtonPosition.y);
                    }
                    previousButtonPosition = this.buttons[index].position();
                    previousButtonSize = this.buttons[index].size();
                }
            }
            else {
                // If called with no arguments, then return the position.

                result = this.buttons[index].position();
            }
        }

        return result;
    }

    render() {
        // possibly reposition the button menu (horizontal / vertical)
    }
}