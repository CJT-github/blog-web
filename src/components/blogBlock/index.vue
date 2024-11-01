<template>
  <div
    class="w-full min-h-64 font_color font-medium text-sm theme_box_shadow rounded-xl relative overflow-hidden"
  >
    <div class="image-relative">
      <img
        class="image"
        src="@/assets/image/edc649f81cce1e5c79384c5cfdbb3ff0.jpg"
      />
    </div>
    <div class="mx-[15px] pt-4 pb-4 box-border">
      <div class="text-[15px] leading-5 font-semibold">Radix Primitives</div>
      <div class="text-[14px] leading-5">
        An open-source UI component library.
      </div>
      <Separator
        class="bg-[#d7cff9] data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px my-[15px]"
      />
      <div class="flex h-5 items-center">
        <div class="text-[12px] leading-5">Blog</div>
        <Separator
          class="bg-[#d7cff9] data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px mx-[15px]"
          decorative
          orientation="vertical"
        />
        <div class="text-[12px] leading-5">Docs</div>
        <Separator
          class="bg-[#d7cff9] data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px mx-[15px]"
          decorative
          orientation="vertical"
        />
        <div class="text-[12px] leading-5">Source</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Separator } from "radix-vue";
</script>
