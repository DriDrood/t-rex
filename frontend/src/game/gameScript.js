import { assets } from './assets.js'
import { mainRender } from './mainRender.js'
import { Cactus } from './cactus.js'
import { cactusTypes } from './cactus.js'
import { Trex } from './trex.js'
import { Bird } from './bird.js'
import { Ground } from './ground.js'
import { Cloud } from './cloud.js'
import controls from './controls.js'
import backendController from './backendController.js'
import collision from './collision.js'

let trex = new Trex; // Create new trex object
let ground = new Ground; // Create new ground object

let cloudGroup = [ // Create array of cloud objects
  new Cloud(),
  new Cloud(),
  new Cloud(),
]

let cactusGroup = [ // Create array of cactus objects
  new Cactus(cactusTypes.big0, 200, 20),
  new Cactus(cactusTypes.small2, 400, 22),
];

let birdGroup = [ // Create array of bird objects
  //new Bird(0),
  new Bird(1),
  //new Bird(2)
]

let speed = 2;

let run = true;

export let game = {
  run(c) {
    controls.mount(trex); // Mount keyboard controls to client trex object

    trexList.forEach(trex => {
      backendController.mount(trex); // Mount backend controllers to trex objects
    })

    mainRender.setCanvas(c); // Mount game canvas as the one we are rendering at

    function mainUpdate() { // Main game loop
      if (run) {
        requestAnimationFrame(mainUpdate); // recalling the function to create loop
      }
      c.clearRect(0,0, 600, 150); // Clear canvas

      // ------- Updatating ----------

      cactusGroup.forEach(cactus => { // Updating cactus positions
        cactus.update();
      })

      cloudGroup.forEach(cloud => { // Updating cloud positions
        cloud.update();
      })

      birdGroup.forEach(bird => { // Updating bird positions
        bird.update();
      })

      ground.update();  // Updating ground position

      trex.update(); // Updating trex postion, data etc. (Client side)

      trexList.forEach(trex => { // Updating trex postion, data etc. (Server side)
        trex.update();
      })

      // ------- Rendering ----------

      ground.render();

      cloudGroup.forEach(cloud => {
        cloud.render()
      })

      cactusGroup.forEach(cactus => { // Rendering all cactuses
        cactus.render();
      });

      birdGroup.forEach(bird => {
        bird.render();
      })

      trex.render(); // Rendering trex (Client local)

      trexList.forEach(trex => { // Rendering trex (Server controlled)
        trex.render();
      })

      // ------- Collisions ----------

      cactusGroup.forEach(cactus => { // Checking if there is collison between trex and any of cactuses
        if (collision.detect(cactus, trex)) {
          run = false;
        }
      })

      birdGroup.forEach(bird => { // Checking if there is collison between trex and any of birds
        if (collision.detect(bird, trex)) {
          run = false;
          mainRender.render(assets.game_over)
        }
      })
    }
    
    mainUpdate();
  }
}