import ImageGameObject from '../templates/imageObject.js'

export default class Cactus extends ImageGameObject {
  constructor(x, y, size, tier) {
    super();
    this.imgSrc = `/assets/game/cactus/${size}_${tier}.png`;
    this.position = {x, y};
    this.size = size;
    this.tier = tier;
  }
}