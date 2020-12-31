class Medkit{
    constructor(x,y,width,height){
        var options={
            'isStatic':true,
            'restitution': 1,
            'friction': 1.0,
            'density':3.0,
            'velocity.x':10
        }
        this.image=loadImage("images/meds.png")
        this.body=Bodies.rectangle(x,y,width,height,options)
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
        console.log(Math.round(this.body.velocity.x))
    }
}