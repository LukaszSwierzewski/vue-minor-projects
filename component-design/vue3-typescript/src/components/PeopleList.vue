<script lang="ts">
import { usePersonStore } from '@/stores/person';
import { ref, defineComponent, computed, onMounted } from 'vue'
import SinglePerson from './SinglePerson.vue'
import { countMatches } from '@/helpers/util'
import { useExampleCounterStore } from '@/stores/counter';
const showDiscarded = ref(false)
export default defineComponent({
    async setup() {
        const personState = usePersonStore();
        const exampleStore = useExampleCounterStore();
        if (personState.$state.persons.length === 0) {
          await personState.fetchPersons();
        }
        
        const people = ref(personState.filteredPersons);
        const countFemale = computed(() => countMatches(people.value, 'female', 'gender'))
        const countMale = computed(() => countMatches(people.value, 'male', 'gender'))

        const changeFilter = (isOnMounted: boolean): void => {
          if (!isOnMounted) {
          showDiscarded.value = !showDiscarded.value
          }
          showDiscarded.value ? people.value = personState.persons  : people.value = personState.filteredPersons
        }
        onMounted(() => {
          changeFilter(true)
        })

        return { people, countFemale, countMale, exampleStore, showDiscarded , changeFilter };
    },
    components: { SinglePerson }
});



</script>

<template>
  <div>
    <div class="count-gender">
      <p>Female: {{ countFemale }}</p>
      <p>Male: {{ countMale }}</p>
      {{ exampleStore.counter }}
    </div>
    <div class="action-btn">
      <button class="btn" @click="changeFilter(false)">{{ showDiscarded ? 'Hide' : 'Show' }} discarded</button>
    </div>
    <table>
        <tr>
            <th>Name</th>
            <th>Eye color</th>
            <th>Year of birth</th>
            <th>Edit</th>
        </tr>
        <tr v-for="person in people" :key="person.url">
            <SinglePerson :person="person" />
        </tr>
    </table>
  </div>
</template>
<style>
table {
  border-spacing: 0rem;
  border-collapse: collapse;
  width: 100%;
  max-width: 100%;
  margin-bottom: var(--spacing-medium);
  background-color: transparent;
  text-align: left;
}

th {
  font-weight: bold;
  border: 1px solid #cccccc;
  padding: var(--spacing-medium);
}

td {
  border: 1px solid #cccccc;
  padding: var(--spacing-medium);
}
.count-gender {
  display: flex;
  align-items: center;
  font-weight: 900;
  justify-content: space-between;
  margin-top: var(--spacing-medium);
  margin-bottom: var(--spacing-medium);
}
</style>