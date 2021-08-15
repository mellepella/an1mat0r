class Canvas {
  constructor({ width, height, id }) {
    this.dictionary = {
      rect: {
        draw: ({ x, y, width, height, color }) => {
          this.ctx.fillStyle = color;
          this.ctx.fillRect(x, y, width, height);
        },
        erase: ({ x, y, width, height }) => {
          this.ctx.clearRect(x, y, height, width);
        },
      },
      background: {
        draw: ({ color }) => {
          this.ctx.fillStyle = color;
          this.ctx.fillRect(0, 0, this.width, this.height);
        },
        erase: () => {
          this.ctx.clearRect(0, 0, this.width, this.height);
        },
      },
    };
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

  draw(props = { shape, x, y, width, height, color }) {
    this.dictionary[props.shape].draw(props);
  }

  erase(props = { shape, x, y, width, height }) {
    this.dictionary[props.shape].erase(props);
  }

  isValid() {
    const elemInDocument = document.getElementById(this.id);
    return elemInDocument ? false : true;
  }

  start() {
    if (this.isValid()) {
      this.create();
      this.src = document.getElementById(this.id);
      this.ctx = this.src.getContext("2d");
      return true;
    }
    console.error(`Canvas with id "${this.id}" already exists!`);
    return false;
  }
}
