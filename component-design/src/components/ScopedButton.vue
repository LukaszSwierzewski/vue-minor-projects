<template>
<br>
<button>
    <slot />
</button>
<h1><slot name='header' :logo="someData"></slot></h1>
<h3><slot name='smallerHeading'>asd</slot></h3>
<input type="text" v-model="someData">
</template>

<script>
export default {
    data () {
        return {
            someData: 'asddd'
        }
    }
}
</script>
