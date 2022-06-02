<script lang="ts">
import { ref, defineComponent, type PropType } from 'vue'
import { customColor } from '@/helpers/customColor'
import { regexID } from '@/helpers/util'
import type { People } from '@/types/People.type'
export default defineComponent({
props: {
    person: {
        required: true,
        type: Object as PropType<People>
    }
  },
  setup(props) {
    const matchedColor = ref('')
    matchedColor.value = customColor(props.person.eye_color)

    const slug = ref('')
    slug.value = regexID(props.person.url)
    return { matchedColor, slug }
  }

  });

</script>
<template>
    <td 
    :style="{ color: matchedColor }"
    :class="{ whiteBackground: matchedColor === 'white', redBlue: matchedColor === 'redBlue', greenYellow: matchedColor === 'greenYellow' }"
    >
    {{ person.name }}</td>
    <td>{{ person.eye_color }}</td>
    <td>{{ person.birth_year }}</td>
    <td><RouterLink :to="'/edit' + slug">edit</RouterLink></td>
</template>
<style scoped> 
.whiteBackground {
    background: black;
}
.redBlue {
    background: -webkit-linear-gradient(right, red, blue);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
.greenYellow {
    background: -webkit-linear-gradient(right, green, yellow);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
</style>