function detect(obstacle, trex) {
  let tSX = trex.position.x + trex.width / 2;
  let tSY = trex.position.y + trex.height / 2;

  let oSX = obstacle.position.x + obstacle.width / 2;
  let oSY = obstacle.position.y + obstacle.height / 2;

  let obsDist = Math.sqrt((tSX-oSX)**2+(tSY-oSY)**2) + 3

  if (obstacle.name == 'cactus') {
    if (obsDist <= (obstacle.height + trex.height) / 2) {
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