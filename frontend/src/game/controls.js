function mount(object) {
  addEventListener('keydown', ({key}) => {
    if (key == 'ArrowUp' || key == 'w') {
      //console.log('UP');
      if (object.position.y <= 20) {
        object.setVelocity('y',9.5);
      }

    } else if (key == 'ArrowDown' || key == 's') {
      //console.log('DOWN');
      object.setVelocity('y',-10);
      if (object.position.y < 21) {
        object.duck = true;
      }

    } else if (key == 'ArrowLeft' || key == 'a') {
      //console.log('LEFT');
      object.setVelocity('x', -5);

    } else if (key == 'ArrowRight' || key == 'd') {
      //console.log('RIGHT');
      object.setVelocity('x', 5);
    }
  })

  addEventListener('keyup', ({key}) => {
    if (key == 'ArrowLeft' || key == 'a' || key == 'ArrowRight' || key == 'd') {
      object.setVelocity('x', 0);
    } else if (key == 'ArrowDown' || key == 's') {
      object.setVelocity('y', 0);
    }
  })
}

export default {
  mount
}