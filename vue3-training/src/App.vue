<template>
<div>
  <img alt="Vue logo" src="./assets/logo.png">
  <BaseInput v-model:modelValue.capitalize="myInput" />
  <br>
  <br>
  {{ myInput }}
  <SalutationName 
    v-model:salutation.capitalize="form.salutation"
    v-model:name.capitalize.reverse="form.name"
  /> 
  {{ form }}
  <div>
    <br>
    <br>
    <br>
    <AttrBtn label="my email:" v-model="email" type="email" class="thicc" @blur="email = 'blurr@its.cold'" />
    halooo tutajaa: {{ email }}
  </div>
</div>
</template>

<script>
import { reactive, ref } from 'vue'
import BaseInput from './components/BaseInput.vue'
import SalutationName from './components/SalutationName.vue'
import AttrBtn from './components/AttrBtn.vue'

export default {
  name: 'App',
  components: {
    BaseInput,
    SalutationName,
    AttrBtn
},
  data () {
    return {
      myInput: ''
    }
  },
  setup () {
    const form = reactive({
      salutation: '',
      name: ''
    })
    const email = ref('')
    return { form, email }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
