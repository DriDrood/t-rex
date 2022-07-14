import ImageGameObject from '../templates/imageObject.js'

export default class GameOver extends ImageGameObject {
  constructor(x, y) {
    super();
    this.imgSrc = '/assets/game/game_over.png';
    this.position = {x, y};
  }
}