class Rope{
    constructor(body1,body2,offsetX,offsetY){
    
        this.offsetX=offsetX
        this.offsetY=offsetY

        var options={
        bodyA:body1,
        bodyB:body2,
        pointB:{x:this.offsetX,y:this.offsetY}
        }
        this.rope=Constraint.create(options);
        World.add(world,this.rope);
    }

    /*fly(){
        this.rope.bodyA=null;
    }*/

    display(){
        var pointA=this.rope.bodyA.position;
        var pointB=this.rope.bodyB.position;


        var anchorA1=pointA.x;
        var anchorA2=pointA.y;
        var anchorB1=pointB.x+this.offsetX;
        var anchorB2=pointB.y+this.offsetY;

        fill("yellow");
        strokeWeight(4);
        line(anchorA1,anchorA2,anchorB1,anchorB2);
      

    }
}
