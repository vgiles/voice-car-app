let img;
var radius = 150;
var angle = 0;
var speed = 0.05;


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
    // image(img, 2, 2, width, height); 
    // let micLevel = mic.getLevel();
    // let scaleX = height * micLevel;
    // let scaleY = width * micLevel;
    var centerX = width/2;
    var centerY = height/2;
    ellipse(centerX, centerY, 10, 10);
  
    var x = centerX + radius * cos(angle);
    var y = centerY + radius * sin(angle);
    strokeWeight(30); 
    stroke(255, 255, 255, 130);
    line(y, x, 50, 50);
  
    angle = angle + speed;
}

function preload() {
  img = loadImage('/assets/speedometer.png');
}

function mousePressed() {
    if (getAudioContext().state !== 'running') {
        getAudioContext().resume();
    }
}