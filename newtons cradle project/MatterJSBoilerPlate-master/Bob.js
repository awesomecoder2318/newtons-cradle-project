class Bob{
    constructor(x,y,width){ 
        var options = {
            'restitution':1,
            'friction':1,
            'density':1,
            'frictionAir': 0,
        }
        this.x=x
        this.y=y
        this.width=width
this.body=Bodies.circle(x,y,width,options)
World.add(world,this.body)

    }
    display(){
        var pos =this.body.position;
    
        push();
        translate(pos.x, pos.y);
        fill(255)
        ellipseMode(RADIUS);
        ellipse(0,0,this.diameter);
        pop();
    }
}