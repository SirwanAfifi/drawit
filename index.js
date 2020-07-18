let cx = document.querySelector("canvas").getContext("2d");

cx.strokeStyle = "dodgerblue";
cx.strokeRect(0, 0, 500, 50);
cx.lineWidth = 1;
cx.strokeRect(135, 0, 50, 50);

cx.fillStyle = "tomato";
cx.fillRect(0, 0, 100, 50);

drawLine(10, 1000, 10);
drawLine(10, 1000, 1000);

function drawLine(from, to, column) {
  cx.beginPath();
  for (let y = from; y < to; y += 10) {
    cx.moveTo(column, y);
    cx.lineTo(90, y);
  }
  cx.stroke();
}
