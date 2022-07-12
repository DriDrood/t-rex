import GameObject from "./gameObject";

export default class TextGameObject extends GameObject {
  constructor(position, text, childOf=null) {
    super({
      el: 'p',
      properties: {
        innerHTML: text
      },
      },
      childOf
    );
    this.position = position;
  }
}