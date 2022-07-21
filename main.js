function setup()
{
    canvas = createCanvas(500,400);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

song="";

function preload()
{
    song = loadSound("music.mp3");
}

function draw()
{
    image(video,0,0,500,400);
}

function play()
{
    song.play();
}