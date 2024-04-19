// Blocker -> Circle Blocker
objTypes['blackcircle'] = {

  // Create the obj
  create: function (constructionPoint) {
    return { type: 'blackcircle', p1: constructionPoint, p2: constructionPoint };
  },

  // Use the prototype circleobj
  onConstructMouseDown: objTypes['circleobj'].onConstructMouseDown,
  onConstructMouseMove: objTypes['circleobj'].onConstructMouseMove,
  onConstructMouseUp: objTypes['circleobj'].onConstructMouseUp,
  move: objTypes['circleobj'].move,
  checkMouseOver: objTypes['circleobj'].checkMouseOver,
  onDrag: objTypes['circleobj'].onDrag,

  // Draw the obj on canvas
  draw: function (obj, canvasRenderer, isAboveLight, isHovered) {
    const ctx = canvasRenderer.ctx;

    ctx.beginPath();
    ctx.arc(obj.p1.x, obj.p1.y, geometry.segmentLength(obj), 0, Math.PI * 2);
    ctx.lineWidth = 3;
    ctx.strokeStyle = isHovered ? 'cyan' : ((scene.colorMode && obj.wavelength && obj.isDichroic) ? wavelengthToColor(obj.wavelength || GREEN_WAVELENGTH, 1) : 'rgb(70,35,10)');
    //ctx.fillStyle="indigo";

    ctx.stroke();
    ctx.fillStyle = 'red';
    ctx.fillRect(obj.p1.x - 1.5, obj.p1.y - 1.5, 3, 3);

    ctx.lineWidth = 1;
    if (isHovered) {
      ctx.fillStyle = 'magenta';
      ctx.fillRect(obj.p2.x - 1.5, obj.p2.y - 1.5, 3, 3);
    }
  },

  // When the drawing area is clicked (test which part of the obj is clicked)
  // When the drawing area is pressed (to determine the part of the object being pressed)
  checkMouseOver: function (obj, mouse) {
    let dragContext = {};
    // clicking on p1 (center)?
    if (mouse.isOnPoint(obj.p1) && geometry.distanceSquared(mouse.pos, obj.p1) <= geometry.distanceSquared(mouse.pos, obj.p2)) {
      dragContext.part = 1;
      dragContext.targetPoint = geometry.point(obj.p1.x, obj.p1.y);
      return dragContext;
    }
    // clicking on p2 (edge)?
    if (mouse.isOnPoint(obj.p2)) {
      dragContext.part = 2;
      dragContext.targetPoint = geometry.point(obj.p2.x, obj.p2.y);
      return dragContext;
    }
    // clicking on outer edge of circle?  then drag entire circle
    if (Math.abs(geometry.distance(obj.p1, mouse.pos) - geometry.segmentLength(obj)) < mouse.getClickExtent()) {
      const mousePos = mouse.getPosSnappedToGrid();
      dragContext.part = 0;
      dragContext.mousePos0 = mousePos; // Mouse position when the user starts dragging
      dragContext.mousePos1 = mousePos; // Mouse position at the last moment during dragging
      dragContext.snapContext = {};
      return dragContext;
    }
  },

  // Show the property box
  populateObjBar: function (obj, objBar) {
    dichroicSettings(obj, objBar);
  },

  // Test if a ray may shoot on this object (if yes, return the intersection)
  checkRayIntersects: function (obj, ray) {
    if (wavelengthInteraction(obj, ray)) {
      return objTypes['circleobj'].checkRayIntersects(obj, ray);
    }
  },

  // When the obj is shot by a ray
  onRayIncident: function (obj, ray, rayIndex, incidentPoint) {
    return {
      isAbsorbed: true
    };
  }

};
