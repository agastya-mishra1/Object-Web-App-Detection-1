status1="";
function preload(){
    img=loadImage("lamp.jpg");
}
function setup(){
    canvas=createCanvas(380,380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380,380);
    video.hide();
    objectDetector = ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innnerHTML="Status: Detecting Objects";
}
function modelLoaded(){
    console.log("Cocossd Is Initialized");
    status1=true;
    objectDetector.detect(video,gotResults);
}
function gotResults(error,results){
    if(error){
        console.log(error);     
    }
    else{
        console.log(results);
        objects=results;   
    }
}