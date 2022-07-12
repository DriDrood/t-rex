import TextGameObject from "../templates/textObject.js";

export default class Nickname extends TextGameObject {
  constructor(trex) {
    super({ x: 0, y: 50}, trex.player, trex.id);
  }
}