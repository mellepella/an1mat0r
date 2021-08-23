class UserInterface {
  static tools = { slider: document.getElementById("frames-slider") };
  static sliderLabel = document.getElementById("frames-slider-label");

  static newFrame() {
    FrameHandler.newFrame(Application.frameTemplate);
  }

  static showNextFrame() {
    FrameHandler.show(FrameHandler.currentFrame.id + 1);
  }

  static showPreviousFrame() {
    FrameHandler.show(FrameHandler.currentFrame.id - 1);
  }

  static sliderLabelRefresh(currentFrame) {
    this.sliderLabel.innerHTML = `Current frame: ${currentFrame}`;
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
