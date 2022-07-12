// FE modules
import signalR from '../signalR.js'
import store from '@/store/index.js'

// Game engine modules
import render from './modules/render.js'
import input from './modules/input.js'

// Game objects
import Trex from './objects/gameObjects/trex.js'
import Nickname from './objects/gameObjects/nickname.js'
import Cactus from './objects/gameObjects/cactus.js'
import Score from './objects/gameObjects/score.js'

function start() {
  let players = store.state.players.map(player => player.nickname);
  console.log('players: ' + players)

  let trexes = []
  let nicknames = []
  let scoreText = new Score({x: 510, y: 130}, 0)

  for (let i = 0; i < players.length; i++) {
    let playersTrex = new Trex(10 + i * 80, 20, players[i])
    trexes.push(playersTrex)
    nicknames.push(new Nickname(playersTrex))
  }

  let objects = [
    ...trexes,
    ...nicknames,
    scoreText
  ];

  render.renderAll(objects)

  trexes[3].position.y = 40
  scoreText.text = `Distance: 5000`

  render.renderAll(objects)
}

function mainLoop() {
  
}

export default {
  addTexturesFolder: (path) => {render.addTexturesFolder(path)},
  mountDiv: (divId) => {render.mount(divId)},
  start
} 