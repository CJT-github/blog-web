<template>
  <div class="basic-container relative" id="message-tip">
    <header class="shadow-md z-20 sticky top-0">
      <div class="menu-container bg_color">
        <Menu />
      </div>
    </header>
    <main class="relative">
      <div class="page-width min-height-120px pt-6 main-container">
        <div class="relative">
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
.min-height-120px {
  min-height: calc(100vh - 120px);
}

@media (max-width: 990px) {
  .menu-container {
    display: none;
  }
  .main-container {
    display: block;
  }
}
</style>
