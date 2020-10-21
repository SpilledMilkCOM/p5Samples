class Scene {

    constructor() {

        this.elements = new Composite();

        // Lots of default stuff in here.

        this.backgroundColor = color(128);

        this.ambientLight = color(60);
        this.origin = createVector(0, 0, 0);
        this.pointLightColor = color(255);
        this.pointLightLocation = createVector(0, 0, 0);
        this.rotation = createVector(0, 0, 0);

        this.containment = null;

        this.drawAxes = createVector(0, 0, 0);

        this.mouseOrTouch = new MouseOrTouch();
        this.scale = 1.0;
    }

    addElement(element) {
        this.elements.addElement(element);
    }

    adjustScale(scaleAdjustment) {
        this.scale += scaleAdjustment;

        this.elements.changeScale(this.scale);
    }

    changeBackground(backgroundColor) {
        this.backgroundColor = backgroundColor;
    }

    changeContainment(containment) {
        this.containment = containment;
    }

    changeDrawAxes(drawAxes) {
        this.drawAxes = drawAxes;
    }

    changeOrigin(origin) {
        this.origin = origin;
    }

    changePointLightColor(pointLightColor) {
        this.pointLightColor = pointLightColor;
    }

    changePointLightLocation(pointLightLocation) {
        this.pointLightLocation = pointLightLocation;
    }

    changeScale(scale) {
        this.scale = scale;
        
        this.elements.changeScale(this.scale);
    }

    clearElements() {
        this.elements = new Composite();
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


        // Translate entire scene.

        translate(this.origin.x, this.origin.y, this.origin.z);

        // Rotate entire scene.

        rotateX(this.rotation.x);
        rotateY(this.rotation.y);
        rotateZ(this.rotation.z);

        this.elements.contain(this.containment);
        this.elements.draw()
    }
}