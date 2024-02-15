class Boton {
  constructor (xp,yp,xa,ya,tx) {
    //this.opasidad = 50;
    // this.colision;
    this.xp = xp;
    this.yp = yp;
    this.xa = xa;
    this.ya = ya;
    this.tx = tx;
    this.op = 80;
  }

  dibujar () {
    push ();
    textSize (37);
    fill(0);
    push ();
    strokeWeight (3);
    stroke(255, 207, 13,this.op);
    rect (this.xp, this.yp, this.xa, this.ya);
    pop ();
    fill (255, 207, 13,this.op);
    text (this.tx, this.xp+10, this.yp+55);
    pop();
    if (this.colisiones ()){
    this.op =255;
    } else {
    this.op = 80;
    }
  }
  colisiones () {
    if (mouseX <= this.xp + this.xa && mouseX >= this.xp && mouseY <=  this.yp + this.ya && mouseY >= this.yp) {      
      return true;   
    }else {
    return false; 
    }
  }
}
