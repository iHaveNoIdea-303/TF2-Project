var scoutRun 
//Run animation^
var scoutBat, scoutShotgun, scoutPistol
//Combat animations^
var scoutCrouch
// Crouch animation^
var scoutJump
//Jump animation^
var scoutStand
//Idle animation^
var scoutHit
//Damage animation^
var scoutTurn
//Turning animation^
var RIPScout
//Death Animation^

var testing,zoom,font
var engine,world
var Jones2,Jones3,DefaultJones,Jones4,Jones5,Jones6,Jones7
var chanceVoice1
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
    scoutRun=loadAnimation("images/Scout_Run_1.png", "images/Scout_Run_2.png", "images/Scout_Run_3.png", "images/Scout_Run_4.png","images/Scout_Run_5.png", "images/Scout_Run_6.png", "images/Scout_Run_7.png", "images/Scout_Run_8.png") 
    scoutBat=loadAnimation("images/Scout_Bat_1.png","images/Scout_Bat_2.png")
    scoutShotgun=loadAnimation("images/Scout_Shotgun_1.png","images/Scout_Shotgun_2.png")
    scoutPistol=loadAnimation("images/Scout_Pistol_1.png","images/Scout_Pistol_2.png")
    scoutCrouch=loadAnimation("images/Scout_Crouch_2.png","images/Scout_Crouch.png")
    scoutStand=loadImage("images/Scout_Stand.png")
    scoutJump=loadImage("images/Scout_Jump.png")
    scoutHit=loadImage("images/Scout_OW.png")
    scoutTurn=loadImage("images/Scout_turnAround.png")
    RIPScout=loadImage("images/Scout_Dead_2.png")
    chanceVoice1=random(1,50)
    scoutRunLeft=loadAnimation("images/Scout_Run_1_Left.jpg","images/Scout_Run_2_Left.jpg","images/Scout_Run_3_Left.jpg","images/Scout_Run_4_Left.jpg","images/Scout_Run_5_Left.jpg","images/Scout_Run_6_Left.jpg","images/Scout_Run_7_Left.jpg","images/Scout_Run_8_Left.jpg")
    font=loadFont("Fonts/Compacta.ttf")

}
function setup(){
    createCanvas(1520,700)
    engine = Engine.create();
    world = engine.world;
    

    Sny=new Spy(100,100,100,100)
    Jones=new Scout(250,100,100,100)
    Floor=new Ground(760,1100,100000,1000)
    Floor2=new Ground(760,-500,100000,1000)
    Floor3=new Ground(-500,350,1000,100000)
    Floor4=new Ground(2023,350,1000,100000)
    MedkitA=new Medkit(200,500,50,50)

    Jones2=createSprite(0,0,100,100)
    Jones2.setCollider("rectangle",100,100,100,100)
    Jones2.addAnimation("gun",scoutPistol)
    Jones2.scale=1.8
    Jones2.visible=false

    Jones3=createSprite(0,0,100,100)
    Jones3.addAnimation("zoom",scoutRun)
    Jones3.scale=1.8
    Jones3.visible=false

    DefaultJones=createSprite(0,0,100,100)
    DefaultJones.addImage(scoutStand)
    DefaultJones.scale=1.8

    Jones4=createSprite(0,0,100,100)
    Jones4.addAnimation("jump",scoutJump)
    Jones4.scale=1.8
    Jones4.visible=false

    Jones5=createSprite(0,0,100,100)
    Jones5.addAnimation("moreGun",scoutShotgun)
    Jones5.scale=1.8
    Jones5.visible=false

    Jones6=createSprite(0,0,100,100)
    Jones6.addAnimation("bonk",scoutBat)
    Jones6.scale=1.8
    Jones6.visible=false

    Jones7=createSprite(0,0,100,100)
    Jones7.addAnimation("moving",scoutRunLeft)
    Jones7.scale=1.8
    Jones7.visible=false
  
    scoutRun.frameDelay=2
    scoutBat.frameDelay=15
    scoutShotgun.frameDelay=15
    scoutPistol.frameDelay=8
    scoutCrouch.frameDelay=9
    
    
   // testing.addAnimation("Running", scoutRun)
    //testing.addImage(RIPScout)
}
function draw(){
    Engine.update(engine)
    background("white")
    drawSprites()
    textSize(20)
    textFont(font)
    text("Testing",200,200,200,200)

    
    Sny.display()
    Floor.display()
    Floor2.display()
    Floor3.display()
    Floor4.display()
    MedkitA.display()
    
    Jones2.x=Jones.body.position.x
    Jones2.y=Jones.body.position.y
    Jones3.x=Jones.body.position.x
    Jones3.y=Jones.body.position.y
    DefaultJones.x=Jones.body.position.x
    DefaultJones.y=Jones.body.position.y
    Jones4.x=Jones.body.position.x
    Jones4.y=Jones.body.position.y
    Jones5.x=Jones.body.position.x
    Jones5.y=Jones.body.position.y
    Jones6.x=Jones.body.position.x
    Jones6.y=Jones.body.position.y
    Jones7.x=Jones.body.position.x
    Jones7.y=Jones.body.position.y
   
   

    //console.log(Math.round(Jones.body.velocity.y))
    if(isTouching(MedkitA.body,Floor3.body,MedkitA.width,MedkitA.height,Floor3.width,Floor3.height)){
        Body.applyForce(MedkitA.body,MedkitA.body.position,{x:60,y:-10})
    }
    Movement()
    Taunt()
    Action()
    if(keyDown("v")){
        Body.applyForce(MedkitA.body,MedkitA.body.position,{x:-60,y:0})
    }
    //Body.applyForce(MedkitA.body,MedkitA.body.position,{x:60,y:0})
}


function Movement(){
    if(keyIsDown(LEFT_ARROW)){
        Body.applyForce(Jones.body,Jones.body.position,{x:-40,y:0})
        Jones7.visible=true
        DefaultJones.visible=false
        Jones2.visible=false
        Jones4.visible=false
        Jones5.visible=false
        Jones6.visible=false
        Jones3.visible=false
       
    }
    if(keyIsDown(RIGHT_ARROW)){
        Body.applyForce(Jones.body,Jones.body.position,{x:50,y:0})
        Jones3.visible=true
        DefaultJones.visible=false
        Jones2.visible=false
        Jones4.visible=false
        Jones5.visible=false
        Jones6.visible=false
        Jones7.visible=false
      
    }
    if(keyIsDown(UP_ARROW)){
        Body.applyForce(Jones.body,Jones.body.position,{x:0,y:-100})
        Jones3.visible=false
        DefaultJones.visible=false
        Jones2.visible=false
        Jones4.visible=true
        Jones5.visible=false
        Jones6.visible=false
        Jones7.visible=false
    
    }
    if(keyIsDown(DOWN_ARROW)){
        Body.applyForce(Jones.body,Jones.body.position,{x:0,y:100})
        
    }
    if(Jones.body.velocity.x<10&&Jones.body.velocity.x>-10){
        Jones3.visible=false
        DefaultJones.visible=true
        Jones2.visible=false
        Jones4.visible=false
        Jones5.visible=false
        Jones6.visible=false
        Jones7.visible=false
      
    }
    if(Jones.body.velocity.y<1&&Jones.body.velocity.y>-1){
        Jones3.visible=false
        DefaultJones.visible=true
        Jones2.visible=false
        Jones4.visible=false
        Jones5.visible=false
        Jones6.visible=false
        Jones7.visible=false
       
    }
}
function Taunt(){
    if(keyDown("a") && !Jones.sound1.isPlaying() &&  !Jones.sound2.isPlaying() && !Jones.sound3.isPlaying()&&!Jones.jump1.isPlaying()&&!Jones.bonk1.isPlaying()){
        Jones.sound1.play()
    }

    if(keyDown("s")&& !Jones.sound1.isPlaying() &&  !Jones.sound2.isPlaying() && !Jones.sound3.isPlaying()&&!Jones.jump1.isPlaying()&&!Jones.bonk1.isPlaying()){
        Jones.sound2.play()
        
    }
    if(keyDown("d")&& !Jones.sound1.isPlaying() &&  !Jones.sound2.isPlaying() && !Jones.sound3.isPlaying()&&!Jones.jump1.isPlaying()&&!Jones.bonk1.isPlaying()){
        Jones.sound3.play()
    }


}
function Action(){
    if(keyDown("z") && !Jones.gun1.isPlaying()&&!Jones.gun2.isPlaying()){
        Jones2.visible=true
        DefaultJones.visible=false
        Jones3.visible=false
        Jones4.visible=false
        Jones5.visible=false
        Jones6.visible=false
        Jones7.visible=false
        Jones.gun1.play()
    }
    if(keyDown("x")&&!Jones.gun1.isPlaying()&&!Jones.gun2.isPlaying()){
        Jones5.visible=true
        DefaultJones.visible=false
        Jones2.visible=false
        Jones3.visible=false
        Jones4.visible=false
        Jones6.visible=false
        Jones7.visible=false
        Jones.gun2.play()
    }
    if(keyDown("c")&& !Jones.gun1.isPlaying()&& !Jones.gun2.isPlaying()&& !Jones.bat1.isPlaying()){
        Jones6.visible=true
        DefaultJones.visible=false
        Jones2.visible=false
        Jones3.visible=false
        Jones4.visible=false
        Jones5.visible=false
        Jones6.visible=false
        Jones7.visible=false
        Jones.bat1.play()
    }
}