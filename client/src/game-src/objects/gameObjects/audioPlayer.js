import AudioPlayer from '../../modules/audio.js'
import GameAudio from '../templates/gameAudio.js';

let audioPlayer = new AudioPlayer()
audioPlayer.add(new GameAudio("dead", "/assets/game/audio/dead.wav"));

export default audioPlayer;