import GameObject from "./gameObject";
import { RenderModule } from '../../modules/render.js'
export default class TextGameObject extends GameObject {
  constructor() {
    super();
    this.render = new RenderModule('p');
    this.text = '';
  }
  renderUpdate() {
    this.render.properties.el.innerHTML = this.text;
  }
}