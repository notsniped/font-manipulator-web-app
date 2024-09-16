var difference = 0;
var leftWristX = 0;
var rightWristX = 0;

function preload() {}

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
    
    canvas = createCanvas(550, 550);
    canvas.position(560, 250);
    
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet successfully initialized.');
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        // Fetch x coordinates of leftWrist and rightWrist
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        
        // Find the difference and remove decimals
        difference = floor(leftWristX - rightWristX);
        
        console.log("leftWristX = " + leftWristX + " rightWristX = " + rightWristX + " difference = " + difference);
    }
}

function draw() {
    background('#919191');
    
    // Update the text size display dynamically
    document.getElementById("font_size_display").innerHTML = difference;
    
    textSize(difference);
    fill('#FFE787');
    text("Dhruv", 50, 300);
}
