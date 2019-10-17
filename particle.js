class Particle
{
    constructor()
    {
        this.x = random(0, width);
        this.y = random(0, height);
        //this.color = color(random(0, 255), random(0, 255), random(0, 255));
        this.color = color(255);
        this.radius = random(0.5, 3);
        this.mass = 2 * this.radius;
        this.alpha = 255;
        this.fade = random(0.5, 5);
        this.dir = random(0, TWO_PI);
        this.remove = false;
    }

    fading()
    {
        this.alpha -= this.fade;
        this.color.setAlpha(this.alpha);
    }

    toRemove(r, bh)
    {
        if(r < bh.rs || this.alpha <= 20)
                this.remove = true;
    }

    step(bh)
    {
        //this.fading();
        let fg = 0;
        let fgx_G = 0;
        let fgy_G = 0;
        let fgx = 0;
        let fgy = 0;

        for(let i = 0; i < bh.length; i++)
        {
            let dx = bh[i].x - this.x;
            let dy = bh[i].y - this.y;
            let theta = atan2(dx, dy);
            let r = sqrt(dx * dx + dy * dy);

            this.toRemove(r, bh[i]);

            // Not the actual formula
            fg = (bh[i].G * bh[i].M) / (r * r * this.mass);

            fgx_G += 30 * fg * cos(theta);
            fgy_G += 10 * fg * sin(theta);
            fgx += fg * sin(theta);
            fgy += fg * cos(theta);
        }

        this.x += fgx + fgx_G;
        this.y += fgy - fgy_G;

        //this.wrap(30);
    }

    wrap(min)
    {
        if(this.x < min)                this.x = innerWidth - min;
        if(this.y < min)                this.y = innerHeight - min;
        if(this.x > innerWidth - min)   this.x = min;   
        if(this.y > innerHeight - min)  this.y = min;
    }
}