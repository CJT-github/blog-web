<template>
  <div
    class="w-full font_color font-medium text-sm theme_box_shadow rounded-xl relative overflow-hidden blog-item-layout"
  >
    <div class="image-container">
      <div class="image-relative">
        <img
          class="image"
          src="@/assets/image/edc649f81cce1e5c79384c5cfdbb3ff0.jpg"
        />
      </div>
    </div>
    <div
      class="mx-[15px] desc-container pt-4 pb-4 box-border overflow-hidden flex flex-col flex-1 justify-center"
    >
      <div class="w-full">
        <h1
          class="font-title-size font-semibold mb-4 text-ellipsis overflow-hidden whitespace-nowrap"
        >
          前端实现文件预览(word、excel、pdf、ppt、xmind、 音视频、图片、文本)
          国际化
        </h1>
        <div class="font-subtitle-size mb-4 line-clamp-3">
          在这之前公司项目的文档预览的方式都是通过微软在线预览服务，但是微软的在线服务有文件大小限制，想完整使用得花钱，一些图片文件就通过组件库antd实现，因为我们项目存在多种类型的文件，所以为了改善用户的体验，决定把文件预览单独弄一个拆出一个项目出来，我们先看一下最终预览效果。
        </div>
        <Separator
          class="bg-[#9f8bf8] data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px divide-separator"
        />
        <div class="flex h-5 items-center">
          <div class="font-tab-size leading-5">Blog</div>
          <Separator
            class="bg-[#d7cff9] data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px mx-[15px]"
            decorative
            orientation="vertical"
          />
          <div class="font-tab-size leading-5">Docs</div>
          <Separator
            class="bg-[#d7cff9] data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px mx-[15px]"
            decorative
            orientation="vertical"
          />
          <div class="font-tab-size leading-5">Source</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Separator } from "radix-vue";
</script>

<style scoped lang="scss">
.box-border {
  box-sizing: border-box;
}

@media (min-width: 991px) {
  .image-container {
    padding: 1rem;
  }
  .image-relative {
    padding-bottom: 20%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    overflow: hidden;
  }
  .font-title-size {
    font-size: 18px;
  }
  .font-subtitle-size {
    font-size: 16px;
  }
  .font-tab-size {
    font-size: 14px;
  }
  .blog-item-layout {
    display: block;
  }
  .divide-separator {
    margin: 20px auto;
  }
}
@media (max-width: 990px) {
  .image-container {
    width: 30%;
    padding: 20px;
    display: flex;
    align-items: center;
  }
  .image-relative {
    width: 100%;
    padding-bottom: 100%;
    border-radius: 50%;
    overflow: hidden;
  }
  .font-title-size {
    font-size: 14px;
    line-height: 1.3;
  }
  .font-subtitle-size {
    font-size: 12px;
    line-height: 1.3;
  }
  .font-tab-size {
    font-size: 10px;
    line-height: 1.3;
  }
  .blog-item-layout {
    display: flex;
  }
  .desc-container {
    margin-left: 0;
  }
  .divide-separator {
    margin: 15px auto;
  }
}
</style>
