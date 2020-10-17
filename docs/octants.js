function populateSceneWithPlanes(scene) {
    const PLANE_SIZE = 600;
    const COLOR_INTENSITY = 255;
    const ALPHA = 150;

    let myFrameRate = 60; //frameRate();
    let rotationPerSecond = 2 * PI / myFrameRate * random(0.1, 0.2) * (random() < 0.5 ? -1 : 1);

    let plane = new Plane(createVector(PLANE_SIZE, PLANE_SIZE))

    plane.changeColor(color(COLOR_INTENSITY, 0, 0, ALPHA));
    // No rotation (plane is flat with respect to the viewer)

    //plane.changeRotationalVelocity(createVector(0, rotationPerSecond, 0));

    scene.addElement(plane);

    plane = new Plane(createVector(PLANE_SIZE, PLANE_SIZE))

    plane.changeColor(color(0, COLOR_INTENSITY, 0, ALPHA));
    plane.changeRotation(createVector(0, PI / 2, 0));           // 90 degrees about the Y-axis (vertical)
    //plane.changeRotationalVelocity(createVector(0, rotationPerSecond, 0));

    scene.addElement(plane);

    plane = new Plane(createVector(PLANE_SIZE, PLANE_SIZE))

    plane.changeColor(color(0, 0, COLOR_INTENSITY, ALPHA));
    plane.changeRotation(createVector(PI / 2, 0, 0));           // 90 degrees about the X-axis (horizontal)
    //plane.changeRotationalVelocity(createVector(0, 0, -rotationPerSecond));

    scene.addElement(plane);
}