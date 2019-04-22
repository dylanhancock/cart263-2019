//my human fly ghost
var ghost;

function preload(){
//loading the ghost image
  ghost =  loadImage('assets/ghostguy.gif');

}
//set the attributes of our fly humans
function FlyHumans(x,y,radius,maxSpeed,fillColor) {
  this.x = x;
  this.tx = random(1000);
  this.ty = random(1000);
  this.y = y;
  this.maxSpeed = maxSpeed;
  this.vx = this.maxSpeed;
  this.vy = this.maxSpeed;
  this.radius = radius;
  this.color = fillColor;
  this.health = 100;
  this.alive = true;
}
//set the attributes of our fly humans
function FlyHumans2(x,y,radius,maxSpeed,fillColor) {

  this.x = x;
  this.y = y;
  this.maxSpeed = maxSpeed;
  this.vx = this.maxSpeed;
  this.vy = this.maxSpeed;
  this.radius = radius;
  this.color = fillColor;
  this.health = 100;
  this.alive = true;
}
//set the attributes of our fly humans
function FlyHumans3(x,y,radius,maxSpeed,fillColor) {

  this.x = x;
  this.y = y;
  this.maxSpeed = maxSpeed;
  this.vx = this.maxSpeed;
  this.vy = this.maxSpeed;
  this.radius = radius;
  this.color = fillColor;
  this.health = 100;
  this.alive = true;
}
// update()
//

FlyHumans.prototype.update = function () {
//first set of fly humans turn down the canvas at half the width then loop through the top

if (this.y > height) {
    this.y -= height;

  }
if (this.x >= 0 && this.x <= width/2){

  this.vx = 2;
  this.vy = 0;

  this.x += this.vx;
  this.y += this.vy;

}

else if (this.x >= width/2 ){


    this.vx = 0;

    this.vy = 2;

    this.x += this.vx;
    this.y += this.vy;

  }



}
//FLYHUMANS 2 UPDATE FUNCTION
FlyHumans2.prototype.update = function () {
//second set of fly humans loop around the entire canvas

if (this.y >= height-200) {

  this.vx = 4;
  this.vy = 0;

  this.x -= this.vx;
  this.y += this.vy;

}

if (this.x <= 200){
  this.vx = 0;
  this.vy = 4;

  this.x += this.vx;
  this.y -= this.vy;
}

if (this.y <= 200) {
  this.vx = 4;
  this.vy = 0;

  this.x += this.vx;
  this.y += this.vy
}

if (this.x >= width-200){
  this.vx = 0;
  this.vy = 4;

  this.x += this.vx;
  this.y += this.vy
}

if (mouseX >= this.x){
  this.vx=-this.vx;
}


}
//FLYHUMANS 3 UPDATE FUNCTION
FlyHumans3.prototype.update = function () {
//getting the third set of fly humans to track the mouse
  if ((dist(this.x, this.y, mouseX, mouseY) > this.radius + predator.radius)) {
//adding speedboost so the fly humans can catch the mouse
    var speedboost = 0.03;
    this.vx = 1;
    this.vy = 1;
    this.vx += (mouseX - this.x) * speedboost;
    this.vy += (mouseY - this.y) * speedboost;
}

  // Update fly humans based on velocity
this.x += this.vx;
this.y += this.vy;


}

//Display the fly humans
FlyHumans.prototype.display = function () {

  push();
    //display fly humans as ghost image
  image(ghost,this.x,this.y,25, 30);
  pop();
}

//Display the second set of fly humans
FlyHumans2.prototype.display = function () {

  push();
    //display fly humans as ghost image
  image(ghost,this.x,this.y,25,30);
  pop();
}
//Display the third set of fly humans
FlyHumans3.prototype.display = function () {

  push();
  //display fly humans as ghost image
  image(ghost,this.x,this.y,25,30);
  pop();
}
