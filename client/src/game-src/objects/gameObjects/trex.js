import ImageGameObject from '../templates/imageObject.js'

export default class Trex extends ImageGameObject {
  constructor(x, y, player) {
    super();
    this.imgSrc = '/assets/game/trex/run/run_0.png';
    this.position = {x: x, y: y};
    this.player = player;
  }
}