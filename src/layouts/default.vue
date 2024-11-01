<template>
  <div class="basic-container relative" id="message-tip">
    <header class="shadow-md h-[50px] z-20">
      <Menu />
    </header>
    <main class="relative">
      <div class="page-width min-height-100px flex gap-4 pt-6">
        <div class="w-[18%]">
          <Slide />
        </div>
        <div class="flex-1 relative">
          <slot />
        </div>
      </div>
    </main>
    <div class="mt-[20px]">
      <footer class="page-width min-h-[50px] shadow-md">尾部</footer>
    </div>
  </div>
</template>

<script setup>
import Menu from "@/components/layout/Menu.vue";
import Slide from "@/components/layout/Slide.vue";
</script>

<style lang="scss">
@import "@/assets/style/variable.scss";
@import "@/assets/style/mixin.scss";

.basic-container {
  width: 100%;
  font-size: $font_medium;
  @include bg_color();
}
</style>

<style lang="scss">
@import "@/assets/style/index.css";
.min-height-100px {
  min-height: calc(100vh - 100px);
}
</style>
