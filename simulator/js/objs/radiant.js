// Light Source -> Point source (360deg)
objTypes['radiant'] = {

  // Create the obj
  create: function (constructionPoint) {
    return { type: 'radiant', x: constructionPoint.x, y: constructionPoint.y, p: 0.5 };
  },

  // Show the property box
  populateObjBar: function (obj, objBar) {
    objBar.createNumber(getMsg('brightness'), 0.01, 1, 0.01, obj.p || 1, function (obj, value) {
      obj.p = value;
    }, getMsg('brightness_note_popover'));
    if (scene.colorMode) {
      objBar.createNumber(getMsg('wavelength'), UV_WAVELENGTH, INFRARED_WAVELENGTH, 1, obj.wavelength || GREEN_WAVELENGTH, function (obj, value) {
        obj.wavelength = value;
      });
    }
  },

  // Mousedown when the obj is being constructed by the user
  onConstructMouseDown: function (obj, constructionPoint, mouse, ctrl, shift) {

  },
  // Mousemove when the obj is being constructed by the user
  onConstructMouseMove: function (obj, constructionPoint, mouse, ctrl, shift) {

  },
  // Mouseup when the obj is being constructed by the user
  onConstructMouseUp: function (obj, constructionPoint, mouse, ctrl, shift) {
    return {
      isDone: true
    };
  },

  // Draw the obj on canvas
  draw: function (obj, canvasRenderer, isAboveLight, isHovered) {
    const ctx = canvasRenderer.ctx;
    ctx.fillStyle = scene.colorMode ? wavelengthToColor(obj.wavelength || GREEN_WAVELENGTH, 1) : isHovered ? 'cyan' : ('rgb(0,255,0)');
    ctx.fillRect(obj.x - 2.5, obj.y - 2.5, 5, 5);
    if (scene.colorMode) {
      ctx.fillStyle = isHovered ? 'cyan' : ('rgb(255,255,255)');
      ctx.fillRect(obj.x - 1.5, obj.y - 1.5, 3, 3);
    }
  },

  // Move the object
  move: function (obj, diffX, diffY) {
    obj.x = obj.x + diffX;
    obj.y = obj.y + diffY;
    return obj;
  },

  // When the drawing area is clicked (test which part of the obj is clicked)
  checkMouseOver: function (obj, mouse) {
    let dragContext = {};
    if (mouse.isOnPoint(obj)) {
      dragContext.part = 0;
      dragContext.mousePos0 = geometry.point(obj.x, obj.y);
      dragContext.targetPoint = geometry.point(obj.x, obj.y);
      dragContext.snapContext = {};
      return dragContext;
    }
  },

  // When the user is dragging the obj
  onDrag: function (obj, mouse, dragContext, ctrl, shift) {
    if (shift) {
      var mousePos = mouse.getPosSnappedToDirection(dragContext.mousePos0, [{ x: 1, y: 0 }, { x: 0, y: 1 }], dragContext.snapContext);
    }
    else {
      var mousePos = mouse.getPosSnappedToGrid();
      dragContext.snapContext = {}; // Unlock the dragging direction when the user release the shift key
    }

    obj.x = mousePos.x;
    obj.y = mousePos.y;
  },

  // Shoot rays
  onSimulationStart: function (obj) {
    let newRays = [];

    var s = Math.PI * 2 / parseInt(scene.rayDensity * 500);
    var i0 = (scene.mode == 'observer') ? (-s * 2 + 1e-6) : 0; // To avoid black gap when using the observer
    for (var i = i0; i < (Math.PI * 2 - 1e-5); i = i + s) {
      var ray1 = geometry.line(geometry.point(obj.x, obj.y), geometry.point(obj.x + Math.sin(i), obj.y + Math.cos(i)));
      ray1.brightness_s = Math.min(obj.p / scene.rayDensity, 1) * 0.5;
      ray1.brightness_p = Math.min(obj.p / scene.rayDensity, 1) * 0.5;
      ray1.isNew = true;
      if (scene.colorMode) {
        ray1.wavelength = obj.wavelength || GREEN_WAVELENGTH;
      }
      if (i == i0) {
        ray1.gap = true;
      }
      newRays.push(ray1);
    }

    return {
      newRays: newRays
    };
  }

};
