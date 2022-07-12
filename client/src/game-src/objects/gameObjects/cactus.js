import ImageGameObject from '../templates/imageObject.js'

export default class Cactus extends ImageGameObject {
  constructor(x, y, size, tier) {
    super({x, y}, `/assets/game/cactus/${size}_${tier}.png`)
    this.size = size;
    this.tier = tier;
  }
}