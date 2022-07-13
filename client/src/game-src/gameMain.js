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

function start() {
  let players = store.state.players.map(player => player.nickname); // Load players from store
  console.log(`Players: ${players}`);

  // Variables for game objects 
  let trexes = [];
  let nicknames = [];
  let scoreText = new Score(450, 135);

  for (let i = 0; i < players.length; i++) { // For each player create new trex (and nickname) next to the previous one
    let space = 80; // Make smaller in production
    let playersTrex = new Trex(10 + i * space, 20, players[i]);
    trexes.push(playersTrex);
    nicknames.push(new Nickname(playersTrex));
  }

  let objects = [
    ...trexes,
    ...nicknames,
    scoreText
  ];

  objects.forEach(object => object.update()); // Update all objects

  render.renderAll(objects);

  trexes[3].position.y = 40;
  scoreText.text = `Distance: 5000`;

  render.renderAll(objects);
}

function mainLoop() {
  
}

export default {
  mountDiv: (divId) => {render.mount(divId)},
  start
} 