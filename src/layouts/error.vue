<template>
  <div>
    <h3>{{ error.statusCode }}</h3>
    <NuxtLink to="/" :external="true">Go back home</NuxtLink>
  </div>
</template>

<script setup>
const props = defineProps({
  error: Object,
});
</script>
