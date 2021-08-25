class FrameHandler {
  static currentFrame;
  static frames = [];
  static errors = {
    invalidFrame: (id) => {
      return `Frame "${id}" does not exist!`;
    },
  };

  static frameExists(id) {
    if (this.frames[id]) {
      return true;
    }
    return false;
  }

  static changeCurrentFrame(index) {
    this.currentFrame = this.frames[index];
    Application.pen.start();
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

  static play(speed) {
    this.show(0);
    const intervalId = setInterval(function () {
      FrameHandler.showNextFrame();
      if (!FrameHandler.frameExists(FrameHandler.currentFrame.id + 1)) {
        clearInterval(intervalId);
      }
    }, speed);
  }

  static show(id) {
    if (this.frameExists(id)) {
      this.hideAllFrames();
      this.frames[id].show();
      this.changeCurrentFrame(id);
      UserInterface.sliderRefresh();
      return true;
    }
    Application.error(this.errors.invalidFrame(id), this);
    return false;
  }

  static showNextFrame() {
    const nextFrame = this.currentFrame.id + 1;
    if (this.frameExists(nextFrame)) {
      this.show(nextFrame);
    }
  }

  static showPreviousFrame() {
    const previousFrame = this.currentFrame.id - 1;
    if (this.frameExists(previousFrame)) {
      this.show(previousFrame);
    }
  }
}
