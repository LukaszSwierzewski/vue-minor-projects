<script lang="ts">
import { fetchPerson } from '@/api/swapi';
import { defineComponent, ref } from 'vue'
export default defineComponent({
    props: {
        id: {
            type: String,
            required: true
        }
    },
    async setup(props) {
        const person = await fetchPerson(props.id);
        let editData = ref('')
        if (person.gender === 'female' && person.birth_year === "19BBY") {
            editData.value = JSON.parse(JSON.stringify(person))
        } else {
            const clone = JSON.parse(JSON.stringify(person))
            for (let keys in clone){
                if (clone.hasOwnProperty(keys)){
                    clone[keys] = ''
                }
            }
            editData.value = clone
        }
        return { person, editData };
    },
});

</script>

<template>
  <form id="'edit-person">
    <div class="inputs">
        <div v-for="(_, key) in editData" :key="key" class="single-input">
            <label for="name">Character {{ key }}</label><br>
            <input class="base-input" :disabled="key === 'created' || key === 'edited'" type="text" id="name" name="name" v-model="editData[key]">
        </div>
    </div>
    <div class="single-submit">
          <input class='btn' type="submit" value="Submit">
    </div>
  </form>
</template>
<style scoped>
.inputs {
    display: grid;
    grid-template-columns: 1fr;
}
.single-input {
    width: 100%;
    margin-bottom: var(--spacing-medium);
}
</style>