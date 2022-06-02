import { defineStore } from 'pinia'
import { fetchPersons } from '@/api/swapi'
import type { People } from '@/types/People.type'
import { excludeByFirstLetter } from '@/helpers/util'
import { useExampleCounterStore } from '@/stores/counter'
interface usePersonState {
  persons: People[]
}
export const usePersonStore = defineStore({
  id: 'person',
  state: (): usePersonState => ({
    persons: []
  }),
  getters: {
    filteredPersons: (state) => excludeByFirstLetter(state.persons, ["L", "N", "C"], "name")
  },
  actions: {
      /**
     * @name fetchPersons
     * @description fetch persons from swapi API
     */
    async fetchPersons() {
      const counterStore = useExampleCounterStore()
      counterStore.icrementCounter()
      const persons: People[] = await fetchPersons()
      this.persons = persons
    }
  }
})
