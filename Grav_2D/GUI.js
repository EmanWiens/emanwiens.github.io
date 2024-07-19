class GUI {
    #canvas; 
    #context; 
    #document; 
    #focus_obj;
    #window;

    #heightOutput;
    #widthOutput;
    
    constructor(window, document) {
        this.#window = window; 
        this.#document = document; 
        this.#canvas = document.createElement("canvas"); 
        this.#canvas.width = this.#window.innerWidth;
        this.#canvas.height = this.#window.innerHeight;
        this.#context = this.#canvas.getContext("2d");
        this.#document.body.insertBefore(this.#canvas, this.#document.body.childNodes[0]);

        // this.#heightOutput = document.querySelector("#height");
        // this.#widthOutput = document.querySelector("#width");
        // this.#window.addEventListener("resize", window_resized);
    }

    // window_resized(event) {
    //     this.#canvas.width = this.#window.innerWidth;
    //     this.#canvas.height = this.#window.innerHeight;
    // }

    clear() {
        this.#context.clearRect(0, 0, this.#canvas.width, this.#canvas.height);
    }

    draw(universe) {
        let scale = 1280 / 152097597000 / 8; // TODO make this the scale of furthest planet or scrollable
        let min_draw_scale = 5;
        let max_min_radius = new Vector_2D(universe.largest_body, universe.smallest_body);

        this.clear();
        universe.draw(scale, max_min_radius, min_draw_scale, this.#context, this.#canvas, new Vector_2D(this.#canvas.width, this.#canvas.height));
    }

    get context() { return this.#context; }
}