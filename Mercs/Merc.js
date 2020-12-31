class Merc{
    constructor(x,y,width,height){
        var options={
            'restitution': 0.6,
            'friction': 1.0,
            'density':3.0
        }
        this.image=loadImage("images/Icon.png")
        this.body=Bodies.rectangle(x,y,width/2,height/2,options)
        this.width=width
        this.height=height
        
        World.add(world,this.body)
    }
    display(){
        var pos= this.body.position
        push()
        translate(pos.x,pos.y)
         imageMode(CENTER)
         image(this.image,0,0,this.width,this.height)
        pop()
    }
    
}