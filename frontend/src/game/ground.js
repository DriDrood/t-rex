import { assets } from "./assets.js"
import { mainRender } from "./mainRender.js";
import { data } from "./data.js";
export class Ground {
  x = 0;
  update() {
    if(this.x == -1200) {
      this.x = 0;
    }
    this.x -= data.speed;
  }
  render() {
    mainRender.render(assets.ground, this.x, 20);
    mainRender.render(assets.ground, this.x + 1200, 20);
  }
}