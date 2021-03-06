const Gamepiece = require('./Gamepiece');


class Ball extends Gamepiece {
  constructor(x, y, radius, dx, dy) {
    super(x, y)
    this.radius = radius;
    this.dx = dx;
    this.dy = -dy;
    this.startAngle = 0;
    this.endAngle = Math.PI * 2;
    this.inPlay = false;
  }

  erase(context) {
    context.clearRect(this.x - this.radius, 
      this.y - this.radius, 
      this.radius * 2, 
      this.radius * 2)
    return this
  }

  draw(context) {
    context.beginPath();
    context.arc(this.x, this.y, this.radius, this.startAngle, this.endAngle)
    context.fillStyle = 'blue';
    context.fill();
    context.closePath();
    return this;
  }

  moveBall() {
    this.x += this.dx;
    this.y += this.dy;

    if (this.x >= 500 - this.radius || this.x <= 0 + this.radius) {
      this.dx = -this.dx
    }
    if (this.y <= 0 + this.radius) {
      this.dy = -this.dy
    }
    return this
  }
}

module.exports = Ball;