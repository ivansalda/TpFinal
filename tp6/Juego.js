class Juego {
  constructor () {
    this.medidor = new Contador ();
    this.objnumero = [];
    this.reset ();

    //---------------------------------------------------------
    for (let i=0; i<= 2; i ++) {
      this.objnumero[i] = new Objetivo (50+i*75);
    }
    this.objnumero[0].fijartecla('a');
    this.objnumero[1].fijartecla('s');
    this.objnumero[2].fijartecla('d');
  }
  dibujar (asd) {
    this.medidor.dibujo ();
    
    for (let i=0; i < this.objnumero.length; i ++) {
      this.objnumero[i].dibujar();
      if ( this.objnumero[i].getpunto()) {
        this.medidor.Punto += 10;
      }
      if ( this.objnumero[i].notas.getresta()) {
        this.medidor.Punto -= 10;
      }
  }
}

  reset () {
    this.medidor.Punto = 0;
    for (let i=0; i < this.objnumero.length; i ++) {
      this.objnumero[i].notas.lavuelta();
    }
  }

}
