class UserInterface {
  static tools = { slider: document.getElementById("frames-slider") };
  static info = { sliderLabel: document.getElementById("frames-slider-label") };

  static adjustOverlaySize() {
    UIBinds.overlay.src.width = Application.frameTemplate.width;
    UIBinds.overlay.src.height = Application.frameTemplate.height;
  }

  static handleClick({ subject, action }) {
    UIBinds[subject][action]();
  }

  static onOverlayMove(x, y) {
    UIBinds.overlay.clear();
    UIBinds.overlay.draw({ x, y });
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
