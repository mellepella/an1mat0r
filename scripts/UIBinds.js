class UIBinds {
  static frameHandler = {
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
  };
  static pen = {
    enableDraw: () => {
      Application.pen.changeMethod("draw");
    },
    enableErase: () => {
      Application.pen.changeMethod("erase");
    },
  };
  static overlay = {
    src: document.getElementById("canvas-overlay"),
    getCtx: () => {
      return this.overlay.src.getContext("2d");
    },
    draw: ({ x, y }) => {
      const size = this.overlay.size;
      this.overlay.getCtx().fillRect(x, y, size, size);
    },
    clear: () => {
      const canvasHeight = this.overlay.src.height;
      const canvasWidth = this.overlay.src.width;
      this.overlay.getCtx().clearRect(0, 0, canvasWidth, canvasHeight);
    },
    size: Application.UNIT_SIZE,
  };
}
