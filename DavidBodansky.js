let DavidBodansky = function(x, y, mass) {
  this.x = x
  this.y = y
  this.mass = mass
}

//players is an array of all Player objects INCLUDING the player
//pellets is an array of all the Pellets in the game
DavidBodansky.prototype.update = function(players, pellets, viruses) {

  //angle is between 0 and 2pi
  //speed is between 0 and 1
  //you naturally get slower the larger your cell gets!

  //if player mass < this.mass
  //go towards player
  if (players.length > 0) {
    //get the angle to player 1
    let ang = Math.atan2(players[0].y - this.y, players[0].x - this.x)
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/atan2

    if (players[0].mass < this.mass) {
      return { angle: ang, speed: 1 }
    }

  }

  if (pellets.length > 0) {
    let pellet = pellets[0]

    let xDist = Math.abs(pellet.x - this.x)
    let yDist = Math.abs(pellet.y - this.y)

    let rad = agario.objectRadius(this)

    let xLinedUp = pellet.x < this.x + rad && pellet.x > this.x - rad
    let yLinedUp = pellet.y < this.y + rad && pellet.y > this.y - rad

    if (xLinedUp) {
      if (pellet.y < this.y) {
        return { angle: 3 * Math.PI / 2, speed: 1 }
      }
      else {
        return { angle: Math.PI / 2, speed: 1 }
      }
    }
    else if (yLinedUp) {
      if (pellet.x < this.x) {
        return { angle: Math.PI, speed: 1 }
      }
      else if (pellet.x > this.x) {
        return { angle: 0, speed: 1 }
      }
    }

    if (xDist < yDist) {
      if (pellet.x < this.x) {
        return { angle: Math.PI, speed: 1 }
      }
      else if (pellet.x > this.x) {
        return { angle: 0, speed: 1 }
      }
    }
    else {
      if (pellet.y < this.y) {
        return { angle: 3 * Math.PI / 2, speed: 1 }
      }
      else {
        return { angle: Math.PI / 2, speed: 1 }
      }
    }
  }

  return { angle: 0, speed: 1 }
}

