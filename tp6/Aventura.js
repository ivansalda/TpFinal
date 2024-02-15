class Aventura {
  constructor (imagen, notas) {
    this.pantallas = imagen;
    this.hoja = 0;
    this.click= false;
    this.botonInicio = new Boton (450, 500, 145, 75, "Inicio");
    this.botonSiguiente = new Boton (425, 500, 170, 75, "Siguente");
    this.botonCreditos = new Boton (50, 500, 175, 75, "Creditos");
    this.botonEchar = new Boton (450, 500, 145, 75, "Echar"); // Derecha
    this.botonCuidar = new Boton (50, 500, 175, 75, "Cuidar");// Izquieda
    this.botonCantar = new Boton (50, 500, 175, 75, "Cantar"); //Izquierda
    this.botonReir = new Boton (450, 500, 145, 75, "Reir"); // Derecha
    this.textos = notas;
    this.jugo = new Juego ();
    this.medidor = new Contador ();
  }

  mouseApretado () {
    this.click = true;
  }

  dibujar () {
    switch (this.hoja) {

    case 0: //INTRO
      image (this.pantallas[0], 0, 0, width, height);
      this.botonInicio.dibujar ();
      this.botonCreditos.dibujar ();
      this.tecto (300, 100, 300, 50, 12, 300, 85, 40);
      if (this.click && this.botonInicio.colisiones () ) {
        this.hoja = 2;
      } else if (this.click && this.botonCreditos.colisiones ()) {
        this.hoja = 14;
      }
      break;
      //---------------------------------------------------------------
    case 1: // ALDEA
      image (this.pantallas[1], 0, 0, width, height);
      //text (this.textos[1], 200, 200);
      this.tecto (450, 150, 300, 220, 0, 450, 50, 20);
      this.botonSiguiente.dibujar();
      if (this.click && this.botonSiguiente.colisiones ()) {
        this.hoja = 2;
      }
      break;
      //---------------------------------------------------------------
    case 2: //BOSQUE
      image (this.pantallas[2], 0, 0, width, height);
      this.tecto (270, 150, 300, 220, 1, 270, 75, 20);
      this.botonSiguiente.dibujar();
      if (this.click && this.botonSiguiente.colisiones ()) {
        this.hoja = 3;
      }
      break;
      //---------------------------------------------------------------
    case 3: //TRONO
      image (this.pantallas[3], 0, 0, width, height);
      this.tecto (270, 150, 300, 220, 2, 270, 65, 20);
      this.botonSiguiente.dibujar();
      if (this.click && this.botonSiguiente.colisiones ()) {
        this.hoja = 4;
      }
      break;
      //---------------------------------------------------------------
    case 4: //RUISEÑOR AUTOMATA Separacion: Cuidar (Busqueda Regalo)/ Echar (Enfermedad)
      image (this.pantallas[4], 0, 0, width, height);
      this.tecto (200, 375, 300, 220, 3, 200, 300, 20);
      this.botonEchar.dibujar ();
      this.botonCuidar.dibujar ();
      if (this.click && this.botonEchar.colisiones ()) {
        this.hoja = 5;
      } else if (this.click && this.botonCuidar.colisiones ()) {
        this.hoja = 7;
      }
      break;
      //---------------------------------------------------------------
    case 5: //ENFERMADAD Separacion: Cantar(Canto Salvador) /Reir (Charla Parca)
      image (this.pantallas[5], 0, 0, width, height);
      this.tecto (200, 375, 300, 220, 4, 200, 275, 19);
      this.botonReir.dibujar ();
      this.botonCantar.dibujar ();
      if (this.click && this.botonReir.colisiones ()) {
        this.hoja = 10;
      } else if (this.click && this.botonCantar.colisiones ()) {
        this.hoja = 6;
      }
      break;
      //---------------------------------------------------------------
    case 6: //CANTO SALVADOR (Final 1)
      image (this.pantallas[6], 0, 0, width, height);
      this.tecto (200, 450, 300, 220, 5, 200, 375, 19);
      this.botonInicio.dibujar();
      if (this.click && this.botonInicio.colisiones ()) {
        this.hoja = 0;
      }
      break;
      //---------------------------------------------------------------
    case 7: //LA BUSQUEDA DEL REGALO
      image (this.pantallas[7], 0, 0, width, height);
      this.tecto (400, 150, 300, 220, 6, 400, 100, 19);
      this.botonSiguiente.dibujar();
      if (this.click && this.botonSiguiente.colisiones ()) {
        this.hoja = 8;
      }
      break;
      //---------------------------------------------------------------
    case 8: //LA PREOCUPACION
      image (this.pantallas[8], 0, 0, width, height);
      this.tecto (400, 150, 300, 175, 7, 400, 100, 19);
      this.botonSiguiente.dibujar();
      if (this.click && this.botonSiguiente.colisiones ()) {
        this.hoja = 9;
      }
      break;
      //---------------------------------------------------------------
    case 9: //EL REGALO (FINAL 2)
      image (this.pantallas[9], 0, 0, width, height);
      this.tecto (400, 100, 300, 150, 8, 400, 50, 19);
      this.botonInicio.dibujar();
      if (this.click && this.botonInicio.colisiones ()) {
        this.hoja = 0;
      }
      break;
      //---------------------------------------------------------------
    case 10: //LA PARCA Y EL RUISEÑOR
      image (this.pantallas[10], 0, 0, width, height);
      this.tecto (200, 400, 300, 250, 9, 200, 300, 19);
      this.botonSiguiente.dibujar();
      if (this.click && this.botonSiguiente.colisiones ()) {
        this.hoja = 11;
      }
      break;
    case 11: //CANTO CONDENANTE
      image (this.pantallas[11], 0, 0, width, height);
      this.tecto (150, 475, 300, 220, 10, 150, 400, 19);
      this.botonSiguiente.dibujar();
      if (this.click && this.botonSiguiente.colisiones ()) {
        this.hoja = 12;
      }

      break;
      //---------------------------------------------------------------
    case 12: //JUEGO
      image (this.pantallas[14], 0, 0, width, height);
      this.jugo.dibujar (this.hoja);
      if (this.jugo.medidor.Punto >= 80 ) {
        this.hoja = 13;
        this.jugo.reset ();
      } else if (this.jugo.medidor.Punto <= -30) {
        this.hoja = 15;
        this.jugo.reset ();
      }
      break;
    case 13: //EL FINAL (FINAL 3)
      image (this.pantallas[12], 0, 0, width, height);
      this.tecto (300, 100, 300, 150, 11, 300, 50, 19);
      this.botonCreditos.dibujar();
      this.botonInicio.dibujar();
      if (this.click && this.botonInicio.colisiones () ) {
        this.hoja = 0;
      } else if (this.click && this.botonCreditos.colisiones ()) {
        this.hoja = 14;
      }
      break;
      //---------------------------------------------------------------
    case 14: // CREDITOS
      //this.jugo.reset ();
      image (this.pantallas[13], 0, 0, width, height);
      this.tecto (200, 400, 300, 150, 13, 200, 350, 19);
      this.botonInicio.dibujar();
      if (this.click && this.botonInicio.colisiones () ) {
        this.hoja = 0;
      }
      break;
      case 15: //PERDISTE
      image (this.pantallas[15], 0, 0, width, height);
      this.tecto (200, 150, 300, 100, 14, 200,120, 19);
      this.botonInicio.dibujar();
      this.botonCreditos.dibujar();
       if (this.click && this.botonInicio.colisiones () ) {
        this.hoja = 0;
      } else if (this.click && this.botonCreditos.colisiones ()) {
        this.hoja = 14;
      }
      break;
    }
    this.click = false;
  }
  tecto (posX, posY, tamX, tamY, n, posTX, posTY, tl) {
    push ();
    stroke(255, 207, 13);
    fill (0, 150);
    rectMode (CENTER);
    rect (posX, posY, tamX, tamY, 20);
    fill (255, 207, 13);
    textAlign (CENTER);
    textSize (tl);
    text (this.textos [n], posTX, posTY, 300);
    pop ();
  }
}
