class Paper {
    constructor(x,y,width,height) {
        var options = {
            isStatic:false,
            restitution: 0.3,
            friction:0.5,
            density:1.2,
        }

    }
    this.body = Bodies.ellipse(x,y,50,50,options);
    this.width = 50;
    this.height = 50;
    display() {
        var pos = this.body.position;
        ellipseMode(CENTER);
        fill("white");  
        ellipse(20,20,20,20);

    }


}

function keyPressed() {    
    if(keyDown === "UP_ARROW") {
        
        Matter.body.applyforce(paperObject.body.paperObject.body.position,{x:85,y:-85});

    }

}