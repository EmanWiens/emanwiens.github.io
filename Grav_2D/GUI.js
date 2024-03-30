class GUI {
    #canvas; 
    #context; 
    #document; 
    #focus_obj; 
    #window; 
    
    constructor(window, document) {
        this.#document = document; 
        this.#window = window; 
        this.#canvas = document.createElement("canvas"); 
        this.#canvas.width = window.innerWidth; 
        this.#canvas.height = window.innerHeight; 
        this.#context = this.#canvas.getContext("2d");
        this.#document.body.insertBefore(this.#canvas, this.#document.body.childNodes[0]);
        console.log(window.innerWidth);
    }

    clear() {
        this.#context.clearRect(0, 0, this.#canvas.width, this.#canvas.height);
    }

    draw(universe) {
        let scale = 1280 / 152097597000 / 16; // TODO make this the scale of furthest planet or scrollable
        let min_draw_scale = 5;

        this.clear(); 
        universe.draw(scale, min_draw_scale, this.#context, new Vector_2D(this.#canvas.width, this.#canvas.height));
    }

    get context() { return this.#context; }
}