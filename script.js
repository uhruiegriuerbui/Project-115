noseX=0;
noseY=0;
function preload(){
clown_nose=loadImage("https://i.postimg.cc/T15b5S91/clown-nsoe.jpg");
}
function setup() { 
canvas = createCanvas(300, 300);
canvas.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide();
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose' , gotposes);
}
function draw(){
image(video , 0 , 0 , 300 , 300);
fill(255 , 0 , 0);
stroke(255 , 0 , 0);
circle(noseX, noseY , 30);
//image(clown_nose , noseX , noseY , 30 , 30);
}
function Save(){
save('img.png');

}
function modelLoaded(){
console.log('poseNet is Initialized');
}
function gotposes(results){
if(results.length > 0){
console.log(results);
noseX=results[0].pose.nose.x -15;
noseY=results[0].pose.nose.y -15;
console.log("nose x= " + noseX);
console.log("nose y= " + noseY);
}

} 