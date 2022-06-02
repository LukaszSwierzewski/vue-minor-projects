<template>
  <input
    :value="modelValue"
    @input="$emit(
      'update:modelValue', 
      $event.target.value
    )"
  >
</template>

<script>
export default {
  props: {
    modelValue: {
      type: [String, Number],
      default: ''
    }
  }
}
</script>