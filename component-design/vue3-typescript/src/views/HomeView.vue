<script setup lang="ts">
import PeopleList from '@/components/PeopleList.vue'
</script>

<template>
  <main>
    <Suspense>
   <template #default>
     <PeopleList />
   </template>
   <template #fallback>
     <span>Loading...</span>
   </template>
    </Suspense>
  </main>
</template>
