var w = innerWidth;
var h = innerHeight;
var bgColor = 3;

var blackHolesN = 2;
var particlesN = 2000;
var bh = [];
var particles = [];

function setup()
{
    createCanvas(w, h);
    background(bgColor);
    for(let i = 0; i < particlesN; i++)
        particles.push(new Particle);
    for(i = 0; i < blackHolesN; i++)
        bh.push(new BlackHole(w, h, random(10, 100)));
}

function draw()
{
    background(bgColor);
    fill(255);
    noStroke();
    for(let i = 0; i < particles.length; i++)
    {
        let p = particles[i];
        circle(p.x, p.y, p.radius);
        p.step(bh);
        // if(p.remove)
        //     particles.splice(i, 1);
        // else
        // {
        //   //fill(p.color);
             //circle(p.x, p.y, p.radius);
             //p.step(bh);
        // }
        //fill(p.color);
    }
    for(i = 0; i < bh.length; i++)
    {
        bh[i].move();
        bh[i].draw();
    }
    //updateParticles(particlesN);
}

function mousePressed()
{
    for(let i = 0; i < bh.length; i++)
        if(bh[i].isSelected())
            bh[i].followMouse();
}

function keyTyped() 
{
    if(key == 'f') 
    {
        let fs = fullscreen();
        fullscreen(!fs);
    }
    else if(key == 'w')
    {
        background(bgColor);
        bh.push(new BlackHole(w, h, random(10, 100)));
    }
    else if(key == 's')
    {
        background(bgColor);
        bh.pop();
    }
}

function windowResized()
{
    w = innerWidth;
    h = innerHeight;
    resizeCanvas(w, h, false);
    for(let i = 0; i < bh.length; i++)
        bh[i].resetPosition();
}