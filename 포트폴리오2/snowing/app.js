window.onload = function(){
var canvas = document.getElementById('sky');
var ctx = canvas.getContext('2d');

var w = window.innerWidth;
var h = window.innerHeight;

canvas.width = w;
canvas.height = h;

// GENERATE THE stars

var mf = 100; //QUANTITY OF stars
var flakes = [];

//loop through empty stars and apply attributes('width,height')

for(var i = 0; i < mf; i++)
 {

    flakes.push({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() *5+ 2, // radius of each star = min 2px max 7px
        d: Math.random() + 1// like the weight, how far they would fall
    })

}

//draw flakes on the canvas

function drawFlakes()

{
    ctx.clearRect(0, 0, w, h); // clears canvas
    ctx.fillStyle = "white"; // fill the canvas or shapes will be white
    ctx.beginPath(); // about to begin a path or draw shape
    for(var i = 0; i < mf; i++) // going through each star
    {
        var f = flakes[i]; // grabbing fstar
        ctx.moveTo(f.x, f.y); 
        ctx.arc(f.x, f.y, f.r, 0, Math.PI*2, true); 
    }
    ctx.fill(); // fills flakes
    moveFlakes();

}

// animate flakes

var angle = 0; // controls movement of flakes

function moveFlakes(){
    angle += 0.01;
    for(var i = 0; i < mf; i++)
    {
        //store current flake
        var f = flakes[i];

        //update x any coorodinates of each flake
        f.y += Math.pow(f.d, 2) + 1;
        f.x += Math.sin(angle) * 2;

        //if snows flakes reach bottom, send a new one to the top

            if(f.y > h) {
                flakes[i] = {
                    x: Math.random()* w,
                    y: 0,
                    r: f.r,
                    d: f.d
                }
            }
    }
 }


    setInterval(drawFlakes, 25);


}