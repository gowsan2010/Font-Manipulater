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
}
function modelLoaded(){
    console.log("poseNet is loaded");
}
var last;
function gotPoses(results){
    if (results.length>0){
    last = results.length-1;        
    }
}