import ImageGameObject from '../templates/imageObject.js'

export default class Ground extends ImageGameObject {
  constructor(x, y) {
    super();
    this.imgSrc = '/assets/game/ground.png';
    this.position = {x, y};
  }
}