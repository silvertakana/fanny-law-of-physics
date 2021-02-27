class Joint {
    constructor(a,b,long,stiff){
        var option = {
            'bodyA': a,
            'bodyB': b,
            'stiffness':stiff,
            'length':long
        }
        this.joint  = Constraint.create(option);
        World.add(world,this.joint)
    }
    display() {
        var posA = this.joint.bodyA.position;
        var posB = this.joint.bodyB.position;
        line(posA.x,posA.y,posB.x,posB.y);    
    }
}