<template>
  <div class="flex gap-4 main-contain">
    <div class="w-[18%] pc-slide">
      <Slide />
    </div>
    <div class="flex-1 flex flex-col flex-gap">
      <template v-for="item in 10">
        <BlogBlock />
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { SplitterGroup, SplitterPanel, SplitterResizeHandle } from "radix-vue";
import Slide from "@/components/layout/Slide.vue";
</script>

<style scoped lang="scss">
.flex-gap {
  gap: 20px;
}

@media (max-width: 990px) {
  .flex-gap {
    gap: 20px;
  }
  .pc-slide {
    display: none;
  }
  .main-contain {
    display: block;
  }
}
</style>
