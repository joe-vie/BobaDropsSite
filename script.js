var header = $("h1");
var button = $("button");
var words = $(".feliz-cumple");

var x = document.getElementById("myAudio");


button.on("click", felizCumple);

function felizCumple() {
  header.text("¡Feliz Cumpleaños Marce!");
  header.css("margin-top", "50px");
  button.css("margin-top", "-900px");
  words.append(`<p>Gracias por ser el mejor hermano del mundo. Has hecho un monton para mi y soy muy agradecida por tener un hermano que siempre me ha cuidado. ¡Te deseo el mejor cumpleaños y que tengas un buen tiempo en tu camino de ser 35!</p>`);
  words.append(`<img src = "cake.png">`);
}

function playAudio() {
   x.play();
}
