<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App" :image="require('@/assets/' + 'v.png')" />
  <BaseButton text='blbal' />
  <hr />
  <slot-button>
    <template v-slot:heading>
      template heading
    </template>
        <template #smallerHeading>
      smaller heading slot
    </template>
  </slot-button>
  <hr/>
  scoped slot-button
  <scoped-button>
    <template #header="slotProps">
      {{ slotProps.logo }}
    </template>
  </scoped-button>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import BaseButton from '@/components/BaseButton.vue'
import SlotButton from '@/components/SlotButton'
import ScopedButton from '@/components/ScopedButton'
export default {
  name: 'App',
  components: {
    HelloWorld,
    BaseButton,
    SlotButton,
    ScopedButton 
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
