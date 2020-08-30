/**
 * The goal of this class is to provide an interface for generic interface movements regardless of the input device (mouse or touch)
 */
class MouseOrTouch {

    constructor() {
        this.CLICK_DELAY_MILLISECONDS = 500;

        this.click = false;
        this.doubleClick = false;

        this.lastTouch = null;
        this.movedValueRetrieved = false;
        this.timeLastTouchEnded = null;
        this.timeTouchStarted = null;
        this.touchMovedValue = null;
    }

    mouseClicked() {
        let result = false;

        if (this.timeTouchStarted != null
            && !this.mouseIsPressed()
            && millis() - this.timeTouchStarted < this.CLICK_DELAY_MILLISECONDS) {
            result = true;
        }
        else {
            result = mouseClicked();    // p5.js global
        }

        return result;
    }

    mouseIsPressed() {
        let result = mouseIsPressed;        // Assign p5.js global

        if (touches.length > 0) {
            result = true;
        }

        //console.log("mouseIsPressed() " + result);

        return result;
    }

    movedX() {
        //console.log("movedX()");

        let result = movedX;    // Assign p5.js global

        if (this.touchMovedValue != null) {
            result = this.touchMovedValue.x;
            this.touchMovedValue.x = 0;
            this.movedValueRetrieved = true;
        }

        return result;
    }

    movedY() {
        //console.log("movedY()");

        let result = movedY;  // Assign p5.js global

        if (this.touchMovedValue != null) {
            result = this.touchMovedValue.y;
            this.touchMovedValue.y = 0;
            this.movedValueRetrieved = true;
        }

        return result;
    }

    touchEnded() {
        //console.log("touchEnded() " + touches.length);

        this.doubleClick = false;
        this.lastTouch = null;
        this.lastTouchEnded = millis();     // p5.js global
        this.touchMovedValue = null;
    }

    touchMoved() {
        //console.log("touchMoved() " + touches.length);

        if (touches.length > 0) {
            //console.log("touches[0](" + touches[0].x + ", " + touches[0].y + ")");

            if (this.movedValueRetrieved) {
                this.touchMovedValue.x = 0;
                this.touchMovedValue.y = 0;

                this.movedValueRetrieved = false;
            }

            // Add up the differences between retrievals.

            this.touchMovedValue.x += touches[0].x - this.lastTouch.x;
            this.touchMovedValue.y += touches[0].y - this.lastTouch.y;

            this.lastTouch.x = touches[0].x;
            this.lastTouch.y = touches[0].y;
        }
    }

    touchStarted() {
        //console.log("touchStarted() " + touches.length);

        this.timeTouchStarted = millis();

        if (this.timeTouchStarted - this.lastTouchEnded < this.CLICK_DELAY_MILLISECONDS) {
            this.doubleClick = true;
        }

        if (touches.length > 0) {
            this.lastTouch = createVector(touches[0].x, touches[0].y);
            this.touchMovedValue = createVector(0, 0);
        }
    }

    zoomAmount() {

    }
}