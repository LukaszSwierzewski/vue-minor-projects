<template>
<div>
    <select @change="updateSalutation">
    <option value="">-</option>
        <option
        v-for="item of salutations"
        :value="item"
        :key="item"
        :selected="salutation === item"
    >
        {{ item }}
    </option>
    </select>
    <input
    @input="updateName"
    :value="name"
    type="text"
    name="name"
    />
</div>
</template>
<script>
const salutations = [
  'Ms.',
  'Mrs.',
  'Miss',
  'Mx.',
  'Dr.'
]

export default {
  props: {
    salutation: {
      type: String,
      default: ''
    },
    salutationModifiers: {
        default: () => ({})
    },
    name: {
      type: String,
      default: 'aaaaaa'
    },
    nameModifiers: {
        default: () => ({})
    }
  },
  setup (props, context) {
    const updateSalutation = event => {
        let val = event.target.value
        if (props.salutationModifiers.capitalize) {
            val = val.toUpperCase()
        }
        context.emit('update:salutation', val)
    }
    const updateName = event => {
        let val = event.target.value
        if (props.nameModifiers.reverse) {
            val = val.split("").reverse().join("");
        }
        if (props.nameModifiers.capitalize) {
            val = val.charAt(0).toUpperCase() + val.slice(1)
        }
        context.emit('update:name', val)
    }
    return {
      salutations,
      updateSalutation,
      updateName
    }
  }
}
</script>