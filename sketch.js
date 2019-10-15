var w = 800;
var h = 400;
var bh = new BlackHole(w/2, h/2, 200);
var particles = [];
var N = 400;

function setup()
{
    createCanvas(w, h);
    for(let i = 0; i < N; i++)
        particles.push(new Particle);
}

function draw()
{
    background(7);
    for(let i = 0; i < particles.length; i++)
    {
        fill(255);
        noStroke();
        let p = particles[i];
        circle(p.x, p.y, p.radius);
        if(p.remove)
            particles.splice(i, 1);
        p.step(bh);
    }
    bh.draw();
    updateParticles();
    bh.move();
}

function updateParticles()
{
    while(particles.length < N)
        particles.push(new Particle);
}