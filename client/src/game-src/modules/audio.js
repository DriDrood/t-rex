export default class AudioPlayer {
  constructor() {
    this.audios = {}
  }
  add(audio) {
    this.audios[audio.name] = audio;
  }
  play(audioName) {
    this.audios[audioName].play();
  }
}