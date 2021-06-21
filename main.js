function setup(){
    video = createCapture(VIDEO);
    video.position(100, 400);
    canvas = createCanvas(550, 450);
    canvas.position(800, 450);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw(){
    background('#b0abab')
    textSize(difference);
    fill('orange');
    text('Gowtham', nose_x, nose_y);
}
function modelLoaded(){
    console.log("poseNet is loaded");
}
var leftWrist;
var rightWrist;
var nose_x;
var nose_y;
var difference;
function gotPoses(results){
    if (results.length>0){
           console.log(results);
           leftWrist = results[0].pose.leftWrist.x;
           rightWrist = results[0].pose.rightWrist.x;
           nose_x = results[0].pose.nose.x;
           nose_y = results[0].pose.nose.y;
           difference = leftWrist-rightWrist;
    }
}
