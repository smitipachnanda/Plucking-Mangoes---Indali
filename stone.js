class Stone{
    constructor(x,y,radius){
        var options = {
            isStatic : false,
            restitution : 0,
            friction : 1,
            density : 1.2,
    }

        this.x=x;
        this.y=y;
        this.body = Bodies.circle(x,y,radius,options)
        this.radius = radius
        this.image = loadImage("images/stone.png")
        World.add(world,this.body)

}

display(){
    push()
       translate(this.body.position.x,this.body.position.y)
       imageMode(CENTER)
       ellipseMode(RADIUS)
       image(this.image, 0,0,this.radius*2, this.radius*2)
    pop()





}


}
