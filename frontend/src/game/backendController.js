import Store from '../store/index'

function mount(object) {
  Store.commit('beOn', { method: 'directionDown', action: (direction) => {
    if (direction == 'up') {
      //console.log('UP');
      if (object.position.y <= 20) {
        object.setVelocity('y',9.5);
      }

    } else if (direction == 'down') {
      //console.log('DOWN');
      object.setVelocity('y',-10);
      if (object.position.y < 21) {
        object.duck = true;
      }

    } else if (direction == 'left') {
      //console.log('LEFT');
      object.setVelocity('x', -5);

    } else if (direction == 'right') {
      //console.log('RIGHT');
      object.setVelocity('x', 5);
    }
  }})

  Store.commit('beOn', { method: 'keyUp', action: (direction) => {
    if (direction == 'left' || direction == 'right') {
      object.setVelocity('x', 0);
    } else if (direction == 'down') {
      object.setVelocity('y', 0);
    }
  }});
}

export default {
  mount
}