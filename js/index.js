var audio = new Audio("sound.mp3");
var audio2 = new Audio("sound2.mp3");
var disc = document.getElementById("circle");
var starter = document.getElementById("timer");
var button = document.getElementById("btn");
var score = document.getElementById("score");
var instructions = document.getElementById("instructions");
var countdown = document.getElementById("countdown");
var finish = document.getElementById("over");
var retry = document.getElementById("try");

button.onclick = function () {
  start();
};
function start() {
  audio2.play();

  var myVar = setInterval(myTimer, 10);
  var time = 30;
  function myTimer() {
    if (time > 0) {
      time = time - 0.01;
    }
    if (time < 0) {
      disc.style.display = "none";
      finish.innerHTML = `Congratulations! Your score was ${count}.`;
      starter.style.display = "none";
      score.style.display = "none";
      retry.style.display = "block";
    }
    var n = time.toPrecision(3);
    document.getElementById("timer").innerHTML = `${n}s`;
  }
  instructions.style.display = "none";
  disc.style.display = "block";
  starter.style.display = "block";
  button.style.display = "none";
  var myColors = ["red", "blue", "green", "yellow", "maroon", "pink"];
  var selectedcolor = myColors[Math.floor(Math.random() * myColors.length)];
  disc.style.backgroundColor = selectedcolor;
  score.style.display = "block";
  score.innerHTML = `Score: 0`;
}

disc.onclick = function () {
  spawn();
};
var count = 0;
function spawn() {
  audio.play();
  count++;
  disc.display = "block";
  var myColors = ["red", "blue", "green", "yellow", "maroon", "pink"];
  var selectedcolor = myColors[Math.floor(Math.random() * myColors.length)];
  disc.style.backgroundColor = selectedcolor;
  var size = Math.floor(Math.random() * 50) + 40;
  var widtho = window.innerWidth - size;
  var heighto = window.innerHeight - size;
  disc.style.width = `${size}px`;
  disc.style.height = `${size}px`;
  disc.style.borderRadius = `${size}px`;
  var posx = Math.floor(Math.random() * widtho);
  disc.style.left = `${posx}px`;
  var posy = Math.floor(Math.random() * heighto);
  disc.style.top = `${posy}px`;
  score.innerHTML = `Score: ${count}`;
}
