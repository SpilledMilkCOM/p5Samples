/**
 * The goal of this class is to provide an interface for generic interface movements regardless of the input device (mouse or touch)
 */
class MouseOrTouch {

    constructor() {
        this.lastTouchX = 0;
        this.lastTouchY = 0;
    }

    mouseIsPressed() {
        let result = mouseIsPressed;        // Assign p5.js global

        if (touches.length > 0) {
            mouseIsPressed = true;
        }

        return result;
    }

    movedX() {
        return movedX;  // Assign p5.js global
    }

    movedY() {
        return movedY;  // Assign p5.js global
    }

    touchEnded() {

    }

    touchMoved() {

    }

    touchStarted() {
        
    }
}