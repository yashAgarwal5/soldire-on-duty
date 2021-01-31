var soldire,soldireImg;
var enemy1;
var enemy2;
var enemy3;
var enemy4;
var enemy5;
var protection1;
var protection2;
var carImg;
var bullet;
var cage1;
var cage2;
var cage3;

function preload(){
soldireImg=loadImage('soldire 9.png')
carImg=loadImage('carDestroy.jpg')
}

function setup(){
    canvas = createCanvas(displayWidth-20,650);

    soldire = createSprite(700,610,10,10);
    soldire.addImage(soldireImg);
    soldire.scale=0.1;

    
    protection1=createSprite(420,500,10,10);
    protection1.addImage(carImg);
    protection1.scale=0.7;

    protection2=createSprite(1000,500,10,10);
    protection2.addImage(carImg);
    protection2.scale=0.7;

    enemy1= createSprite (1200,350,50,50);
    enemy1.velocityX=-2

    enemy2= createSprite (100,250,50,50);
    enemy2.velocityX=2
    

    enemy3= createSprite (1200,150,50,50);
    enemy3.velocityX=-2

    enemy4= createSprite (100,50,50,50);
    enemy4.velocityX=2
  
    enemy5= createSprite (1200,150,50,50);

    ///protection2.debug=true;
    protection1.setCollider("rectangle",0,0,200,60);
    protection2.setCollider("rectangle",0,0,200,60);

//cage1=createSprite();
//cage2=createSprite();
//cage3=createSprite();

}

function draw(){
    background(230,230,230);
  
    if(keyDown(LEFT_ARROW)){
        changePosition(-2,0);

    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(2,0);
        
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-2);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+2);
    }

    if(keyDown('space')){
        Bullet();
    }

    soldire.depth=protection1.depth;
    soldire.depth=protection2.depth;
    soldire.depth=soldire.depth+1;
    soldire.depth=soldire.depth+1;

    enemy1.display();
    enemy2.display();
    enemy3.display();
    enemy4.display();

    protection1.display();
    protection2.display();

 if(soldire.isTouching(protection1)||soldire.isTouching(protection2)){
soldire.collide(protection2);
soldire.collide(protection1);
 }

if(enemy1.x===100){
enemy1.velocityX=2
}

if(enemy1.x===1200){
    enemy1.velocityX=-2
    }

    if(enemy2.x===1200){
        enemy2.velocityX=-2
        }
        
        if(enemy2.x===100){
            enemy2.velocityX=2
            }

if(enemy3.x===100){
    enemy3.velocityX=2
    }

    if(enemy3.x===1200){
        enemy3.velocityX=-2
        }

     if(enemy4.x===1200){
        enemy4.velocityX=-2
                }
            
    if(enemy4.x===100){
         enemy4.velocityX=2
                }

enemy5.display();

    drawSprites();

}

function changePosition(x,y){
    soldire.x = soldire.x + x;
    soldire.y = soldire.y + y;
  }

function Bullet(){
  
     bullet = createSprite(100,100,60,10);
    bullet.x=soldire.x,
    bullet.y=soldire.y;
    bullet.velocityY=-12;
    bullet.lifetime=25;

    if(enemy5.isTouching(bullet)){
        enemy5.remove();
    }
}