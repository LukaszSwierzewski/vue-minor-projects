<template>
  <div id="app">
    <nav>
      <app-header></app-header>
      <RandomNumber />
      <LoginForm @formSubmitted="eventHandler" />
      <MessageContainer />
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import RandomNumber from "@/components/RandomNumber.vue";
import LoginForm from "@/components/LoginForm";
import MessageContainer from "./components/MessageContainer.vue";
export default {
  components: {
    AppHeader,
    RandomNumber,
    LoginForm,
    MessageContainer,
  },
  methods: {
    eventHandler(payload) {
      console.log(payload);
    },
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
