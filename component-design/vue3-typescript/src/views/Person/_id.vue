<script setup lang="ts">
import EditPerson from '../../components/EditPerson.vue'
import { useRoute } from 'vue-router';

const route = useRoute();  
const id = route.params.id
</script>

<template>
  <main>
    <Suspense>
   <template #default>
     <EditPerson :id="id" />
   </template>
   <template #fallback>
     <span>Loading...</span>
   </template>
    </Suspense>
  </main>
</template>
