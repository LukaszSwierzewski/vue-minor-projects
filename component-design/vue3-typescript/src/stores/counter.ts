import { defineStore } from 'pinia'
import type { useCounterState } from '@/types/Counter.type'
export const useExampleCounterStore = defineStore({
  id: 'counter',
  state: (): useCounterState => ({
    counter: 0
  }),
  getters: {
  },
  actions: {
     icrementCounter() {
      this.counter++
    }
  }
})
