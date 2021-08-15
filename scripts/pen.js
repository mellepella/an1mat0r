class Pen {
  constructor({ color, shape, width, height, id }) {
    this.shape = shape;
    this.color = color;
    this.width = width;
    this.height = height;
    this.method = "draw";
    this.id = id;
    this.x;
    this.y;
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

  start() {
    c.src.addEventListener("mousedown", function (ev) {
      const x = Math.floor(ev.x / UNIT_SIZE) * UNIT_SIZE;
      const y = Math.floor(ev.y / UNIT_SIZE) * UNIT_SIZE;
      pen[pen.method](x, y);
    });
  }
}
