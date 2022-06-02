<template>
<button>
    {{ text }}
    <p>icon</p>
</button>
</template>

<script>
export default {
    props: {
      text: {
        required: true,
        type: String
      }
    }
}
</script>
