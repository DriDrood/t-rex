import ImageGameObject from '../templates/imageObject.js'

export default class Trex extends ImageGameObject {
  constructor(x, y, player, isUser=false) {
    super();
    this.state = '';
    this.isUser = isUser;
    this.render.properties.div.style = isUser ? 'opacity: 1;' : 'opacity: 0.5;';
    this.imgSrc = '/assets/game/trex/still.png';
    this.position = {x: x, y: y};
    this.player = player;
  }
  renderUpdate() {
    switch(this.state) {
      default:
        this.imgSrc = '/assets/game/trex/still.png';
        break;
      case 'still':
        this.imgSrc = '/assets/game/trex/still.png';
        break;
      case 'run':
        this.imgSrc = '/assets/game/trex/run.gif';
        break;
      case 'crouch':
        this.imgSrc = '/assets/game/trex/crouch.gif';
        break;
      case 'jump':
        this.imgSrc = '/assets/game/trex/jump.png';
        break;
    }
    super.renderUpdate();
  }
}