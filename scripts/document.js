class Document {
  static methods = {
    append: (elem) => {
      document.body.appendChild(elem);
      return true;
    },
    hide: (elem) => {
      document.getElementById(elem.id).style.display = "none";
    },
    show: (elem) => {
      document.getElementById(elem.id).style.display = "initial";
    },
  };

  static find(identifier) {
    return (
      document.getElementById(identifier) ?? document.getElementsByClassName(id)
    );
  }

  static onLoad() {
    deployGlobalVariables();
    c.start();
    pen.start();
  }

  static manipulate({ method, elem }) {
    return this.methods[method ?? "new"](elem);
  }
}
