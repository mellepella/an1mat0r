class FrameHandler {
  static currentFrame;
  static frames = [];

  static changeCurrentFrame(index) {
    this.currentFrame = this.frames[index];
    Application.pen.start();
  }

  static error(message) {
    console.error(`Error: ${message}`);
  }

  static newFrame(props = { width, height }) {
    const canvas = new Canvas(props);
    canvas.start();
    this.frames.push(canvas);
    this.show(canvas.id);
    UserInterface.sliderRefresh();
  }

  static hideAllFrames() {
    for (const canvas of this.frames) {
      canvas.hide();
    }
  }

  static show(id) {
    if (this.frames[id]) {
      this.hideAllFrames();
      this.frames[id].show();
      this.changeCurrentFrame(id);
      UserInterface.sliderRefresh();
      return true;
    }
    this.error(`Frame "${id}" does not exist!`);
    return false;
  }
}
