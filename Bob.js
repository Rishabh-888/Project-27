class Bob{
    constructor(x, y, radius){
        var options={
            isStatic:false,
            restitution:1.2,
            friction:0.8,
            density:1.2
        }
        this.body = Bodies.circle(x, y, 40, options);
        World.add(world, this.body);
        }
        display(){

        push();
        var pos =this.body.position;
        var angle=this.body.angle;
        push ();
        translate (pos.x, pos.y);
        rotate (angle);
        fill("red");
        ellipseMode(RADIUS);
        ellipse(0, 0, this.radius, this.radius);
        pop();
        }
}