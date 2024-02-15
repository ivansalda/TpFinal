class Contador {
  constructor() {
    this.Punto=0
      this.X=310;
    this.Y=500;
  }
  dibujo () {
    push ();
    fill (242, 212, 39);
    rectMode (CENTER);
    rect (this.X, this.Y, 90, 90);
    textSize (40);
    textAlign (CENTER,CENTER);
    fill (0);
    text (this.Punto, this.X, this.Y);
    pop();
  }
}
