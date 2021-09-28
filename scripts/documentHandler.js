class DocumentHandler {
  static methods = {
    append: (elem) => {
      document.getElementById("drawing-area").appendChild(elem);
    },
    delete: (elem) => {
      document.getElementById("drawing-area").removeChild(elem);
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
      document.getElementById(identifier) ??
      document.getElementsByClassName(identifier)
    );
  }

  static beforeUnload() {
    return Application.modified ? "" : null;
  }

  static onLoad() {
    Application.start();
  }

  static manipulate({ method, elem }) {
    return this.methods[method ?? "new"](elem);
  }
}
