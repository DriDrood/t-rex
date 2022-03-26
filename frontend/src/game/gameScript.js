import { mainRender } from './mainRender.js'
import { Cactus } from './cactus.js'
import { cactusTypes } from './cactus.js'
import { Trex } from './trex.js'
import { Ground } from './ground.js'
import controls from './controls.js'
import collision from './collision.js'

let trex = new Trex; // Create new trex object
let ground = new Ground; // Create new ground object
let cactusGroup = [ // Create array of cactus objects
  new Cactus(cactusTypes.big1, 200, 18),
  new Cactus(cactusTypes.small2, 400, 18),
];
let speed = 2;

let run = true;

let game = {
  run(c) {
    controls.mount(trex); // Mount keyboard controls to our trex object
    mainRender.setCanvas(c); // Mount game canvas as the one we are rendering at

    function mainUpdate() { // Main game loop
      if (run) {
        requestAnimationFrame(mainUpdate); // recalling the function to create loop
      }
      c.clearRect(0,0, 600, 150); // Clear canvas

      // ------- Updatating ----------

      ground.update();
      trex.update(); // Updating trex postion, data etc.

      // ------- Rendering ----------

      ground.render(c);

      cactusGroup.forEach(cactus => { // Rendering all cactuses
        cactus.render(c);
      });

      trex.render(c); // Rendering trex

      // ------- Collisions ----------

      cactusGroup.forEach(cactus => { // Checking if there is collison between trex and any of cactuses
        if (collision.detect(cactus, trex)) {
          run = false;
        }
      })
    }
    
    mainUpdate();
  }
}

export default {
  game
}