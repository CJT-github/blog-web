<template>
  <div class="basic-container relative" id="message-tip">
    <header class="shadow-md z-20">
      <div class="menu-container">
        <Menu />
      </div>
    </header>
    <main class="relative">
      <div class="page-width min-height-100px flex gap-4 pt-6 main-container">
        <div class="w-[18%] pc-slide">
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
import { useConfig } from "@/store/index.js";

const storeConfig = useConfig();

useHead({
  bodyAttrs: { "data-theme": storeConfig.theme },
});
</script>

<style lang="scss">
@import "@/assets/style/variable.scss";
@import "@/assets/style/mixin.scss";

.basic-container {
  width: 100%;
  font-size: $font_medium;
  @include bg_color();

  * {
    box-sizing: border-box;
  }
}
</style>

<style lang="scss">
@import "@/assets/style/index.css";
.min-height-100px {
  min-height: calc(100vh - 100px);
}

@media (min-width: 991px) {
  .pc-slide {
    display: block;
  }
}
@media (max-width: 990px) {
  .pc-slide {
    display: none;
  }
  .menu-container {
    display: none;
  }
  .main-container {
    display: block;
  }
}
</style>
