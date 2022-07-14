import TextGameObject from '../templates/textObject.js';

export default class Score extends TextGameObject {
  constructor(x, y) {
    super();
    this.prefix = 'Distance:';
    this.score = 0;
    this.position = {x: x, y: y};
  }
  renderUpdate() {
    this.text = `${this.prefix}${this.score}`
    super.renderUpdate();
  }
}