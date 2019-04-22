
///THIS IS JUST A PLACEHOLDER FOR MOUSE X AND MOUSE Y

function Predator(x,y,radius,maxSpeed,fillColor) {
  // Movement: Position, velocity, maximum speed
  this.x = x;
  this.y = y;
  this.tx = random(1000);
  this.ty = random(1000);
  this.vx = 0;
  this.vy = 0;
  this.maxSpeed = maxSpeed;
  // Appearance: Size and color
  this.radius = radius;
  this.color = fillColor;
  // Life: health and alive flag
  this.health = 100;
  this.alive = true;
}



Predator.prototype.display = function () {
  // Don't display if we're dead
  if (!this.alive) {
    return;
  }

  // Save style settings to avoid trouble
  push();
  noStroke();
  ellipse(this.x,this.y,this.radius * 2);
  pop();
}
