function loadAsset(path) {
  let image = new Image();
  image.onload = () => {};
  image.src = `assets/game/${path}.png`;
  return image;
}

let assets = {
  rst_button: loadAsset("rst_button"),
  game_over: loadAsset("game_over"),
  ground: loadAsset("ground"),
  cloud: loadAsset("cloud"),

  star0: loadAsset("star0"),
  star1: loadAsset("star1"),
  star2: loadAsset("star2"),

  bird0: loadAsset("bird0"),
  bird1: loadAsset("bird1"),

  cactus: {
    big0: loadAsset("cactus/big_0"),
    big1: loadAsset("cactus/big_1"),
    big2: loadAsset("cactus/big_2"),

    small0: loadAsset("cactus/small_0"),
    small1: loadAsset("cactus/small_1"),
    small2: loadAsset("cactus/small_2"),
  },

  trex: {
    frozen: loadAsset("trex/frozen"),
    dead: loadAsset("trex/dead"),
    jump: loadAsset("trex/jump"),

    run0: loadAsset("trex/run/run_0"),
    run1: loadAsset("trex/run/run_1"),

    duck0: loadAsset("trex/duck/duck_0"),
    duck1: loadAsset("trex/duck/duck_1"),
  },
}

class Trex {
  constructor() {
    this.data = {
      state: "running",
      frame: 0,
      position: {
        x: 0,
        y: 0
      },
      velocity: {
        x: 0,
        y: 0
      },
    }
  }
  render(c) {
    let image = ""
    if(this.state == "running") {
      image = assets.trex.run0;
    }
    c.drawImage(image, this.position.x, this.position.y);
  }
}

class Cactus {
  constructor(size, tier, x, y) {
    this.size = size;
    this.tier = tier;
    this.position = {
      x: x, 
      y: y - this.size.yOffset
    }
  }
  render(c) { // Function for rendering cactus on specified canvas (c)
    c.drawImage(assets.cactus[this.size.name + this.tier], this.position.x, this.position.y); // 1. Asset to use as texture 2. X position 3. Y position
  }
}

class CactusSize {
  constructor(name, yOffset) {
    this.name = name;
    this.yOffset = yOffset;
  }
}
const cactusSizes = {
  big: new CactusSize("big", 49),
  small: new CactusSize("small", 34),
};

let game = {
  data: {
  },
  run(c) {
    let cactusGroup = [
      new Cactus(cactusSizes.big, 0, 50, 80),
      new Cactus(cactusSizes.big, 1, 100, 80),
      new Cactus(cactusSizes.big, 2, 200, 80),
      new Cactus(cactusSizes.small, 0, 300, 80),
      new Cactus(cactusSizes.small, 1, 400, 80),
      new Cactus(cactusSizes.small, 2, 500, 80)
    ];

    let trex = new Trex

    function mainUpdate() {
      requestAnimationFrame(mainUpdate);
      c.clearRect(0,0, c.width, c.height);

      cactusGroup.forEach(cactus => {
        cactus.render(c);
      });

      // trex.render(c);
    }

    mainUpdate()
  }
}

export default {
  game
}