class ContainmentBox {

    constructor(size) {
        this.size = size;

        this.location = createVector(0, 0, 0);
    }

    contain(primitive) {

        if (primitive.location.x + primitive.velocity.x <= this.location.x - this.size.x
            || primitive.location.x + primitive.velocity.x >= this.location.x + this.size.x) {
            primitive.velocity.x *= -1;
        }

        if (primitive.location.y + primitive.velocity.y <= this.location.y - this.size.y
            || primitive.location.y + primitive.velocity.y >= this.location.y + this.size.y) {
            primitive.velocity.y *= -1;
        }
        
        if (primitive.location.z + primitive.velocity.z <= this.location.z - this.size.z
            || primitive.location.z + primitive.velocity.z >= this.location.z + this.size.z) {
            primitive.velocity.z *= -1;
        }
    }
}