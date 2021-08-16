class Canvas {
  constructor({ width, height, id }) {
    this.width = width;
    this.height = height;
    this.id = id;
    this.src;
    this.ctx;
  }

  create() {
    const elem = document.createElement("canvas");
    elem.height = this.height;
    elem.width = this.width;
    elem.id = this.id;
    Document.manipulate({ method: "append", elem });
  }

  draw({ x, y, width, height, color }) {
    this.ctx.fillStyle = color;
    this.ctx.fillRect(x, y, width, height);
  }

  drawBg({ color }) {
    this.ctx.fillStyle = color;
    this.ctx.fillRect(0, 0, this.width, this.height);
  }

  erase({ x, y, width, height }) {
    this.ctx.clearRect(x, y, height, width);
  }

  hide() {
    Document.manipulate({ method: "hide", elem: this.src });
  }

  isValid() {
    const elemInDocument = document.getElementById(this.id);
    return elemInDocument ? false : true;
  }

  show() {
    Document.manipulate({ method: "show", elem: this.src });
  }

  start() {
    if (this.isValid()) {
      this.create();
      this.src = Document.find(this.id);
      this.ctx = this.src.getContext("2d");
      return true;
    }
    console.error(`Error: Canvas with id "${this.id}" already exists!`);
    return false;
  }
}
