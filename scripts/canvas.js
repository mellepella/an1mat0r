class Canvas {
  constructor({width, height, id}) {
    this.dictionary = {
      rect: ({x, y, width, height, color}) => {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(x, y, width, height);
      }
    }
    this.width = width;
    this.height = height;
    this.id = id;
    this.src;
    this.ctx;
  }

  draw(props = {shape, x, y, width, height, color}) {
    this.dictionary[props.shape](props);
  }

  create() {
    if (document.getElementById(this.id)) {
      console.error(`Canvas with id "${this.id}" already exists!`)
      return false;
    }
    const element = document.createElement('canvas');
    for (const prop in this) {
      element[prop] = this[prop];
    }
    document.body.appendChild(element)
    this.src = document.getElementById(this.id);
    this.ctx = this.src.getContext('2d');
    
    return true;
  }
}