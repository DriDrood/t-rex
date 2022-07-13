import { getuuid } from '../../utils.js'
export default class GameObject {
  constructor() {
    this.id = getuuid();
  }
  position = {x: 0, y: 0};
  parentId = null;
  update() {};
}