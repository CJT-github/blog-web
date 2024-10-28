<template>
  <div class="flex flex-col gap-y-8">
    <template v-for="item in 10">
      <BlogBlock />
    </template>
  </div>
</template>

<script setup lang="ts">
import { SplitterGroup, SplitterPanel, SplitterResizeHandle } from "radix-vue";
</script>
