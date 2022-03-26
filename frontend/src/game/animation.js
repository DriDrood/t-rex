export class Anim {
  constructor(delay, textures) { // INT, INT, ARRAY
    this.frames = textures.length;
    this.delay = delay;
    this.textures = textures;
  }
  frame = 0;
  time = 0;
  getFrame() {
    if (this.time >= this.delay) {
      this.time = 0;
      if (this.frame == this.frames - 1) {
        this.frame = 0;
      } else {
        this.frame += 1;
      }
    }
    this.time += 1;
    return this.textures[this.frame];
  }
}