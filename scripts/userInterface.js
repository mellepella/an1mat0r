class UserInterface {
  static tools = { slider: document.getElementById("frames-slider") };
  static info = { sliderLabel: document.getElementById("frames-slider-label") };
  static binds = {
    frameHandler: {
      newFrame: () => {
        FrameHandler.newFrame(Application.frameTemplate);
      },
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
    overlay: {
      src: document.getElementById("canvas-overlay"),
      getCtx: () => {
        return this.binds.overlay.src.getContext("2d");
      },
      draw: ({ x, y }) => {
        const size = this.binds.overlay.size;
        this.binds.overlay.getCtx().fillRect(x, y, size, size);
      },
      clear: () => {
        const canvasHeight = this.binds.overlay.src.height;
        const canvasWidth = this.binds.overlay.src.width;
        this.binds.overlay.getCtx().clearRect(0, 0, canvasWidth, canvasWidth);
      },
      size: Application.UNIT_SIZE,
    },
  };

  static adjustOverlaySize() {
    this.binds.overlay.src.width = Application.frameTemplate.width;
    this.binds.overlay.src.height = Application.frameTemplate.height;
  }

  static handleClick({ subject, action }) {
    this.binds[subject][action]();
  }

  static onOverlayMove(x, y) {
    this.binds.overlay.clear();
    this.binds.overlay.draw({ x, y });
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

  static start() {
    this.adjustOverlaySize();
  }
}
