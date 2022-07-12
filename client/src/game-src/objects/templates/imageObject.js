import GameObject from "./gameObject";

export default class ImageGameObject extends GameObject {
  constructor(position, imagePath, childOf=null) {
    super({
      el: 'img',
      properties: {
        src: imagePath
      },
      },
      childOf
    );
    this.position = position;
  }
}