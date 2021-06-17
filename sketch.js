//Creating variables 
var car;
var wall;
var speed;
var weight;
var deformation

function setup() {
  createCanvas(1600,400);
  

//Giving values to the variables "speed" "weight"
  speed=random(55,90)
  weight=random(400,1500)

//Creating the sprite for "car"
  car=createSprite(50,200,50,50);

  //Creating the sprite for "wall"
  wall=createSprite(1200,400,10,700);
  wall.shapeColor=color(80,80,80);

  //Making the car move towards the wall
  car.velocityX=speed;



}

function draw() {
  background(255,255,255);  

  //Detecting the collision
  if(wall.x-car.x< (car.width + wall.width)/2){

    car.velocityX=0;
    var deformation=0.5*weight*speed*speed/22500

    //Assigning colours to different outcomes 

    if(deformation<180){

      car.shapeColor=color("red");

    }

    if(deformation>180 && deformation<100){

      car.shapeColor=color("yellow");

    }

    if(deformation>100){
      car.shapeColor=color("green");
    }

    


  }


  drawSprites();
}


 