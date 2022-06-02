<template>
  <div>
    <form @submit.prevent="userLogin">
      <div>
        <label>email</label>
        <input v-model="email" type="text">
      </div>
      <div>
        <label>Password</label>
        <input v-model="password" type="text">
      </div>
      <div>
        {{ $store.state.auth.user.email }}
        <button type="submit">
          Submit
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'LoginForm',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async userLogin () {
      try {
        await this.$auth.loginWith('local', {
          data: {
            email: this.email,
            password: this.password
          }
        })
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>
