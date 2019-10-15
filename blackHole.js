class BlackHole
{
    constructor(x, y, M)
    {
        this.x = x;
        this.y = y;
        this.M = M;
        this.G = 100;
        this.c = 50;
        this.rs = (2 * this.G * M) / (this.c * this.c);
        this.rPhoton = 2.6 * this.rs;
        this.R = 3 * this.rs;
    }

    update()
    {
        this.M = (this.rs * c * c) / (2 * G);
    }

    move()
    {
        let d = dist(mouseX, mouseY, this.x, this.y);
        if(d > 10 && d < 300)
        {
            this.x += (mouseX - this.x) / 20;
            this.y += (mouseY - this.y) / 20;
        }
    }
    
    draw()
    {
        fill(0);
        strokeWeight(2);
        noStroke();
        circle(this.x, this.y, this.R);
    }
}