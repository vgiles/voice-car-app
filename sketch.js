let img;
function setup() {  
    let cnv = createCanvas(400, 400);
    cnv.mousePressed(userStartAudio);
    // createCanvas(400, 400);
    mic = new p5.AudioIn();
    mic.start();
  }

function draw() {
    expandCar();
}

function expandCar() {
    image(img, 2, 2, width, height); 
    let micLevel = mic.getLevel();
    let scaleX = height * micLevel;
    let scaleY = width * micLevel;
    image(img, 2, 2, width * scaleX, height * scaleY); 
}

function preload() {
  img = loadImage('/assets/vehicle.png');
}

function mousePressed() {
    if (getAudioContext().state !== 'running') {
        getAudioContext().resume();
    }
}