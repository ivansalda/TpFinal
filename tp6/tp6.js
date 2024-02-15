let tamX = 600, tamY= 600;
let pantallas;
let objAventura;
let escritos;
let notas;
let notaM;
//let xp;
//----------------------------------------------------------------
function preload () {
  notaM = loadImage ('data/Notamusical.png');
  pantallas = [];
  for (let i=0; i<= 15; i ++) {
    pantallas [i] = loadImage ('data/Pantalla'+i+'.jpeg');
  }
  notas = [14];
  notas [0] = "En una lejana aldea, se contaba la leyenda de un ruiseñor cuyo canto era \n tan hermoso que podia curar enfermedades y traer alegria a los corazones. Sin embargos, el emperador desconocia \n la existencia de esta ave.";
  notas [1] ="Los cortesanos encuentran al ruiseñor en un bosque y lo llevan al palacio para presentarlo al emperador. El ave canta maravillosamente y su melodía cautiva a todos los presentes.";
  notas [2] ="El ruiseñor real se convierte en una presencia especial en el palacio, deleitando al emperador y a toda su corte con su hermoso canto. Su música llena de emoción y autenticidad toca los corazones de todos.";
  notas [3] ="Un dia al emperador le regalan un ruiseñor mecanico el cual puede imitar su el canto del ruiseñor real, este le encanta al emperador. Le deja de prestar atención al ruiseñor real y no sabe si echarlo o no.";
  notas [4] ="Con el tiempo, el emperador cae gravemenete enfermo. Durante su enfermedad, la Parca, personificación de la muerte, se aparece ante él. El emperador teme por su vida y se siente angustiado. El ruiseñor vuelve para decidir el destino de su Suberano.";
  notas [5] ="Comienza a cantar su melodia encantadora, ignorando la presencia de la Parca. Su canto llena de esperanza y calma al emperador senandolo de su enfermedad.";
  notas [6] ="El ruiseñor agradecido con el emperador, le dice que se ira un tiempo para buscarlo un regalo especial.";
  notas [7] ="Ante la tardanza de su ruiseñor el emperador se preocupa por este, mandando a sus sudbitos en su busca. Aunque no lo encuentren.";
  notas [8] ="Con el paso del tiempo el ruiseñor volvio y no solo el, este regreso con una bandada de ruiseñores para que se unieran para cantarle a su soberano toda la vida.";
  notas [9] ="El ruiseñor enojado por lo que habia hecho el emperador antes le pidio a la Parca que hiciera sufrir al emperador hasta que este perezca. La parca que ya habia escuchado sobre los dotes del ruiseñor, le pidio que cantara su requiem y que cuando este terminara el emperador moriria.";
  notas [10] ="El ruiseñor canto y se regocijo durante sus cantos, viendo como el emperador sufria lentamente, viendo como cada movimiento del emperador lo hacia sufrir cada vez mas. Cuando el ruiseñor se queda satisfecho paro.";
  notas [11] ="El emperador que solo podia sufrir en silencio y aceptar su final solo una ultima lagrima antes de terminar de su requiem.";
  notas [12] = "El Ruiseñor"
  notas [13] = "Imagenes: Iván Saldaña y Bing Creator (IA) \nGuion: Iván Saldaña y ChatGPT (IA) \nAutor: Hans Christian Andersen ";
  notas [14] = "Cantaste tan mal que la Parca en vez de acabar con el emperador acabo contigo...";
}
function setup() {
  let canvas = createCanvas( tamX, tamY );
  canvas.position(windowWidth/2-width/2, windowHeight/2-height/2);
  objAventura = new Aventura (pantallas, notas);
}


function draw() {
  background (0);
  objAventura.dibujar ();
}

function mouseClicked () {
  objAventura.mouseApretado ()
}
