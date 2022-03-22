let game = {
  data: {

  },
  run(c) {
    c.moveTo(0, 0);
    c.lineTo(200, 100);
    c.stroke();
    c.font = "30px Arial";
    c.fillText("Hello World", 10, 50);
  }
}

export default {
  game
}