class Particle
{
    constructor()
    {
        this.x = random(0, width);
        this.y = random(0, height);
        this.color = fill(255);
        this.radius = random(0.5, 2);
        this.mass = 2 * this.radius;
        this.alpha = random(0.5, 0.95);
        this.fade = 0.001;
        this.dir = random(0, TWO_PI);
        this.remove = false;
        this.fg = 1;
    }

    step(bh)
    {
        angleMode(RADIANS);
        this.alpha -= this.fade;
        let dx = bh.x - this.x;
        let dy = bh.y - this.y;
        let theta = atan2(dx, dy);
        let r = sqrt(dx * dx + dy * dy);
        if(r < bh.rs)
            this.remove = true;
        this.fg = (1.4 * bh.G * bh.M * this.mass) / (r * r);

        let fgx_G = this.fg * cos(theta);
        let fgy_G = this.fg * sin(theta);
        let fgx = this.fg * sin(theta);
        let fgy = this.fg * cos(theta);

        this.x += fgx + fgx_G;
        this.y += + fgy - fgy_G;
    }
}