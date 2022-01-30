export default {
  play(sound) {
    var buttonSound = new Audio("/sounds/buttonPress.mp3");
    var deadSound = new Audio("/sounds/dead.mp3");
    var jumpSound = new Audio("/sounds/jump.mp3");
    var milestoneSound = new Audio("/sounds/milestone.mp3");
    if(sound == "button") {
      buttonSound.play();
    } else if(sound == "dead") {
      deadSound.play();
    } else if(sound == "jump") {
      jumpSound.play();
    } else if(sound == "milestone") {
      milestoneSound.play();
    }
  }
}