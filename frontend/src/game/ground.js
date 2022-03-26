import { assets } from "./assets.js"
import { mainRender } from "./mainRender.js";
export class Ground {
  x = 0;
  update() {

  }
  render() {
    mainRender.render(assets.ground, this.x, 20)
  }
}