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
    FrameHandler.currentFrame.draw(this);
  }

  erase(x, y) {
    this.x = x;
    this.y = y;
    FrameHandler.currentFrame.erase(this);
  }

  error(message) {
    console.error(`Error: ${message}`);
  }

  start() {
    FrameHandler.currentFrame.src.addEventListener("mousedown", function (ev) {
      const x = Application.roundToGrid(ev.offsetX);
      const y = Application.roundToGrid(ev.offsetY);
      Application.pen[Application.pen.method](x, y);
    });
  }
}
