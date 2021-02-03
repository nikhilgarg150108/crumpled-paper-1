class Paper 
{
    constructor (x,y)
    {
        var options = {
            isStatic:false,
            restitution:0.8,
            friction:0.3,
            density:1.0
        }
        this.body=Bodies.circle (x, y, 20, options);
        this.width=20;

        World.add(world,this.body);
    }

    display()
    {
        var pos =this.body.position;        
        var angle = this.body.angle;
        push();
        rotate(angle);
        fill("red");
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,20,20);
        pop();
    }
};