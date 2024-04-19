// Other -> Line / Arrow
objTypes['line'] = {

  // Create the obj
  create: function (constructionPoint) {
    return { type: 'line', p1: constructionPoint, p2: constructionPoint, arrow1: false, arrow2: false };
  },

  // Use the prototype lineobj
  onConstructMouseDown: objTypes['lineobj'].onConstructMouseDown,
  onConstructMouseMove: objTypes['lineobj'].onConstructMouseMove,
  onConstructMouseUp: objTypes['lineobj'].onConstructMouseUp,
  move: objTypes['lineobj'].move,
  checkMouseOver: objTypes['lineobj'].checkMouseOver,
  onDrag: objTypes['lineobj'].onDrag,

  // Draw the obj on canvas
  draw: function (obj, canvasRenderer, isAboveLight, isHovered) {
    const ctx = canvasRenderer.ctx;
    ctx.strokeStyle = isHovered ? 'cyan' : ("white");
    ctx.beginPath();
    ctx.moveTo(obj.p1.x, obj.p1.y);
    ctx.lineTo(obj.p2.x, obj.p2.y);
    ctx.stroke();
    if (obj.arrow1) {
      this.drawArrow(ctx, obj.p1, obj.p2);
    }
    if (obj.arrow2) {
      this.drawArrow(ctx, obj.p2, obj.p1);
    }
  },

  // Draw the arrow
  drawArrow: function (ctx, p1, p2) {
    var angle = Math.atan2(p2.y - p1.y, p2.x - p1.x);
    var len = 10;
    ctx.beginPath();
    ctx.moveTo(p2.x, p2.y);
    ctx.lineTo(p2.x - len * Math.cos(angle - Math.PI / 6), p2.y - len * Math.sin(angle - Math.PI / 6));
    ctx.moveTo(p2.x, p2.y);
    ctx.lineTo(p2.x - len * Math.cos(angle + Math.PI / 6), p2.y - len * Math.sin(angle + Math.PI / 6));
    ctx.stroke();
  },

  // Show the property box
  populateObjBar: function (obj, objBar) {
    objBar.createBoolean(getMsg('arrow1'), obj.arrow1, function (obj, value) {
      obj.arrow1 = value;
    });
    objBar.createBoolean(getMsg('arrow2'), obj.arrow2, function (obj, value) {
      obj.arrow2 = value;
    });
  }

};
