## Setup


Clone the repository.
```bash
git clone https://github.com/mellepella/an1mat0r.git
```

## How it works (UI)

There is currently no visible UI for the application.

## How it works (code)

Let's take it file by file.

### canvas.js
Handles the canvas. The canvas can manipulate itself. Either draw or erase.

### deployGlobalVariables.js
Deploys all global variables and instances necessary for application start.

### document.js
Handles the document. Can do basically the same things as the normal document built into JavaScript can do, but is there
to simplify. For example, if you would want to hide an element in the document:

Vanilla JavaScript:
```
document.getElementById('id').style.display = 'none';
```

With custom Document class:
```
Document.manipulate({method: 'hide', id: 'id'});
```

### onLoad.js
Calls everything needed for application start. It does this when window has loaded.

### pen.js
Handles our virtual pen. The pen is called when the canvas records a mouse click. The pen then decides what to do with it
based on what the instance variable method says. This can either be draw, or erase.

After that the pen calls the draw or erase method from the canvas and sends in x- and y-coordinate, width and height of what
to draw or erase.