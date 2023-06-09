noseX = 0;
noseY = 0;
var video;
function setup() {
    canvas = createCanvas(400, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses)

}

function modelLoaded() {
    console.log("Pose Net had been initialized")
}

function gotPoses(results) {

    if (results.length > 0) {

        console.log("noseX =" + results[0].pose.nose.x);
        noseX = results[0].pose.nose.x;
        console.log("noseY =" + results[0].pose.nose.y);
        noseY = results[0].pose.nose.y;

    }

}

function take_snapshot() {
    save('clownLOL.png');
}

function draw() {
    image(video, 0, 0, 400, 400);

    fill(8, 255, 255);
    circle(noseX - 135, noseY - 45, 20, 20);
}
