class Universe {
    #bodies; // always have to be sorted from largest to smallest 
    #time_diff; // how many times to accelerate time

    // constructor(id, mass, radius, pos, vel, color)
    constructor() {
        this.#time_diff = 1e6;
        this.#bodies = [];
        this.#bodies.push(new StellarBody(0, 1.9885e30, 696000000, new Vector_2D(0, 0), new Vector_2D(0, 0), [])); // the sun 
        this.#bodies.push(new StellarBody(1, 4.8675e24, 6051800, new Vector_2D(108940000000, 0), new Vector_2D(0, -35020), []));
        this.#bodies.push(new StellarBody(2, 3.3011e23, 2439700, new Vector_2D(58000000000, 0), new Vector_2D(0, -47360), []));
        this.#bodies.push(new StellarBody(3, 5.9721e24, 6378000, new Vector_2D(152097597000, 0), new Vector_2D(0, -29782.7), []));
        this.#bodies.push(new StellarBody(4, 6.4171e23, 3396200, new Vector_2D(228261000000, 0), new Vector_2D(0, -24070), []));
        this.#bodies.push(new StellarBody(5, 1.8982e27, 69911000, new Vector_2D(760595000000, 0), new Vector_2D(0, -13070), []));

        console.log(this.to_string()); 
    }

    to_string() {
        let str = ""; 

        for (let i = 0; i < this.#bodies.length; i++) {
            str += this.#bodies[i].to_string(); 
        }

        return str; 
    }

    // calculate the barycenter (center of mass) of a  list of bodies
    static barycenter_2D(bodies) {
        let center = new Vector_2D(); 
        let copy = new Vector_2D(); 

        for (let i = 0; i < bodies.length; i++) {
            if (i != 0) {
                copy.x=1; 
                copy.y=1; 
                copy.scale(bodies[i].mass * bodies[i].distance(bodies[0])); 
                center.add(copy); 
            }
        }

        center.div(bodies.length - 1); 

        return center; 
    }

    draw(scale, min_draw_scale, context, size) {
        for (let i = 0; i < this.#bodies.length; i++) {
            this.#bodies[i].draw(scale, min_draw_scale, context, size);
        }
    }

    update() { 
        for (let i = 0; i < this.#bodies.length; i++) {
            this.#bodies[i].update(this.#time_diff);

            if (i != 0) {
                // for now, every body just responds to sun and sun does not respond 
                this.#bodies[i].update_acc_vec(this.#bodies[0], this.#time_diff);
            }
        }
    }

    get smallest_body() { return this.#bodies[this.#bodies.length - 1]; }
    get largest_body() { return this.#bodies[0]; }
}