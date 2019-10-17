let edgeD = 30;

class BlackHole
{
    constructor(w, h, M)
    {
        this.x = random(edgeD, w - edgeD);
        this.y = random(edgeD, h - edgeD);
        this.M = M;
        this.G = 500;
        this.c = 50;
        this.rs = (2 * this.G * M) / (this.c * this.c);
        this.rPhoton = 2.6 * this.rs;
        this.R = M;
        this.stop = true;
    }

    update()
    {
        this.M = (this.rs * c * c) / (2 * G);
    }

    move()
    {
        if(!this.stop)
        {
            this.x += (mouseX - this.x) / 50;
            this.y += (mouseY - this.y) / 50;
        }
    }
    
    draw()
    {
        fill(0);
        circle(this.x, this.y, this.rs);
    }

    followMouse()
    {
        this.stop = !this.stop;
    }

    isSelected()
    {
        let d = dist(this.x, this.y, mouseX, mouseY);
        return d < this.R + 10;
    }

    resetPosition()
    {
        this.x = random(edgeD, innerWidth - edgeD);
        this.y = random(edgeD, innerHeight - edgeD);
    }
}