
var wall, thickness;
var bullet,speed, weight;

function setup() {
  createCanvas(1600, 400);

  speed=random(223,321)
  weight=random(30,52)


  thickness=random(22,83)




  
    bullet=createSprite(50, 200, 50,5);  
    bullet.velocityX = speed;
    bullet.shapeColor=color(255);

 
  	
    
    wall=createSprite(1200, 200, thickness, height/2);  

    wall.shapeColor=color(230,230,230);
  //wall.shapeColor=color(80,80,80)
}

//	var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness);
function draw() {
  background(0);  
  //bullet.sprite.collide(wall.sprite,calculateDeformation)


  if(co()){
    var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness);
	bullet.velocityX = 0;
	  if(damage < 10){
		  wall.shapeColor = "green";
	  }  if(damage >= 10){
		  wall.shapeColor = "red";
	  }
  }

  drawSprites();
}
//bullet.x - wall.x < bullet.width/2 + wall.width/2 &&wall.x - bullet.x < bullet.width/2 + wall.width/2 
function co(){
	if(bullet.x + bullet.width >= wall.x){
		return true;
	}else {
		return false;
	}
}


