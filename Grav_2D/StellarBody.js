class StellarBody {
    #id; 
    #mass; 
    #radius;
    #acc_vec; 
    #vel_vec; 
    #pos_vec; 
    #prev_pos; 
    #color; 

    constructor(id, mass, radius, pos, vel, color) {
        this.#mass = mass; 
        this.#id = id; 
        this.#radius = radius; 

        this.#acc_vec = new Vector_2D(); 
        this.#prev_pos = new Vector_2D().copy(pos); 
        this.#vel_vec = vel; 
        this.#pos_vec = pos;
        this.#color = color;
    }

    update_acc_vec(body, time) {
        // let barycenter_vec = Universe.barycenter_2D([body, this]); 
        // console.log(body.pos_vec.to_string(), barycenter_vec.to_string())
        let distance = this.#pos_vec.distance(body.pos_vec);
        let acc = -(this.G * body.mass) / Math.pow(distance, 2);
        this.#acc_vec.x = this.#pos_vec.x;
        this.#acc_vec.y = this.#pos_vec.y;

        this.#acc_vec.diff(body.pos_vec);
        this.#acc_vec.normalize();
        this.#acc_vec.scale(acc);
    }

    draw(scale, max_min_radius, min_draw_scale, context, size) {
        let temp_radius = scale * this.#radius;

        if (temp_radius < min_draw_scale) {
            temp_radius = this.#radius / (max_min_radius.x + max_min_radius.y);
            temp_radius *= min_draw_scale; 
            temp_radius += 2; 
        }

        context.fillStyle = "rgba( " + this.#color[0] + ", " + this.#color[1] + ", " + this.#color[2] + ", 1)";
        context.beginPath();
        context.arc(this.#pos_vec.x * scale + size.x / 2, this.#pos_vec.y * scale + size.y / 2, temp_radius, 0, 2 * Math.PI);
        context.fill();

        // let temp_acc = new Vector_2D(this.#acc_vec.x, this.#acc_vec.y); 
        // temp_acc.normalize(); 
        // temp_acc.scale(25); 
        // context.fillStyle = "black";
        // context.beginPath();
        // context.moveTo(this.#pos_vec.x * scale + size.x / 2, this.#pos_vec.y * scale + size.y / 2); 
        // context.lineTo(this.#pos_vec.x * scale + size.x / 2 + temp_acc.x, this.#pos_vec.y * scale + size.y / 2 + temp_acc.y);
        // context.stroke();

        // let temp_vel = new Vector_2D(this.#vel_vec.x, this.#vel_vec.y); 
        // temp_vel.normalize(); 
        // temp_vel.scale(this.#vel_vec.magnitude()); 
        // context.fillStyle = "red";
        // context.beginPath();
        // context.moveTo(this.#pos_vec.x * scale + size.x / 2, this.#pos_vec.y * scale + size.y / 2); 
        // context.lineTo(this.#pos_vec.x * scale + size.x / 2 + temp_vel.x, this.#pos_vec.y * scale + size.y / 2 + temp_vel.y);
        // context.stroke();
    }

    to_string() {
        return "Mass: " + this.#mass + ", Radius: " + this.#radius + ", acc_vec: " + this.#acc_vec.magnitude() + ", vel_vec: " + this.#vel_vec.magnitude() + ", pos_vec: " + this.#pos_vec.to_string() + "\n";
    }

    update(time) {
        let vel_vec_copy = new Vector_2D(this.#vel_vec.x, this.#vel_vec.y); 
        let acc_vec_copy = new Vector_2D(this.#acc_vec.x, this.#acc_vec.y); 

        vel_vec_copy.scale(time);
        acc_vec_copy.scale(Math.pow(time, 2)); 
        this.#pos_vec.add(vel_vec_copy); 
        this.#pos_vec.add(acc_vec_copy); 

        acc_vec_copy.copy(this.#acc_vec); 
        acc_vec_copy.scale(time); 
        this.#vel_vec.add(acc_vec_copy); 
    }

    get pos_vec() { return this.#pos_vec; }
    get mass() { return this.#mass; }
    get radius() { return this.#radius; }
    get id() { return this.#id; }

    get C() { return 299792458; } // m/s
    get G() { return 6.674e-11; } // N * m^2 / kg^2
}


