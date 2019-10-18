class Particle
{
    constructor()
    {
        this.x = random(0, width);
        this.y = random(0, height);
        //this.color = color(random(0, 255), random(0, 255), random(0, 255));
        this.color = color(255);
        this.radius = random(0.5, 5);
        this.mass = 2 * this.radius;
        this.alpha = 255;
        this.fade = random(0.005, 0.01);
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
        if(r < bh.rs + 10 || this.alpha <= 20)
                this.remove = true;
    }

    step(bh)
    {
        this.fading();
        let fg = 0;
        let fgX = 0;
        let fgY = 0;
        let motionX = 0;
        let motionY = 0;

        for(let i = 0; i < bh.length; i++)
        {
            let dx = bh[i].x - this.x;
            let dy = bh[i].y - this.y;
            let theta = atan2(dx, dy);
            let r = sqrt(dx * dx + dy * dy);

            this.toRemove(r, bh[i]);

            // Not the actual formula
            fg = (bh[i].G * bh[i].M) / (r * r * this.mass);

            fgX     += fgxMul * fg * cos(theta);
            fgY     += fgyMul * fg * sin(theta);
            motionX += fg * sin(theta);
            motionY += fg * cos(theta);
        }

        this.x += motionX + fgX;
        this.y += motionY - fgY;

        //this.wrap(0);
    }

    wrap(min)
    {
        if(this.x < min)                this.x = innerWidth - min;
        if(this.y < min)                this.y = innerHeight - min;
        if(this.x > innerWidth - min)   this.x = min;   
        if(this.y > innerHeight - min)  this.y = min;
    }
}