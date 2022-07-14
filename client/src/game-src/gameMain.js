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

function start() {
  let players = store.state.players.map(player => player.nickname); // Load players from store
  let userNickname = store.state.user.nickname;
  console.log(`Players: ${players}`);

  // Variables for game objects 
  let trexes = [];
  let nicknames = [];
  let cactuses = [
    new Cactus(550, 20, 'small', 0)
  ];
  let scoreText = new Score(450, 135);
  scoreText.prefix = 'Score: ';
  scoreText.score = 5000;
  let bird = new Bird(10, 100);
  let ground = new Ground(0, 20);
  let cloud = new Cloud(300, 100);
  let gameOver = new GameOver(204, 130);

  for (let i = 0; i < players.length; i++) { // For each player create new trex (and nickname) next to the previous one
    let space = 100; // Make smaller in production
    let playersTrex = new Trex(10 + i * space, 20, players[i], players[i] == userNickname);
    trexes.push(playersTrex);
    nicknames.push(new Nickname(playersTrex));
  }

  let objects = [
    ...trexes,
    ...nicknames,
    ...cactuses,
    scoreText,
    bird,
    ground,
    cloud,
    gameOver,
  ];

  objects.forEach(object => object.update()); // Update all objects

  render.renderAll(objects);

  trexes[3].position.y = 40;
  trexes[3].state = 'run';
  trexes[2].state = 'crouch';

  render.renderAll(objects);
}

function mainLoop() {
  
}

export default {
  mountDiv: (divId) => {render.mount(divId)},
  start
} 