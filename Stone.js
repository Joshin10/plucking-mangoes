class Stone{
    constructor(x,y,width,height) {
      var options= {
          isStatic:false,
          restitution:0,
          friction:0.6,
          density:1.2
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    this.stone=loadImage("images/stone.png")
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill(255);
   image(this.stone,this.body.position.x,this.body.position.y,50,60)
    }
  
}