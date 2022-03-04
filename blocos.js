class blocos{

    constructor(x,y,width,height,cor){

        var config = {
            isStatic:true
        }

        this.cor = cor;
        this.width = width;
        this.height = height;
        
        this.body = Bodies.rectangle(x,y,width,height,config);
        World.add(world,this.body);
    }

    display(){

        var pos = this.body.position;
        var angulo = this.body.angle;
        

       push();
       translate(pos.x,pos.y);
       rotate(angulo);
       fill(this.cor);
        rect(0,0,this.width,this.height);
        pop();
    }
}