class Scene {

    constructor() {

        this.elements = new Array();

        // Lots of default stuff in here.

        this.backgroundColor = color(128);

        this.ambientLight = color(60);
        this.pointLightColor = color(255);
        this.pointLightLocation = createVector(0, 0, 0);
        this.rotation = createVector(0, 0, 0);

        this.containment = null;

        this.drawAxes = createVector(0, 0, 0);

        this.mouseOrTouch = new MouseOrTouch();
    }

    addElement(element) {
        this.elements.push(element);
    }

    changeBackground(backgroundColor) {
        this.backgroundColor = backgroundColor;
    }

    changeContainment(containment) {
        this.containment = containment;
    }

    changeDrawAxes(drawAxes) {
        this.drawAxes = this.drawAxes;
    }

    changePointLightColor(pointLightColor) {
        this.pointLightColor = pointLightColor;
    }

    changePointLightLocation(pointLightLocation) {
        this.pointLightLocation = pointLightLocation;
    }

    /**
     * Call this in the p5.js draw() function (called each frame)
     */
    draw() {
        background(this.backgroundColor);

        // If no light is present, the color will be very flat
        // (do you prevent that in the mutators?)

        if (this.ambientLight) {
            ambientLight(this.ambientLight);
        }

        if (this.pointLightColor && this.pointLightLocation) {
            pointLight(this.pointLightColor, this.pointLightLocation);
        }

        // p5.js global to move the camera (versus keeping the camera & light source stationary and moving the scene.)
        //orbitControl();

        if (this.mouseOrTouch.mouseIsPressed()) {
            //console.log("moved (" + this.mouseOrTouch.movedX() + ", " + this.mouseOrTouch.movedY() + ")");

            this.rotation.x += -this.mouseOrTouch.movedY() * 0.01;
            this.rotation.y += this.mouseOrTouch.movedX() * 0.01;
        }

        // Rotate entire scene.

        rotateX(this.rotation.x);
        rotateY(this.rotation.y);
        rotateZ(this.rotation.z);

        this.elements.forEach(element => {
            if (this.containment) {
                this.containment.contain(element);
            }
            element.draw()
        });
    }
}