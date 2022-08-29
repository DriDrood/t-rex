// FE modules
import signalR from '@/signalR.js'
import store from '@/store/index.js'

// Game engine modules
import render from './modules/render.js'
import input from './modules/input.js'

// Game objects
import Trex from './objects/gameObjects/trex.js'
import Nickname from './objects/gameObjects/nickname.js'
import Cactus from './objects/gameObjects/cactus.js'
import Score from './objects/gameObjects/score.js'
import Bird from './objects/gameObjects/bird.js'
import Ground from './objects/gameObjects/ground.js'
import Cloud from './objects/gameObjects/cloud.js'
import GameOver from './objects/gameObjects/gameOver.js'

function tick(payload) {
  
}

function start() {
  input.init();
  signalR.on('tick', tick(payload));
}

export default {
  mountDiv: (divId) => {render.mount(divId)},
  start
} 