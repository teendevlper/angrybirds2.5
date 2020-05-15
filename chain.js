class Chain{
    constructor(bodyA,bodyB){
        var options={
            'length' : 40,
            'stiffness' : 0.5,
            'bodyA' : bodyA,
            'bodyB' : bodyB
        }
      this.chain = Matter.Constraint.create(options);
      World.add(world,this.chain);
    }

 display(){
  
 var startpoint = this.chain.bodyA.position;
 var endpoint = this.chain.bodyB.position;
 
 stroke('red');
  strokeWeight(5);
    line(startpoint.x,startpoint.y,endpoint.x,endpoint.y);
 }



}