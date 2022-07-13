import TextGameObject from '../templates/textObject.js';

export default class Score extends TextGameObject {
  constructor(x, y) {
    super();
    this.score = '';
    this.position = {x: x, y: y};
  }
}