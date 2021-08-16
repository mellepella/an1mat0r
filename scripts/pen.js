class Pen {
  constructor({ color, width, height, id }) {
    this.x;
    this.y;
    this.id = id;
    this.color = color;
    this.width = width;
    this.height = height;
    this.method = "draw";
    this.methods = ["draw", "erase"];
  }

  changeMethod(method) {
    if (this.methods.includes(method)) {
      this.method = method;
      return;
    }
    this.error(`Method: "${method}" is invalid!`);
  }

  draw(x, y) {
    this.x = x;
    this.y = y;
    c.draw(this);
  }

  erase(x, y) {
    this.x = x;
    this.y = y;
    c.erase(this);
  }

  error(message) {
    console.error(`Error: ${message}`);
  }

  start() {
    c.src.addEventListener("mousedown", function (ev) {
      const x = Math.floor(ev.x / UNIT_SIZE) * UNIT_SIZE;
      const y = Math.floor(ev.y / UNIT_SIZE) * UNIT_SIZE;
      pen[pen.method](x, y);
    });
  }
}
