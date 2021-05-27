class Launcher {
    constructor (bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            length: 10,
            stiffness: 0.04
        }
        this.launcher = Constraint.create(options);
        World.add(world, this.launcher);
    }

    fly(){
        this.launcher.bodyA = null;
    }

    display(){
        if(this.launcher.bodyA){
            var posBodyA = this.launcher.bodyA.position;
            var posPointB = this.launcher.pointB;
            push();
            strokeWeight(4);
            line(posBodyA.x, posBodyA.y, posPointB.x, posPointB.y);
            pop();
        }
    }

}
    