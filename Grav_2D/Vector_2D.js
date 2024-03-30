class Vector_2D {
    #x; 
    #y; 

    constructor(x, y) {
        if (arguments.length == 0){
            this.#x = 0; 
            this.#y = 0; 
        } else {
            this.#x = x; 
            this.#y = y; 
        }
    }

    diff(vec) { 
        this.#x -= vec.x;
        this.#y -= vec.y; 
    }

    dot(vec) {
        return this.mult(vec).sum();
    }

    magnitude() {
        return Math.sqrt(Math.pow(this.#x, 2) + Math.pow(this.#y, 2));
    }

    angle(vec) {
        if (arguments.length === 0) {
            return Math.atan(this.#y / this.#x); 
        } else if (arguments.length === 1) {
            return Math.acos(this.dot(vec) / (this.magnitude() * vec.magnitude())); 
        }
    }

    sum() { return this.#x + this.#y; }

    mult(vec) {
        this.#x *= vec.x;
        this.#y *= vec.y; 
    }

    div(val) {
        this.#x /= val;
        this.#y /= val; 
    }

    copy(vec) {
        this.#x = vec.x;
        this.#y = vec.y; 
    }

    add(vec) {
        this.#x += vec.x;
        this.#y += vec.y; 
    }

    scale(val) { 
        this.#x *= val;
        this.#y *= val;
    }

    sqrt() { 
        this.#x = Math.sqrt(this.#x)
        this.#y = Math.sqrt(this.#y)
    }

    pow(val) { 
        this.#x = Math.pow(this.#x, val)
        this.#y = Math.pow(this.#y, val)
    }

    static mult(vec_1, vec_2) {
        vec_1.mult(vec); 
    }
    
    distance(vec) { return Math.sqrt(Math.pow(this.#x - vec.x, 2) + Math.pow(this.#y - vec.y, 2)); } 

    normalize() {
        let magnitude = this.magnitude();
        this.#x /= magnitude;
        this.#y /= magnitude;
    }

    to_string() {
        return " < " + this.#x + ", " + this.#y + " >"; 
    }
    
    get x() { return this.#x; }
    get y() { return this.#y; }

    set x(val) { this.#x = val; }
    set y(val) { this.#y = val; }

}
