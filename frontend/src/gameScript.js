function loadAsset(path) {
  console.log("Loading: " + path);
  let assetsFolderPath = "assets/game/"
  let image = new Image();
  image.onload = function() {
    console.log(path + " loaded");
  }
  image.src = assetsFolderPath + path + ".png";
  return image
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
  constructor(cactustype, position) {
    this.cactustype = cactustype // Object example: {size: big, tier: 1} - cactus_big_1
    if(cactustype.size == "big") {
      this.yOffset = 49;
    } else {
      this.yOffset = 34;
    }
    this.position = {
      x: position.x, 
      y: position.y - this.yOffset
    }
  }
  render(c) { // Function for rendering cactus on specified canvas (c)
    c.drawImage(assets.cactus[this.cactustype.size + this.cactustype.tier], this.position.x, this.position.y); // 1. Asset to use as texture 2. X position 3. Y position
  }
}

let game = {
  data: {
  },
  run(c) {
    let cactusGroup = [
      new Cactus({size: "big", tier: 0}, {x: 50, y: 80}),
      new Cactus({size: "big", tier: 1}, {x: 100, y: 80}),
      new Cactus({size: "big", tier: 2}, {x: 200, y: 80}),
      new Cactus({size: "small", tier: 0}, {x: 300, y: 80}),
      new Cactus({size: "small", tier: 1}, {x: 400, y: 80}),
      new Cactus({size: "small", tier: 2}, {x: 500, y: 80})
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