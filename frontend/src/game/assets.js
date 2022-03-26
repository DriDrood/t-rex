function loadAsset(path) {
  let image = new Image();
  image.onload = () => {};
  image.src = `assets/game/${path}.png`;
  return image;
}

export let assets = {
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