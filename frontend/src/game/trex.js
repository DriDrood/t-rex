import { assets } from './assets.js'
import { mainRender } from './mainRender.js'
import { Anim } from './animation.js';

const gravity = 0.6;

export class Trex {
  name = "trex";
  state = "running";
  onGround = false;
  width = 44;
  height = 47;
  animations = {
    runAnim: new Anim(6, [assets.trex.run0, assets.trex.run1]),
    duckAnim: new Anim(6, [assets.trex.duck0, assets.trex.duck1]),
  }
  position = {
    x: 20,
    y: 100
  };
  velocity = {
    x: 0,
    y: 0
  };
  fixPosition() {
    if (this.position.y < 20) {
      this.position.y = 20;
    }
    if (this.position.x >= 560) {
      this.position.x = 559;
    } else if (this.position.x <= 0) {
      this.position.x = 1;
    }
  }
  setVelocity(axis, newVelocity) {
    if (axis == 'y') {
      this.velocity.y = newVelocity;
    } else {
      this.velocity.x = newVelocity;
    }
  }
  update() {

    //console.log(this.velocity.y + " " + this.onGround)

    // Update variables

    if (!this.onGround && this.position.y == 20) {
      this.velocity.y = 0;
    }

    if (this.position.y == 20) {
      this.onGround = true;
    } else {
      this.onGround = false;
    }

    // First, update position

    if (!this.onGround) {
      this.velocity.y -= gravity;
    }

    if (this.position.y >= 20 || this.velocity.y > 0) {
      this.position.y += this.velocity.y;
    }

    if (this.position.x > 0 && this.position.x < 560) {
      this.position.x += this.velocity.x;
    }

    // Second, fix the position if out of bound

    this.fixPosition()

    // Third, set state

    if (this.state != "dead") {
      if (this.onGround && this.velocity.y < 0) {
        this.state = "duck";
      } else if (this.position.y > 20) {
        this.state = "jump";
      } else {
        this.state = "running";
      }
    }

    // Update dimensions depending on state

    if (this.state == "jump" || this.state == "running") {
      this.width = 44;
      this.height = 47;
    } else {
      this.width = 59;
      this.height = 30;
    }

  }
  render() {
    let image = null;
    if (this.state == "running") {
      image = this.animations.runAnim.getFrame()
    } else if (this.state == "jump") {
      image = assets.trex.jump;
    } else if (this.state == 'duck') {
      image = this.animations.duckAnim.getFrame();
    } else if (this.state == "dead") {
      image = assets.trex.dead;
    }
    mainRender.render(image, this.position.x, this.position.y);
  }
}