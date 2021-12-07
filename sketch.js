let img;
var radius = 130;
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
    strokeWeight(10); 
    stroke(255, 255, 255, 130);
    let micLevel = mic.getLevel();
    // console.log(micLevel);
    // let scaleX = height * micLevel;
    // let scaleY = width * micLevel;
    var centreX = width/2;
    var centreY = height/2;
    var defaultX = width/3.5;
    var defaultY = ((height/2.5)+100);
    var x = defaultX * sin(angle);
    var y = defaultY * cos(angle);

    ellipse(centreX, centreY, 10, 10);
  
    if (micLevel > 0) {
        line(centreX, centreY, centreX - radius, centreY - radius );
    } else {
        line(centreX, centreY, defaultX, defaultY);
    }
    
  
    angle = angle + (micLevel*10000);
}

function preload() {
  img = loadImage('/assets/speedometer.png');
}

function mousePressed() {
    if (getAudioContext().state != 'running') {
        getAudioContext().resume();
    }
}