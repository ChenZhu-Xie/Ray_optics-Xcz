// Mirror -> Parabolic
objTypes['parabolicmirror'] = {

  // Create the obj
  create: function (constructionPoint) {
    return { type: 'parabolicmirror', p1: constructionPoint };
  },

  dichroicSettings: objTypes['mirror'].dichroicSettings,

  // Show the property box
  populateObjBar: function (obj, objBar) {
    dichroicSettings(obj, objBar);
  },

  onConstructMouseDown: objTypes['arcmirror'].onConstructMouseDown,
  onConstructMouseMove: objTypes['arcmirror'].onConstructMouseMove,
  onConstructMouseUp: objTypes['arcmirror'].onConstructMouseUp,

  // Draw the obj on canvas
  draw: function (obj, canvasRenderer, isAboveLight, isHovered) {
    const ctx = canvasRenderer.ctx;
    ctx.fillStyle = 'rgb(255,0,255)';
    if (obj.p3 && obj.p2) {
      var p12d = geometry.distance(obj.p1, obj.p2);
      // unit vector from p1 to p2
      var dir1 = [(obj.p2.x - obj.p1.x) / p12d, (obj.p2.y - obj.p1.y) / p12d];
      // perpendicular direction
      var dir2 = [dir1[1], -dir1[0]];
      // get height of (this section of) parabola
      var height = (obj.p3.x - obj.p1.x) * dir2[0] + (obj.p3.y - obj.p1.y) * dir2[1];
      // reposition p3 to be at vertex
      obj.p3 = geometry.point((obj.p1.x + obj.p2.x) * .5 + dir2[0] * height, (obj.p1.y + obj.p2.y) * .5 + dir2[1] * height);

      var x0 = p12d / 2;
      var a = height / (x0 * x0); // y=ax^2
      var i;
      ctx.strokeStyle = isHovered ? 'cyan' : ((scene.colorMode && obj.wavelength && obj.isDichroic) ? wavelengthToColor(obj.wavelength || GREEN_WAVELENGTH, 1) : 'rgb(168,168,168)');
      ctx.beginPath();
      obj.tmp_points = [geometry.point(obj.p1.x, obj.p1.y)];
      ctx.moveTo(obj.p1.x, obj.p1.y);
      for (i = 0.1; i < p12d; i += 0.1) {
        // avoid using exact integers to avoid problems with detecting intersections
        var ix = i + .001;
        var x = ix - x0;
        var y = height - a * x * x;
        var pt = geometry.point(obj.p1.x + dir1[0] * ix + dir2[0] * y, obj.p1.y + dir1[1] * ix + dir2[1] * y);
        ctx.lineTo(pt.x, pt.y);
        obj.tmp_points.push(pt);
      }
      ctx.stroke();
      if (isHovered) {
        ctx.fillRect(obj.p3.x - 1.5, obj.p3.y - 1.5, 3, 3);
        var focusx = (obj.p1.x + obj.p2.x) * .5 + dir2[0] * (height - 1 / (4 * a));
        var focusy = (obj.p1.y + obj.p2.y) * .5 + dir2[1] * (height - 1 / (4 * a));
        ctx.fillRect(focusx - 1.5, focusy - 1.5, 3, 3);
        ctx.fillStyle = 'rgb(255,0,0)';
        ctx.fillRect(obj.p1.x - 1.5, obj.p1.y - 1.5, 3, 3);
        ctx.fillRect(obj.p2.x - 1.5, obj.p2.y - 1.5, 3, 3);
      }
    }
    else if (obj.p2) {
      ctx.fillStyle = 'rgb(255,0,0)';
      ctx.fillRect(obj.p1.x - 1.5, obj.p1.y - 1.5, 3, 3);
      ctx.fillRect(obj.p2.x - 1.5, obj.p2.y - 1.5, 3, 3);
    }
    else {
      ctx.fillStyle = 'rgb(255,0,0)';
      ctx.fillRect(obj.p1.x - 1.5, obj.p1.y - 1.5, 3, 3);
    }
  },

  move: objTypes['arcmirror'].move,

  // When the drawing area is clicked (test which part of the obj is clicked)
  checkMouseOver: function (obj, mouse) {
    let dragContext = {};
    if (mouse.isOnPoint(obj.p1) && geometry.distanceSquared(mouse.pos, obj.p1) <= geometry.distanceSquared(mouse.pos, obj.p2) && geometry.distanceSquared(mouse.pos, obj.p1) <= geometry.distanceSquared(mouse.pos, obj.p3)) {
      dragContext.part = 1;
      dragContext.targetPoint = geometry.point(obj.p1.x, obj.p1.y);
      return dragContext;
    }
    if (mouse.isOnPoint(obj.p2) && geometry.distanceSquared(mouse.pos, obj.p2) <= geometry.distanceSquared(mouse.pos, obj.p3)) {
      dragContext.part = 2;
      dragContext.targetPoint = geometry.point(obj.p2.x, obj.p2.y);
      return dragContext;
    }
    if (mouse.isOnPoint(obj.p3)) {
      dragContext.part = 3;
      dragContext.targetPoint = geometry.point(obj.p3.x, obj.p3.y);
      return dragContext;
    }

    if (!obj.tmp_points) return;
    var i;
    var pts = obj.tmp_points;
    for (i = 0; i < pts.length - 1; i++) {

      var seg = geometry.line(pts[i], pts[i + 1]);
      if (mouse.isOnSegment(seg)) {
        // Dragging the entire obj
        const mousePos = mouse.getPosSnappedToGrid();
        dragContext.part = 0;
        dragContext.mousePos0 = mousePos; // Mouse position when the user starts dragging
        dragContext.mousePos1 = mousePos; // Mouse position at the last moment during dragging
        dragContext.snapContext = {};
        return dragContext;
      }
    }
  },

  onDrag: objTypes['arcmirror'].onDrag,

  // Test if a ray may shoot on this object (if yes, return the intersection)
  checkRayIntersects: function (obj, ray) {
    if (!obj.p3) { return; }
    return objTypes['curvedmirror'].checkRayIntersects(obj, ray);
  },

  // When the obj is shot by a ray
  onRayIncident: function (obj, ray, rayIndex, incidentPoint) {
    return objTypes['curvedmirror'].onRayIncident(obj, ray, rayIndex, incidentPoint);
  }

};
