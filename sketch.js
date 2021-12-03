let img;
function setup() {  
    let cnv = createCanvas(100, 100);
    cnv.mousePressed(userStartAudio);
    // createCanvas(400, 400);
    mic = new p5.AudioIn();
    mic.start();
  }

function draw() {
    let micLevel = mic.getLevel();
    let scaleX = height + micLevel * width;
    let scaleY = width + micLevel * height;
    image(img, 2, 2, scaleX, scaleY); 
}


function preload() {
  img = loadImage('/assets/vehicle.png');
}

function mousePressed() {
    if (getAudioContext().state !== 'running') {
        getAudioContext().resume();
    }
}