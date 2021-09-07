class Application {
  static UNIT_SIZE = 50;
  static pen = new Pen({
    color: "black",
    shape: "rect",
    width: this.UNIT_SIZE,
    height: this.UNIT_SIZE,
  });
  static frameTemplate = {
    width: this.UNIT_SIZE * 15,
    height: this.UNIT_SIZE * 10,
  };

  static error(error) {
    console.error(`Application stumbled upon an error: "${error}"`);
  }

  static roundToGrid(value) {
    return Math.floor(value / this.UNIT_SIZE) * this.UNIT_SIZE;
  }

  static start() {
    FrameHandler.newFrame(this.frameTemplate);
    UserInterface.start();
  }
}
