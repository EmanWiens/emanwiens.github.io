class Simulation {
    #gui;
    #interval;
    #universe;

    constructor(gui) {
        this.#gui = gui;
        this.#universe = new Universe();
        this.#interval = [];
        this.#interval.push(setInterval(this.update, 50, this.#universe));
        this.#interval.push(setInterval(this.draw, 50, this.#universe, this.#gui));
    }

    update(universe) {
        universe.update();
        // console.log(universe.to_string());
    }

    to_string() {
        return this.universe.to_string();
    }

    draw(universe, gui) {
        gui.draw(universe);
    }
}