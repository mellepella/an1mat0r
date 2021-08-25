class UserInterface {
  static tools = { slider: document.getElementById("frames-slider") };
  static info = { sliderLabel: document.getElementById("frames-slider-label") };
  static binds = {
    frameHandler: {
      play: () => {
        FrameHandler.play();
      },
      showNextFrame: () => {
        FrameHandler.showNextFrame();
      },
      showPreviousFrame: () => {
        FrameHandler.showPreviousFrame();
      },
    },
    pen: {
      enableDraw: () => {
        Application.pen.changeMethod("draw");
      },
      enableErase: () => {
        Application.pen.changeMethod("erase");
      },
    },
  };

  static newFrame() {
    FrameHandler.newFrame(Application.frameTemplate);
  }

  static handleClick({ subject, action }) {
    this.binds[subject][action]();
  }

  static sliderLabelRefresh(currentFrame) {
    this.info.sliderLabel.innerHTML = `Current frame: ${currentFrame}`;
  }

  static sliderOnChange() {
    FrameHandler.show(this.tools.slider.value);
  }

  static sliderRefresh() {
    this.tools.slider.max = FrameHandler.frames.length - 1;
    this.tools.slider.value = FrameHandler.currentFrame.id;
    this.sliderLabelRefresh(this.tools.slider.value);
  }
}
