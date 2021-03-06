class Application {
  static UNIT_SIZE = 50;
  static modified = false;
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

  static start() {
    FrameHandler.newFrame(this.frameTemplate);
    UserInterface.start();
  }
}
