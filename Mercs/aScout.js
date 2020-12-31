class Scout extends Merc{
    constructor(x,y,width,height){
        super(x,y,width,height);
        
       
        this.sound1=loadSound("Sounds/Scout's Voicelines/Taunt3.wav")
        this.sound2=loadSound("Sounds/Scout's Voicelines/Taunt1.mp3")
        this.sound3=loadSound("Sounds/Scout's Voicelines/Taunt2.wav")
        this.jump1=loadSound("Sounds/Scout's Voicelines/Jump1.wav")
        this.bonk1=loadSound("Sounds/Scout's Voicelines/BONK1.mp3")
        this.gun1=loadSound("Sounds/Other Sounds/Pistol.mp3")
        this.gun2=loadSound("Sounds/Other Sounds/Scattergun.mp3")
        this.bat1=loadSound("Sounds/Other Sounds/MetalBat.wav")
        console.log(this.body)
    }
    
}
