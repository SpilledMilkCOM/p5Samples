class Scene {

    constructor() {

        this.elements = new Array();

        // Lots of default stuff in here.

        this.backgroundColor = color(128);

        this.ambientLight = color(60);
        this.pointLightColor = color(255);
        this.pointLightLocation = createVector(0, 0, 0);

        this.containment = null;
    }

    addElement(element) {
        this.elements.push(element);
    }

    changeBackground(backgroundColor) {
        this.backgroundColor = backgroundColor;
    }

    changeContainment(containment){
        this.containment = containment;
    }
    
    changePointLightColor(pointLightColor) {
        this.pointLightColor = pointLightColor;
    }

    changePointLightLocation(pointLightLocation) {
        this.pointLightLocation = pointLightLocation;
    }

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

        this.elements.forEach(element => {
            if (this.containment) {
                this.containment.contain(element);
            }
            element.draw()
        });
    }
}