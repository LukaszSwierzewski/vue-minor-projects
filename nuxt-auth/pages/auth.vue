<template>
  <div>
    auth required
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'AuthPage',
  middleware: 'auth',
  computed: {
    ...mapState({
      someData: state => state.auth.someData
    })
  }
}
</script>
