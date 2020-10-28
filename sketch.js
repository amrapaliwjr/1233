




//creating objects
  
var rb, r, gb, g, bb, b, pb, p;
var bow, bo;
var ground1, ground2, gr;
var arrow, air;
  
function preload() {
  
  //loading images in objects
  
  gr = loadImage('background0.png');
  
  bo = loadImage('bow0.png');
  
  r = loadImage('red_balloon0.png');
  g = loadImage('green_balloon0.png');
  b = loadImage('blue_balloon0.png');
  p = loadImage('pink_balloon0.png');
  
  air = loadImage('arrow0.png');
  
} 
  
function setup() {
  
  //creating area
  
  createCanvas(580, 483);
  
  //creating sprite for ground and adding ground image
  
  ground1 = createSprite(261, 252.5);
  ground1.addImage(gr);
  ground1.scale = 1.3;
  ground1.velocityX = -5;
  
  ground2 = createSprite(780, 252.5);
  ground2.addImage(gr);
  ground2.scale = 1.3;
  ground2.velocityX = -5;
  
  //creating sprite for bow and adding bow image
  
  bow = createSprite(540, 252.5);
  bow.addImage(bo);
  
  //creating sprites for balloons and adding balloons       image
  
  for(var q = 34; q < 483; q = q + 100){
    
    rb = createSprite(14, q);
    rb.addImage(r);
    rb.scale = 0.08;
    
  }
  
  for(var w = 84; w < 483; w = w + 100){
    
    gb = createSprite(70, w);
    gb.addImage(g);
    gb.scale = 0.08;
    
  }
  
  for(var e = 34; e < 483; e = e + 100){
    
    bb = createSprite(124, e);
    bb.addImage(b);
    bb.scale = 0.08;
    
  }
  
  for(var a = 84; a < 483; a = a + 100){
    
    pb = createSprite(180, a);
    pb.addImage(p);
    pb.scale = 1;
    
  }
  
  //creating sprite for arrow and adding arrow image
  
  arrow = createSprite(540,252.5);
  arrow.addImage(air);
  arrow.scale = 0.5;     
  
} 
  
function draw() {
  
  //giving background a colour
  
  background('white');
  
  //making cursor control bow's and arrow's y position
  
  bow.y = mouseY;
  arrow.y = bow.y;
  
  if(keyDown('space')){
      
    arrow.velocityX = -50;
    
  }
  
  
  if(arrow.x < 0){
    
    arrow.x = 540;
    arrow.velocityX = 0;
    
  }
  
  
  //resetting ground when it crosses its half of width
  
  if(ground1.x < -201){
    
    ground1.x = 261;
    ground2.x = 780;
    
  }
  
  //creating sprites on canvas
  
  drawSprites();
  
} 
