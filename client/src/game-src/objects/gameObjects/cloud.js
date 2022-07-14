import ImageGameObject from '../templates/imageObject.js'

export default class Bird extends ImageGameObject {
  constructor(x, y) {
    super();
    this.imgSrc = '/assets/game/cloud.png';
    this.position = {x, y};
  }
}