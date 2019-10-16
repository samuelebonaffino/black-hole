let fg = 1;

class Particle
{
    constructor()
    {
        this.x = random(0, width);
        this.y = random(0, height);
        this.color = fill(255);
        this.radius = random(0.5, 3);
        this.mass = 2 * this.radius;
        this.alpha = random(0.5, 0.95);
        this.fade = 0.001;
        this.dir = random(0, TWO_PI);
        this.remove = false;
    }

    step(bh)
    {
        this.alpha -= this.fade;
        let dx = bh.x - this.x;
        let dy = bh.y - this.y;
        let theta = atan2(dx, dy);
        let r = sqrt(dx * dx + dy * dy);

        if(r < bh.R)
            this.remove = true;

        fg = (bh.G * bh.M * this.mass) / (r * r);

        let fgx_G = fg * cos(theta);
        let fgy_G = fg * sin(theta);
        let fgx = fg * sin(theta);
        let fgy = fg * cos(theta);

        this.x += fgx + fgx_G;
        this.y += fgy - fgy_G;
    }

    wrap(min)
    {
        if(this.x < min)                this.x = innerWidth - min;
        if(this.y < min)                this.y = innerHeight - min;
        if(this.x > innerWidth - min)   this.x = min;   
        if(this.y > innerHeight - min)  this.y = min;
    }
}