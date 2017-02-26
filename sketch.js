function preload() {
 costi=loadImage("assets/costi.jpg"); 
}
function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
    translate(0,-1*(height/10))
    background(costi);
    
    textFont('Scope One');
    textSize(200);
    textAlign(CENTER);
    text(hour(),width/2,height/3);
    
    fill((lerpColor(color(90,180,46), color(200,40,70), (frameCount%5)/5)));
    textFont('Arvo');
    text(minute(),width/2,height/3*2);
   
    fill((lerpColor(color(255, 240, 0), color(0, 91, 229), (frameCount%7)/3)));
    textFont('Lora');
    text(second(),width/2,height/3*3);
    

}

function windowResized() {
    // creo una nuova funzione
    resizeCanvas(windowWidth,windowHeight);
}