export default class GameAudio {
  constructor(name, src, type="audio/wav") {
    this.name = name;

    let srcEl = document.createElement("source");
    srcEl.type = type;
    srcEl.src = src;

    this.audio = new Audio();
    this.audio.appendChild(srcEl);
  }
  play() {
    this.audio.play();
  }
}