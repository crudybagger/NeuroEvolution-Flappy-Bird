var counter = 0;
let pipes = [];
var slider;
let bird;
function setup(){
    createCanvas(600, 400);
    bird = new Bird();
    slider = createSlider(1, 100, 1)
    //pipes.push(new Pipe());
}

function draw(){

    for(var k = 0; k < slider.value(); k++){
        
        if(counter % 120 == 0){
            pipes.push(new Pipe());
        }

        for(var i = pipes.length -1; i >= 0; i--){
            pipes[i].update();
            if(pipes[i].offScreen()){
                pipes.splice(i, 1);
            }
        }
        
        for (var j = 0; j < pipes.length; j++) {
            if (pipes[j].collides(bird)) {
                pipes[j].collide = true;
                break;
            }
        }
        bird.update();
        counter++;
    }


    background(30, 30, 200);
    for(pipe of pipes){
        pipe.show();
    }
    bird.show();
    //bird.update();
}
function keyPressed(){
        if(key == " "){
            bird.up();
        }
    }