window.onload = function() {
  const width = screen.width;
  const height = screen.height;
  
  window.UNIT_SIZE = width % 50;
  window.c = new Canvas({width: width / 2, height: height / 2, id: 'canvas'});
  window.pen = new Pen({color: 'black', shape: 'rect', width: UNIT_SIZE, height: UNIT_SIZE})
  c.create();
  pen.start();
}
