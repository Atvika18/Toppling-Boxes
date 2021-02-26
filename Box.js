class Box
{
    constructor (x,y,width,height)
    {
var boxOptions ={
    restitution:1,
    friction:0.3,
    density:1,
}

        this.box = Bodies.rectangle(x,y,width,height,boxOptions)
        World.add(myWorld, this.box)

        this.width = width;
        this.height = height;
    }

    display()
    {
        var pos = this.box.position;
        var angle = this.box.angle;

        push()
        translate(pos.x,pos.y)
        rotate(angle)
        strokeWeight (4)
        stroke("yellow")
        rectMode (CENTER)
        rect(0,0,this.width,this.height)
        pop()
    }
}