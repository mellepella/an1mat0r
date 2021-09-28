class Pen {
  constructor({ color, width, height, id }) {
    this.x;
    this.y;
    this.id = id;
    this.color = color;
    this.width = width;
    this.height = height;
    this.method = "draw";
    this.isDrawing = false;
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

  startDrawState(x, y) {
    this.isDrawing = true;
    this[this.method](x, y);
  }

  stopDrawState() {
    this.isDrawing = false;
  }

  addEventListeners() {
    this.addEventListener("mousedown", (x, y) => {
      Application.pen.startDrawState(x, y);
      Application.modified = true;
    });
    this.addEventListener("mousemove", (x, y) => {
      UserInterface.onOverlayMove(x, y);
    });
    this.addEventListener("mouseup", () => {
      Application.pen.stopDrawState();
    });
  }

  addEventListener(event, consequence) {
    FrameHandler.currentFrame.src.addEventListener(event, function (ev) {
      const x = CoordinateSystem.roundToGrid(ev.offsetX);
      const y = CoordinateSystem.roundToGrid(ev.offsetY);
      consequence(x, y);
    });
  }

  start() {
    this.addEventListeners();
  }
}
