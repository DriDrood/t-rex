import TextGameObject from "../templates/textObject.js";

export default class Nickname extends TextGameObject {
  constructor(trex) {
    super();
    this.text = trex.player;
    this.parentId = trex.id;
    this.position = {x: 0, y: 50}
  }
}