class Document {
  static methods = {
    append: (elem) => {
      document.body.appendChild(elem);
      return true;
    },
    hide: (elem) => {
      document.getElementById(elem.id).style.display = "none";
    },
  };

  static onLoad() {
    deployGlobalVariables();
    c.start();
    pen.start();
  }

  static manipulate({ method, elem }) {
    return this.methods[method ?? "new"](elem);
  }
}
