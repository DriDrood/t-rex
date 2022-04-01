import { assets } from './assets.js'
import { mainRender } from './mainRender.js'
import { data } from './data.js';

export class Cactus {
  name = "cactus";
  constructor(cactusType, x, y) {
    this.size = cactusType.size;
    this.tier = cactusType.tier;
    this.width = cactusType.width;
    this.height = cactusType.height;
    this.position = {
      x: x,
      y: y
    }
  }
  update() {
    this.position.x -= data.speed;
  }
  render() { // Function for rendering cactus on specified canvas (c)
    mainRender.render(assets.cactus[this.size + this.tier], this.position.x, this.position.y)
  }
}

class CactusType {
  constructor(size, tier, width, height) {
    this.size = size;
    this.tier = tier;
    this.width = width;
    this.height = height;
  }
}

export const cactusTypes = {
  small0: new CactusType("small", 0, 17, 35),
  small1: new CactusType("small", 1, 34, 35),
  small2: new CactusType("small", 2, 51, 35),
  big0: new CactusType("big", 0, 25, 50),
  big1: new CactusType("big", 1, 50, 50),
  big2: new CactusType("big", 2, 75, 50),
}