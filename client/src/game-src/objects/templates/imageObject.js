import GameObject from "./gameObject";
import { RenderModule } from '../../modules/render.js'
export default class ImageGameObject extends GameObject {
  constructor() {
    super();
    this.render = new RenderModule('img');
    this.imgSrc = '';
  }
  renderUpdate() {
    this.render.properties.el.src = this.imgSrc;
  }
}