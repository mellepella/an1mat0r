class Pen {
  constructor({color, shape, width, height}) {
    this.shape = shape;
    this.color = color;
    this.width = width;
    this.height = height;
    this.x;
    this.y;
  }

  draw(x, y) {
    this.x = x;
    this.y = y;
    c.draw(this)
  }

  start() {
    c.src.addEventListener('mousedown', function(ev) {
      const x = Math.floor(ev.x / UNIT_SIZE) * UNIT_SIZE;
      const y = Math.floor(ev.y / UNIT_SIZE) * UNIT_SIZE;
      pen.draw(x, y);
    })
  }
}