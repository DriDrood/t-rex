import ImageGameObject from '../templates/imageObject.js'

export default class Trex extends ImageGameObject {
  constructor(x, y, player) {
    super({x, y}, '/assets/game/trex/run/run_0.png');
    this.player = player;
  }
}