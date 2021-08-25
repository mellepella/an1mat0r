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
    this.errors = {
      invalidMethod(method) {
        return `Method: "${method}" is invalid!`;
      },
    };
  }

  changeMethod(method) {
    if (this.methods.includes(method)) {
      this.method = method;
      return true;
    }
    Application.error(this.errors.invalidMethod(method));
    return false;
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

  start() {
    FrameHandler.currentFrame.src.addEventListener("mousedown", function (ev) {
      const x = Application.roundToGrid(ev.offsetX);
      const y = Application.roundToGrid(ev.offsetY);
      Application.pen[Application.pen.method](x, y);
    });
  }
}
