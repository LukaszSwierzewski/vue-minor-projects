<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <img :src="image" alt="" >
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: {
      required: true,
      type: [String, Number],
      default: 'asdxd'
    },
    image: {
      type: String,
      default: require("@/assets/logo.png"),
      validator: propValue => {
        const hasImagesDirectory = propValue.indexOf('data:image') > -1
        const isPNG = propValue.endsWith('==')
        const isJPG = propValue.endsWith('==')
        const hasValidExtension = isPNG || isJPG
        return hasImagesDirectory && hasValidExtension
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
