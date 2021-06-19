nose_x = 0;
nose_y = 0;

function preload(){
mustache = loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
}

function setup(){

canvas = createCanvas(720,480);
canvas.center();
video = createCapture(VIDEO);
video.size(720,480);
video.hide();

poseNet = ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses)
}

classifier = ml5.imageClassifier('mobileNet',modelLoaded);

function  modelLoaded(){
    console.log('poseNet initialized');
}

function gotPoses(results){
    if(results.length > 0){
        nose_x = results[0].pose.nose.x -85;
        nose_y = results[0].pose.nose.y -15;
        console.log(results);
        console.log('nose x = ' + nose_x);
        console.log('nose y = ' + nose_y);
    }
}

function draw(){
    image(video,0,0,720,480);
    image(mustache,nose_x,nose_y,179,70);
}

function take_Snapshot(){
    save('naren.png');
}