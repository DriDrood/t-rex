function detect(obstacle, trex) {
  let tSX = trex.position.x + trex.width / 2;
  let tSY = trex.position.y + trex.height / 2;

  let oSX = obstacle.position.x + obstacle.width / 2;
  let oSY = obstacle.position.y + obstacle.height / 2;

  let obsDist = Math.sqrt((tSX - oSX) ** 2 +(tSY - oSY) ** 2) + 7
  
  if (obstacle.name == 'cactus') {
    if ((tSX - oSX) ** 2 / ((obstacle.width + trex.width - 10) / 2) ** 2 + (tSY - oSY) ** 2 / ((obstacle.height + trex.height - 10) / 2) ** 2 <= 1) {
      // collision detected with cactus!
      console.log("Collision with cactus!")
      trex.state = "dead";
      return true
    } else return false
  }
  if (obstacle.name == 'bird') {
    if ((oSX - tSX) ** 2 / ((obstacle.width + trex.width - 15) / 2) ** 2 + (oSY - tSY) ** 2 / ((obstacle.height + trex.height - 10) / 2) ** 2 <= 1) {
      // collision detected with bird!
      console.log("Collision with bird!")
      trex.state = "dead";
      return true
    } else return false
  }
}

export default {  
  detect
}