class Roof{
    constructor(x,y,width,height){

     var options={
         isStatic:true,
         density:1
     }


     this.body=Bodies.rectangle(x,y,width,height,options);
     this.height=height;
     this.width=width;
     World.add(world,this.body);

    }

    display(){
        
        var pos=this.body.position;
        push()
        translate(pos.x,pos.y);
         rectMode(CENTER);
         strokeWeight(4);
         fill("red");
         rect(0,0,this.width,this.height);
         pop();
 

    }
};