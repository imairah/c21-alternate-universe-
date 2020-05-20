var sun;
var earth,mars,jupiter;

function preload() {
  img = loadImage("sprites/earth.png");
  img2 = loadImage("sprites/mars.png");
  img3 = loadImage("sprites/jupiter.png");
  img4 = loadImage("sprites/sun.png");
}

function setup() {
  createCanvas(800,400);
  

  earth = createSprite(450,200,40,40);
  //image(img,200,200);
  earth.addImage("earth",img);
  earth.scale = 0.3;

  mars = createSprite(300,100,40,40);
  mars.addImage("mars",img2);
  mars.scale = 0.1;

  jupiter = createSprite(150,300,40,40);
  jupiter.addImage("jupiter",img3);
  jupiter.scale = 0.1;

  sun = createSprite(700,200,40,40);
  sun.addImage("sun",img4);
}
 
function draw() {
  background("black");
  sun.debug = true;
  earth.debug = true;
 
  if(frameCount % 30 === 0){
    sun.scale = sun.scale + 0.1;
  }

  if(sun.collide(earth)){
    earth.destroy;
    console.log("touching");

  }
  drawSprites();
}