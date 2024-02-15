class Objetivo {
  constructor (carlos) {
    this.posX = carlos;
    this.posY = 525;
    this.tam = 50;
    this.notas = new Notas (0, this.posX);
    this.tecla = "";
    this.punto = false;
  }

  dibujar () {
    fill (242, 212, 39);
    push ();
    rectMode (CENTER);
    rect (this.posX, this.posY, this.tam, this.tam);
    pop () ;
    this.notas.dibujar ();
    this.notas.lacaida ();
    this.colision();
  }
  colision () {
    this.punto = false;
    if (this.notas.posiposY () >= this.posY && this.tecla == key && keyIsPressed) {
      this.notas.lavuelta ();
      this.punto = true;
    }
  }
  fijartecla (jesus) {
    this.tecla = jesus;
  }
  getpunto () {
    return (this.punto);
  }
}
