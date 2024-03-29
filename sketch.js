var bullet, wall, speed, weight, damage, thickness

function setup() {
  createCanvas(1600,400);
 bullet = createSprite(400,200,100,50)
 bullet.shapeColor = "white"
 wall = createSprite(1200,200,thickness,200)
 wall.shapeColor = rgb(80,80,80)

 speed = random(223, 321)
 weight = random(30,52)
 thickness = random(22, 83)
}

function draw() {
  background("black"); 
  bullet.velocityX = speed
   

if(bullet.x- wall.x <= bullet.width/2 + wall.width/2 &&
  wall.x- bullet.x <= bullet.width/2 + wall.width/2 &&
  bullet.y - wall.y <= bullet.height/2 + wall.height/2 &&
  wall.y - bullet.y <= bullet.height/2 + wall.height/2){
    damage = (0.5*weight*speed*speed)/(thickness*thickness*thickness)
    bullet.velocityX = 0
  }
  if(damage<=10){
    wall.shapeColor = "green"
  }
  
  else if(damage>10){
    wall.shapeColor = "red"
  }

  drawSprites();
}
