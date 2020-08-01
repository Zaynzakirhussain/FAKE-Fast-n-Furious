const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var van, rand, bul;
var gameState = 0;

function preload() {
  vanimg = loadImage("van.png");
  evanimg = loadImage("ejeep.png");
  flagimg = loadImage("finish.png");
  back = loadImage("back.gif");
}

function setup() {
  createCanvas(1365, 656);

  engine = Engine.create();
  world = engine.world;

  van1 = createSprite(585, 600, 95, 65);
  van1.addImage(vanimg);

  van2 = createSprite(585, 600, 95, 65);
  van2.addImage(evanimg);

  finish = createSprite(8830, 590, 50, 65);
  finish.addImage(flagimg);
}

function draw() {
  background(0, 0, 0);
  Engine.update(engine);

  if (gameState === 0) {
    textSize(45);
    fill("white");
    text("FAKE FAST AND FURIOUS", 400, 250);
    text("Press SPACE to start you race with the computer", 200, 330);
    text("I'm WARNING YOU!! He's FAST!!", 350, 430);
    textSize(25);
    text("Credits: Zayn,Alita teacher", 50, 690);
    text("By the way press right arrow to drive", 900, 690);

    if (keyDown("space")) {
      gameState = 1;
    }
  }

  if (gameState === 1) {
    image(back, 0, -700, displayWidth * 6, displayHeight * 2);
    image(back, displayWidth, -700, displayWidth * 6, displayHeight * 2);

    if (keyDown(RIGHT_ARROW) && van1.x < 8800) {
      van1.x += 8;
    }

    if (van2.x < 8800) {
      van2.velocityX = 7.9;
    }

    if (van2.x > 8800) {
      van2.velocityX = 0;
    }

    if (van1.x >= 8800) {
      gameState = 3;
    }

    if (van2.x >= 8800) {
      gameState = 4;
    }
  }

  if (gameState === 3) {
    textSize(45);
    fill("white");
    text("Suprisingly, You WIN!!", 8560, 328);
    text("Could you please press r to restart??", 8510, 428);

    if (keyDown("r")) {
      gameState = 0;
      van2.velocityX = 0;
      van2.x = 585;
      van1.x = 585;
    }
  }

  if (gameState === 4) {
    textSize(45);
    fill("white");
    text("Knew it, You LOOOOSE!!", 8560, 328);
    text("Could you please press r to restart??", 8530, 428);

    if (keyDown("r")) {
      gameState = 0;
      van2.velocityX = 0;
      van2.x = 585;
      van1.x = 585;
    }
  }

  camera.position.x = van1.x + 100;
  camera.position.y = displayHeight / 2;

  van1.scale = 0.8;
  van2.scale = 0.8;
  finish.scale = 0.2;

  drawSprites();
}