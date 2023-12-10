var canvasWidth = "1800";
var canvasHeight = "900";

var canvas = document.getElementById('canvas');
canvas.width = canvasWidth;
canvas.height = canvasHeight;
var ctx = canvas.getContext('2d');

var planetImg = new Image();
planetImg.src = "./img/mundo.png";

step = 0;
var planets;

planetImg.onload = () => {

  planets = Array(new Planet(0, 0, 0.002, 0.005, planetImg));
  setInterval(update, 16);

};

function update() {
  drawPlanet();
  step += (16 / 1000);
}

function drawPlanet() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.translate(0, -1.2);
  for (let i = 0; i < planets.length; i++) {
    planets[i].update(ctx);
  }
}

class Planet {
  x = 0;
  y = 0;
  rotSpeed = 0;
  scaleSpeed = 1;
  image;

  constructor(x, y, rotSpeed, scaleSpeed, image) {
    this.x = x;
    this.y = y;
    this.rotSpeed = rotSpeed;
    this.scaleSpeed = scaleSpeed;
    this.image = image;
  }

  setPivot(x, y) {
    this.pivotX = x;
    this.pivotY = y;
  }

  update(ctx) {

    ctx.rotate(this.rotSpeed);

    ctx.scale(1 + this.scaleSpeed, 1 + this.scaleSpeed);

    ctx.drawImage(this.image, this.x, this.y);

  }
}

