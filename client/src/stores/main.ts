import { defineStore } from 'pinia'

type State = {
  counter: number
}

export const useMainStore = defineStore('main', {
  state: () => ({
    counter: 0
  } as State),
  actions: {
    plusCounter ():void {this.counter++}
  }
})
