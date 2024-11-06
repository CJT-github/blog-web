<template>
  <div class="flex flex-col flex-gap">
    <template v-for="item in 10">
      <BlogBlock />
    </template>
  </div>
</template>

<script setup lang="ts">
import { SplitterGroup, SplitterPanel, SplitterResizeHandle } from "radix-vue";
</script>

<style scoped lang="scss">
.flex-gap {
  gap: 20px;
}

@media (max-width: 990px) {
  .flex-gap {
    gap: 20px;
  }
}
</style>
