import signalR from '@/signalR.js'
export default {
  pressedKeys: [], // Array of currently pressed keys
  init() {
    document.onkeydown = ({key}) => { // When key is pressed add it to array
      this.pressedKeys.push(key);
      console.log(key);
      this.send();
    }
    document.onkeyup = ({key}) => { // When key is released remove it from array
      this.pressedKeys.splice(this.pressedKeys.indexOf(key), 1);
      this.send();
    }
  },
  send() {
    let pressedArrows = {
      up: this.pressedKeys.includes('ArrowUp'),
      down: this.pressedKeys.includes('ArrowDown'),
      left: this.pressedKeys.includes('ArrowLeft'),
      right: this.pressedKeys.includes('ArrowRight')
    }
    signalR.invoke('KeyPressed', pressedArrows);
  }
}