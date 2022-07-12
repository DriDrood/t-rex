import TextGameObject from '../templates/textObject.js';

export default class Score extends TextGameObject {
  constructor(position, score) {
    super(position, score);
    this.score = score;
  }
}