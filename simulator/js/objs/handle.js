// The handle created when holding ctrl and click several points
objTypes['handle'] = {

  // Create the obj
  create: function (constructionPoint) {
    return { type: 'handle', controlPoints: [], notDone: true };
  },

  // Add control point when user is creating the handle
  addControlPoint: function (obj, controlPoint) {
    controlPoint.mousePart.originalObj = scene.objs[controlPoint.targetObj_index];
    controlPoint.newPoint = controlPoint.mousePart.targetPoint;
    controlPoint.mousePart.isByHandle = true;
    controlPoint = JSON.parse(JSON.stringify(controlPoint));
    scene.objs[0].controlPoints.push(controlPoint);
  },

  // Finish creating the handle
  finishHandle: function (obj, point) {
    obj.p1 = point;
    var totalX = 0;
    var totalY = 0;
    for (var i in obj.controlPoints) {
      totalX += obj.controlPoints[i].newPoint.x;
      totalY += obj.controlPoints[i].newPoint.y;
    }
    obj.p2 = geometry.point(totalX / obj.controlPoints.length, totalY / obj.controlPoints.length);
    obj.notDone = false;
  },

  getZIndex: function (obj) {
    return -Infinity;
  },

  // Draw the obj on canvas
  draw: function (obj, canvasRenderer, isAboveLight, isHovered) {
    const ctx = canvasRenderer.ctx;

    /*
    for (var i in obj.controlPoints) {
      // If user drags some target scene.objs, restore them back to avoid unexpected behavior.
      obj.controlPoints[i].mousePart.originalObj = JSON.parse(JSON.stringify(scene.objs[obj.controlPoints[i].targetObj_index]));
      objTypes[scene.objs[obj.controlPoints[i].targetObj_index].type].onDrag(scene.objs[obj.controlPoints[i].targetObj_index], JSON.parse(JSON.stringify(obj.controlPoints[i].newPoint)), JSON.parse(JSON.stringify(obj.controlPoints[i].mousePart)), false, false);
    }
    */
    for (var i in obj.controlPoints) {
      ctx.globalAlpha = 1;
      ctx.beginPath();
      ctx.strokeStyle = obj.notDone ? 'cyan' : isHovered ? 'cyan' : ('gray');
      ctx.setLineDash([2, 2]);
      ctx.arc(obj.controlPoints[i].newPoint.x, obj.controlPoints[i].newPoint.y, 5, 0, Math.PI * 2, false);
      ctx.stroke();
      ctx.setLineDash([]);
    }
    if (!obj.notDone) {
      ctx.globalAlpha = 1;
      ctx.beginPath();
      ctx.strokeStyle = isHovered ? 'cyan' : ('gray');
      ctx.arc(obj.p1.x, obj.p1.y, 2, 0, Math.PI * 2, false);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(obj.p1.x, obj.p1.y, 5, 0, Math.PI * 2, false);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(obj.p2.x - 5, obj.p2.y);
      ctx.lineTo(obj.p2.x + 5, obj.p2.y);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(obj.p2.x, obj.p2.y - 5);
      ctx.lineTo(obj.p2.x, obj.p2.y + 5);
      ctx.stroke();
    }
  },

  // Move the object
  move: function (obj, diffX, diffY) {
    objTypes['handle'].onDrag(obj, new Mouse(geometry.point(obj.p1.x + diffX, obj.p1.y + diffY), scene), { targetPoint_: obj.p1, part: 1 });
  },

  // When the drawing area is clicked (test which part of the obj is clicked)
  checkMouseOver: function (obj, mouse) {
    let dragContext = {};
    if (obj.notDone) return;
    if (mouse.isOnPoint(obj.p1)) {
      dragContext.part = 1;
      dragContext.targetPoint_ = geometry.point(obj.p1.x, obj.p1.y);
      dragContext.mousePos0 = geometry.point(obj.p1.x, obj.p1.y);
      dragContext.snapContext = {};
      return dragContext;
    }
    if (mouse.isOnPoint(obj.p2)) {
      dragContext.part = 2;
      dragContext.targetPoint = geometry.point(obj.p2.x, obj.p2.y);
      dragContext.mousePos0 = geometry.point(obj.p2.x, obj.p2.y);
      dragContext.snapContext = {};
      return dragContext;
    }
  },

  // When the user is dragging the obj
  onDrag: function (obj, mouse, dragContext, ctrl, shift) {
    if (obj.notDone) return;
    if (shift) {
      var mousePos = mouse.getPosSnappedToDirection(dragContext.mousePos0, [{ x: 1, y: 0 }, { x: 0, y: 1 }], dragContext.snapContext);
    }
    else {
      var mousePos = mouse.getPosSnappedToGrid();
      dragContext.snapContext = {}; // Unlock the dragging direction when the user release the shift key
    }
    if (dragContext.part == 1) {
      if (ctrl && shift) {
        // Scaling
        var factor = geometry.distance(obj.p2, mouse.pos) / geometry.distance(obj.p2, dragContext.targetPoint_)
        if (factor < 1e-5) return;
        var trans = function (p) {
          p.x = (p.x - obj.p2.x) * factor + obj.p2.x;
          p.y = (p.y - obj.p2.y) * factor + obj.p2.y;
        };
      } else if (ctrl) {
        // Rotation
        var theta = Math.atan2(obj.p2.y - mouse.pos.y, obj.p2.x - mouse.pos.x) - Math.atan2(obj.p2.y - dragContext.targetPoint_.y, obj.p2.x - dragContext.targetPoint_.x);
        var trans = function (p) {
          var x = p.x - obj.p2.x;
          var y = p.y - obj.p2.y;
          p.x = Math.cos(theta) * x - Math.sin(theta) * y + obj.p2.x;
          p.y = Math.sin(theta) * x + Math.cos(theta) * y + obj.p2.y;
        };
      } else {
        // Translation
        var diffX = mousePos.x - dragContext.targetPoint_.x;
        var diffY = mousePos.y - dragContext.targetPoint_.y;
        var trans = function (p) {
          p.x += diffX;
          p.y += diffY;
        };
      }

      // Do the transformation
      trans(obj.p1);
      trans(obj.p2);
      for (var i in obj.controlPoints) {
        obj.controlPoints[i].mousePart.originalObj = JSON.parse(JSON.stringify(scene.objs[obj.controlPoints[i].targetObj_index]));
        trans(obj.controlPoints[i].newPoint);
        objTypes[scene.objs[obj.controlPoints[i].targetObj_index].type].onDrag(scene.objs[obj.controlPoints[i].targetObj_index], new Mouse(JSON.parse(JSON.stringify(obj.controlPoints[i].newPoint)), scene, false, 2), JSON.parse(JSON.stringify(obj.controlPoints[i].mousePart)), false, false);
      }
      dragContext.targetPoint_.x = obj.p1.x;
      dragContext.targetPoint_.y = obj.p1.y;
    }

    if (dragContext.part == 2) {
      obj.p2.x = mousePos.x;
      obj.p2.y = mousePos.y;
    }
  },

  onSimulationStart: function (obj) {
    // A dummy function to tell the simulator that the light layer should be redrawn when this object changes.
  }

};
