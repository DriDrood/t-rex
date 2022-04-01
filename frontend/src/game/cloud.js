import { assets } from './assets.js'
import { mainRender } from './mainRender.js'
export class Cloud {
  name = "cloud"
  width = 46;
  height = 13;
  position = {
    x: 600,
    y: Math.floor(Math.random() * (135 - 40 + 1)) + 40
  };
  velocity = {
    x: -(Math.random() * (1.5 - 0.5) + 0.5),
    y: 0
  }
  update() {
    this.position.x += this.velocity.x;
  }
  render() {
    mainRender.render(assets.cloud, this.position.x, this.position.y);
  }
}