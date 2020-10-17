function createRandomElement(activeShape) {
    let element = null;

    switch (activeShape) {
        case 'Box':
            element = new Box(createVector(windowWidth / 100 * random(2.0, 2.5), windowWidth / 100 * random(2.0, 2.5), windowWidth / 100 * random(2.0, 2.5)));
            break;

        case 'Cone':
            element = new Cone(windowWidth / 100 * random(0.75, 1.0), windowWidth / 100 * random(0.75, 1.0) * 2);
            break;

        case 'Cylinder':
            element = new Cylinder(windowWidth / 100 * random(0.75, 1.0), windowWidth / 100 * random(0.75, 1.0) * 2);
            break;

        case 'Ellipsoid':
            //let element = new Ellipsoid(createVector(windowWidth / 100 * random(0.5, 1.0), windowWidth / 100 * random(0.5, 1.0), windowWidth / 100 * random(0.5, 1.0)));
            // M&M's
            element = new Ellipsoid(createVector(windowWidth / 75, windowWidth / 75, windowWidth / 150));
            break;

        case 'Line':
            // These vectors are all created in the 1st octant.

            let p1 = createVector(windowWidth / 10 * random(0.75, 1.0)
                                , windowWidth / 10 * random(0.75, 1.0)
                                , windowWidth / 10 * random(0.75, 1.0));
            let p2 = createVector(windowWidth / 10 * random(0.75, 1.0)
                                , windowWidth / 10 * random(0.75, 1.0)
                                , windowWidth / 10 * random(0.75, 1.0));

            // The lines need to be centered around the origin.

            // Translate vector is the midpoint multiplied by -1.
            let translate = createVector((p2.x + p1.x) / 2
                                        , (p2.y + p1.y) / 2
                                        , (p2.z + p1.z) / 2).mult(-1);

            p1.add(translate);
            p2.add(translate);

            element = new Line(p1, p2);
            break;

        case 'Plane':
            element = new Plane(createVector(windowWidth / 200 * random(2.0, 4.0), windowWidth / 200 * random(2.0, 4.0)));
            break;

        case 'Point':
            element = new Point(createVector(0, 0, 0));
            break;

        case 'Sphere':
            element = new Sphere(windowWidth / 100 * random(0.75, 1.0));
            break;

        case 'Torus':
            // Cheerios (or donuts)
            element = new Torus(createVector(windowWidth / 100, windowWidth / 200));
            break;

        default:
    }

    return element;
}

function populateSceneWithMovingElements(scene, activeShape) {
    for (count = 0; count < 100; count++) {
        let element = createRandomElement(activeShape);

        let xVelocity = random(-1, 1) * velocityScale;
        let yVelocity = random(-1, 1) * velocityScale;
        let zVelocity = random(-1, 1) * velocityScale;

        element.changeVelocity(createVector(xVelocity, yVelocity, zVelocity));
        //element.changeColor(color(random(128,255), random(128,255), random(128,255), random(128,255)));       // With random Alpha channel.
        element.changeColor(color(random(128, 255), random(128, 255), random(128, 255)));

        let myFrameRate = 60; //frameRate();
        let rotationPerSecond = 2 * PI / myFrameRate * random(0.1, 0.2) * (random() < 0.5 ? -1 : 1);

        element.changeRotationalVelocity(createVector(rotationPerSecond, rotationPerSecond, rotationPerSecond));

        scene.addElement(element);
    }
}