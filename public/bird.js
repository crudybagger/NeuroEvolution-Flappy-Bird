class Bird {
    constructor(){
        this.r = 12;
        this.x = 100;
        this.y = height/2;
        
        this.gravity = 0.2;
        this.lift = -7;
        this.vel = 0;
    }

    up(){
        if(this.vel >= 0){
            this.vel += this.lift;
        }
    }

    show(){
        fill(255, 255, 0);
        ellipse(this.x, this.y, 2*this.r, 2*this.r);
    }

    update(){
        this.vel += this.gravity;
        this.y += this.vel*0.8;

        if(this.y > height){
            this.y = height;
            this.vel = 0;
        }
        if(this.y < 0){
            this.y = 0;
            this.vel = 0;
        }
    }
}