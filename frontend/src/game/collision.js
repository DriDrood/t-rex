function detect(obstacle, trex) {
  let tX = trex.position.x;
  let tY = trex.position.y;

  let oX = obstacle.position.x;
  let oY = obstacle.position.y;

  if (obstacle.name == 'cactus') {
    if (tX < oX + obstacle.width &&
      tX + trex.width > oX &&
      tY < oY + obstacle.height &&
      trex.height + tY > oY) {
      // collision detected!
      console.log("Collision!")
      trex.state = "dead";
      return true
    } else return false
  }
}

export default {
  detect
}