const Engine = Matter.Engine;
const World = Matter.World;
const  Events = Matter.Events;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


/*const Engine = Matter.Engine;
 World = Matter.World;
var  Events = Matter.Events;
var  Bodies = Matter.Bodies;*/

 
var particles = [];
var particle;
var plinkos = [];
var divisions=[]

var divisionHeight=300;
var score = 0;
var turn = 0; 
var gameState="play"


function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }
    

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    /*if(frameCount%60===0){
      particles=new Particle(random(50,350), 10,10);
     
    }*/

    
    

    
}
 


function draw() {
  background("white");
  textSize(20)
 text("Score : "+score,40,30);

 text("500",25,height-divisionHeight/2);
 text("500",100,height-divisionHeight/2);
 text("500",180,height-divisionHeight/2);
 text("500",260,height-divisionHeight/2);
 text("100",340,height-divisionHeight/2);
 text("100",420,height-divisionHeight/2);
 text("100",500,height-divisionHeight/2);
 text("200",580,height-divisionHeight/2);
 text("200",660,height-divisionHeight/2);
 text("200",740,height-divisionHeight/2);


  Engine.update(engine);
 
  
   ground=new Ground(240,790,width,20)
  
   /*if(frameCount%60===0){
    particles.display();
    score++;
  }*/

  for (var i = 0; i < plinkos.length; i++) {
     
    plinkos[i].display();
    
  }

   for (var k = 0; k < divisions.length; k++) {
     divisions[k].display();
   }

   //mousePressed();

  if(particle!== null){
    particle.display()
      
      if (particle.body.position.y>760) {

        if (particle.body.position.x<300) {
          score=score+500;
          particle=null;
            if( turn >= 5){
              gameState="end"

             }else if (particle.body.position.x>301 && particle.body.position.x<600) {
              score=score+100;
              particle=null;
                if( turn >= 5){
                  gameState="end"
    
                 }
                }else if (particle.body.position.x>601 && particle.body.position.x<900) {
                  score=score+200;
                  particle=null;
                    if( turn >= 5){
                      gameState="end"
        
                     }}

             } }}
             

 /*for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }*/

  }

  function mousePressed(){

    if(gameState!=="end"){
  
      turn++;
      particle=new Particle(mouseX,25,10,10)
    }
  }
  
  /*async function check(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  //  var response2= await fetch("http://worldclockapi.com/api/json/est/now");
    //console.log(response2)
    
    var responseJSON = await response.json();
    
    console.log(response)
    console.log(responseJSON)
    var datetime = responseJSON.datetime;
    console.log(datetime)     
    var hourOfDay = datetime.slice(11,13);
      console.log(hourOfDay) 
  if(hourOfDay>=06 && hourOfDay<=18) {
    gameState="morning"
    backgroundImg2 ="day.png"
    backgroundImg1=loadImage(backgroundImg2);
    } 
  
    if(hourOfDay>=13 && hourOfDay<=07) {
      gameState="night"   
       
   // backgroundImg2 =loadImage("night.png") 
   //backgroundImg1=loadImage(backgroundImg2);
         console.log("byeBye")
  
      }
     
  
  
   else
   { bg = "sprites/bg2.jpg"; }
   backgroundImg=loadImage(bg);
  }*/