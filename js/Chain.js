class Chain{
	constructor(bodyA,pointB)
	{
		var options={
			bodyA:bodyA,
			pointB:pointB,
			stiffness:0.001,
           	length:1
		}
        this.pointB=pointB;
		this.chain=Matter.Constraint.create(options)
		World.add(world, this.chain);
	}

	display(){
		if(this.chain.bodyA){
			strokeWeight(2)
    		stroke("255")
			line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.pointB.x,this.pointB.y,)
 		}
	}

 	fly() {
    	this.chain.bodyA=null;
    }
}

