var level = 0;
var portal
var player
var gameState = 0
function preload() {
  playerImage = loadImage("blob-removebg-preview.png")

}

function setup() {
  createCanvas(900, 900);


  platform4 = createSprite(100, 670, 10000, 10)
  platform4.shapeColor = "white"


  player = createSprite(100, 650, 50, 50)
  player.addImage(playerImage)
  player.scale = 0.1


}


function draw() {
  background(0);
  if (gameState === 0) {
    platform1 = createSprite(700, 300, 200, 10)
    platform2 = createSprite(500, 400, 100, 10)
    platform3 = createSprite(300, 500, 200, 10)
    portal = createSprite(860, 100, 70, 70)
    portal.shapeColor = "blue"
    gameState = 1
  }
  if (gameState === 1) {
    player.velocityX = 0
    if (player.isTouching(platform1) || player.isTouching(platform2) || player.isTouching(platform3)) {
      player.collide(platform1)
      player.collide(platform2)
      player.collide(platform3)
    }
    if (player.isTouching(portal)) {
      platform1.destroy()
      platform2.destroy()
      platform3.destroy()
      portal.destroy()
      player.x = 100
      player.y = 650
      gameState = 2
    }
  }
  if (gameState === 2) {

    platform5 = createSprite(700, 300, 100, 10)
    platform6 = createSprite(400, 400, 100, 10)
    platform7 = createSprite(100, 600, 50, 10)
    platform8 = createSprite(600, 600, 150, 10)
    platform8.shapeColor = "red"
    platform9 = createSprite(300, 600, 250, 10)
    platform9.shapeColor = "red"
    portal1 = createSprite(860, 100, 70, 70)
    portal1.shapeColor = "blue"
    gameState = 3
  }
  if (gameState === 3) {
    player.velocityX = 0
    if (player.isTouching(platform5) || (player.isTouching(platform6)) || (player.isTouching(platform7))) {
      player.collide(platform5)
      player.collide(platform6)
      player.collide(platform7)


      if (player.isTouching(platform8) || player.isTouching(platform9)) {
        platform5.destroy()
        platform6.destroy()
        platform7.destroy()
        platform8.destroy()
        player.collide(platform8)
        player.collide(platform9)
        platform9.destroy()
        portal1.destroy()
        player.x = 100
        player.y = 650
        gameState = 0
        console.log(gameState)
      }



      if (player.isTouching(portal1)) {
        platform5.destroy()
        platform6.destroy()
        platform7.destroy()
        portal1.destroy()
        player.x = 100
        player.y = 650
        gameState = 4
      }
    }


   

  }
  if (keyDown("w")) {
    console.log("hello")
    player.velocityY = -10
  }
  if (keyDown("d")) {

    player.velocityX = 5
  }

  if (keyDown("a")) {
    player.velocityX = -5
  }

  player.velocityY = player.velocityY + 1
  player.collide(platform4)
  drawSprites();

}
