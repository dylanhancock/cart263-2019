// Agent
//
// A class that represents the basic idea of a coloured circle on the screen
// It has a position, size, color, and active state
// It can check for collisions with other agents and can display itself

class Agent {

  // Constructor
  //
  // Sets the key properties based on the arguments
  // Defaults active to true
  constructor(x,y,size,agentColor,vx, vy, maxSpeed,minSpeed) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = agentColor;
    this.active = true;
    this.vx = 1;
    this.vy = 1;
    this.maxSpeed = 2;
    this.minSpeed = 1;
  }

  // collide(other)
  //
  // Returns true if this agent collides with the other agent (e.g. overlaps)
  // false otherwise
  collide(other) {
    // Return false if this agent isn't active
    if (!this.active) {
      return false;
    }

    // Calculate the distance between this agent and the other agent
    let d = dist(this.x,this.y,other.x,other.y);

    // If the distance is less that their two radii, they overlap
    if (d < this.size/2 + other.size/2) {
      return true;
    }
    // Otherwise they don't
    else {
      return false;
    }
  }

  // update()
  //
  // Placeholder since subclasses/children should consider defining an update function

  updateFood() {
    // randomly change velocity of food between the minimum and maximum speed
    this.vx += random(-this.minSpeed, this.maxSpeed);
    this.vy += random(-this.minSpeed, this.maxSpeed);
    // the classic update function based on velocity
    this.x += this.vx;
    this.y += this.vy;

    // check if food hits the top or bottom
    if (this.y < 0 || this.y > height) {
      // If it touched the top or bottom, reverse its vy
      this.vy = -this.vy;
    }
    // check if food hits either side
    if (this.x < 0 || this.x > width) {
      // if it touches, reverse the velocity
      this.vx = -this.vx;
    }



  }

  // display()
  //
  // Displays the agent as a coloured circle
  display() {
    // Don't display if not active
    if (!this.active) {
      return;
    }

    // Set fill and stroke then draw an ellipse at this agent's position and with its size
    push();
    noStroke();
    fill(this.color);
    ellipse(this.x,this.y,this.size);
    pop();
  }
}
