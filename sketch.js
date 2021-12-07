let img;
var radius = 150;
var angle = 0;
var speed = 0.05;
// var steps = TWO_PI/360;


function setup() {  
    let cnv = createCanvas(800, 600);
    cnv.mousePressed(userStartAudio);
    // createCanvas(400, 400);
    mic = new p5.AudioIn();
    mic.start();
  }

function draw() {
    background(0);
    image(img, width/2 - (img.width/2), height/2 - (img.width/2), img.width, img.height); 
    // background(255);
    // expandCar();
    moveDial();
}

function moveDial() {
    let micLevel = mic.getLevel();
    strokeWeight(10); 
    stroke(255, 200, 200, 130);
    let cx = width/2;
    let cy = height/2;
    // background(0);
    translate(0, 0); //set the new origin/point of rotation
    
    // strokeWeight(3);
    // stroke(255);
    // fill(255);
    if (micLevel > 0.003) {
        line(cx, cy, cx + cos(angle) * radius, cy + sin(angle) * radius);
        rotate(angle);
        angle = angle + (micLevel*5);
    } else {
        angle = angle - (micLevel*5);
        rotate(angle);
        // angle = 0;
        line(cx, cy, cx + cos(angle) * radius, cx + sin(angle) * radius);
        
        
    }
}

function preload() {
  img = loadImage('/assets/speedometer.png');
}

function mousePressed() {
    if (getAudioContext().state != 'running') {
        getAudioContext().resume();
    }
}