let canvas, context;
let painting = false;

window.onload = () => {
  canvas = document.querySelector("#canvas");
  context = canvas.getContext("2d");
  canvas.onmousedown = () => startPosition();
  canvas.onmouseup = () => endPosition();
  canvas.onmousemove = (e) => draw(e);
  resize();
};

window.onresize = () => {
  resize();
};

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function startPosition() {
  painting = true;
}
function endPosition() {
  painting = false;
}
function draw(e) {
  if (!painting) return;
  context.lineWidth = 10;
  context.lineCap = "round";
  context.lineJoin = "round";
  context.strokeStyle = "black";
  context.beginPath();
  context.moveTo(e.offsetX, e.offsetY);
  context.lineTo(e.offsetX, e.offsetY);
  context.stroke();
}
