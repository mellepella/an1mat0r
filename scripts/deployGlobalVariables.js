function deployGlobalVariables() {
  window.UNIT_SIZE = 50;
  const canvasProps = {
    width: UNIT_SIZE * 15,
    height: UNIT_SIZE * 10,
    id: "canvas",
  };
  const penProps = {
    color: "black",
    shape: "rect",
    width: UNIT_SIZE,
    height: UNIT_SIZE,
  };
  window.c = new Canvas(canvasProps);
  window.pen = new Pen(penProps);
}
