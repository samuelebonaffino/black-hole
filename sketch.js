var w = innerWidth;
var h = innerHeight;
var bh = new BlackHole(w/2, h/2, 200);
var particles = [];
var N = 2400;

function setup()
{
    createCanvas(w, h);
    for(let i = 0; i < N; i++)
        particles.push(new Particle);
}

function draw()
{
    background(3);
    for(let i = 0; i < particles.length; i++)
    {
        fill(255);
        noStroke();     
        let p = particles[i];
        circle(p.x, p.y, p.radius);
        if(p.remove)
            particles.splice(i, 1);
        p.step(bh);
        p.wrap(10);
    }
    bh.move();
    bh.draw();
    updateParticles();
}

function keyTyped() 
{
    if(key == 's') 
        bh.followMouse();
}

function updateParticles()
{
    while(particles.length < N)
        particles.push(new Particle);
}

function windowResized()
{
    resizeCanvas(innerWidth, innerHeight, false);
    bh.resetPosition();
}