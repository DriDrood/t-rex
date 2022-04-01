import { assets } from './assets.js'
import { mainRender } from './mainRender.js'
import { Anim } from './animation.js';

export class Bird {
  name = "bird"
  constructor(level) {
    this.level = level;
    switch(level) {
      case 0:
        this.position.y = 20;
        break
      case 1:
        this.position.y = 50;
        break
      case 2:
        this.position.y = 80;
        break
    }
  }
  width = 46;
  height = 40;
  animations = {
    flyAnim: new Anim(15, [assets.bird0, assets.bird1])
  };
  position = {
    x: 500,
    y: 50
  };
  velocity = {
    x: -(Math.random() * (2.5 - 1) + 1),
    y: 0
  }
  update() {
    this.position.x += this.velocity.x;
  }
  render() {
    mainRender.render(this.animations.flyAnim.getFrame(), this.position.x, this.position.y);
  }
}