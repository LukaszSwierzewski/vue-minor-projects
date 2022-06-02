<template>
  <div>
    <NuxtLink to="/auth">
      auth req
    </NuxtLink>
    <NuxtLink to="/">
      home
    </NuxtLink>
    <NuxtLink to="/login">
      login page
    </NuxtLink>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'IndexPage',
  computed: {
    ...mapState({
      someData: state => state.random.someData
    })
  }
}
</script>
