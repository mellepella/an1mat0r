class Canvas {
  constructor({ width, height }) {
    this.width = width;
    this.height = height;
    this.id;
    this.src;
    this.ctx;
  }

  create() {
    const elem = document.createElement("canvas");
    this.id = this.createId();
    elem.height = this.height;
    elem.width = this.width;
    elem.id = this.id;
    DocumentHandler.manipulate({ method: "append", elem });
  }

  draw({ x, y, width, height, color }) {
    this.ctx.fillStyle = color;
    this.ctx.fillRect(x, y, width, height);
  }

  copy(target) {
    const content = FrameHandler.frames[target].src;
    this.ctx.drawImage(content, 0, 0);
  }

  createId() {
    if (this.id) {
      return this.id;
    }
    return FrameHandler.frames.length;
  }

  drawBg(color) {
    this.ctx.fillStyle = color;
    this.ctx.fillRect(0, 0, this.width, this.height);
  }

  erase({ x, y, width, height }) {
    this.ctx.clearRect(x, y, height, width);
  }

  hide() {
    DocumentHandler.manipulate({ method: "hide", elem: this.src });
  }

  show() {
    DocumentHandler.manipulate({ method: "show", elem: this.src });
  }

  start() {
    this.create();
    this.src = DocumentHandler.find(this.id);
    this.ctx = this.src.getContext("2d");
    if (this.id != 0) {
      this.copy(this.id - 1);
    }
    return true;
  }
}
