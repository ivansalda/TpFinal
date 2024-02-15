class Notas {
  constructor (carlix, electrocarlix) {
    this.movimiento = 3;
    this.posY = 50 ;
    this.posX = electrocarlix;
    this.lavuelta ();
    this.resta =false;
  }
  dibujar () {
    push ();
    imageMode (CENTER);
    image (notaM, this.posX, this.posY, 50, 50, 0);
    noStroke ();
    fill (0, 0)
      circle (this.posX, this.posY, 50, 50);
    pop ();
  }
  posiposY () {
    return (this.posY);
  }
  lacaida () {
    this.posY += this.movimiento;
    this.resta = false;
    if (this.posY >= height) {
      this.lavuelta ();
      this.resta = true;
    }
  }
  lavuelta () {
    this.posY = random (-350, -50);
  }
  getresta () {
    return (this.resta);
  }
}
