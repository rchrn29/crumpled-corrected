class CrumpledPaper{
    constructor(x,y){
        var options = {
            'restitution':0.3,
            'friction':0,
            'density':0.35,
            'isStatic': false
        }

        this.body = Bodies.circle(x,y,70,options);
        this.radius = 70;
        this.img = loadImage("paper.png");

        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(RADIUS);
        image(this.img,0,0,70,70);
        pop();

    }
}