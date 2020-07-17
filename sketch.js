var w = innerWidth;
var h = innerHeight;
var bgColor = 5;

var blackHolesN = 2;
var particlesN = 2000;
var bh = [];
var particles = [];

// Particles motion
var fgxMul = 10;
var fgyMul = 10;

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
        if(p.remove)
            particles.splice(i, 1);
        else
        {
            fill(p.color);
            circle(p.x, p.y, p.radius);
            p.step(bh);
        }
    }
    for(i = 0; i < bh.length; i++)
    {
        bh[i].move();
        bh[i].draw();
    }
    updateParticles(particlesN);
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

function keyPressed()
{
    if(keyCode == UP_ARROW)
        fgyMul += 10;
    else if(keyCode == DOWN_ARROW)
        fgyMul -= 10;

    if(keyCode == RIGHT_ARROW)
        fgxMul += 10;
    else if(keyCode == LEFT_ARROW)
        fgxMul -= 10;
}

function windowResized()
{
    w = innerWidth;
    h = innerHeight;
    resizeCanvas(w, h, false);
    for(let i = 0; i < bh.length; i++)
        bh[i].resetPosition();
}
