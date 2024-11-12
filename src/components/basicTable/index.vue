<template>
  <div>
    <table></table>
  </div>
</template>

<script setup>
const props = defineProps({
  column: {
    type: Array,
    default: () => [],
  },
  dataSource: {
    type: Array,
    default: () => [],
  },
});
</script>

<style lang="scss" scoped></style>
