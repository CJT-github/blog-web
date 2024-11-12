<template>
  <div>
    <div class="mb-4 flex justify-between">
      <div class="font_color">博客创造</div>
      <button class="font_color">保存</button>
    </div>
    <form>
      <input
        type="file"
        id="fileInput"
        class="hidden"
        @change="change"
        accept="image/*"
      />
      <div class="p-4 border">
        <div class="flex">
          <div class="flex gap-10 items-center">
            <div class="flex items-center">
              <label class="font_color">序图</label>
              <div
                class="w-[150px] h-[100px] border border-dashed flex items-center justify-center"
                @click="uploadFile"
              >
                <Icon
                  icon="tabler:plus"
                  class="font_color relative top-[1px] transition-transform duration-[250ms] ease-in group-data-[state=open]:-rotate-180"
                />
              </div>
            </div>
            <div>
              <label class="font_color">标题</label>
              <input class="border w-[200px] p-1" />
            </div>
            <div>
              <label class="font_color">标签</label>
              <select class="border w-[200px] p-[0.45rem]">
                <option></option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="my-2"><label class="font_color">内容</label></div>

        <Editor
          :value="mesages.article"
          :plugins="plugins"
          @change="handleChange"
        />
      </div>
    </form>
  </div>
</template>

<script setup>
import "bytemd/dist/index.css";

import { Icon } from "@iconify/vue";
import { Editor, Viewer } from "@bytemd/vue-next";
import gfm from "@bytemd/plugin-gfm";
import mermaid from "@bytemd/plugin-mermaid";
import gemoji from "@bytemd/plugin-gemoji";
import mediumZoom from "@bytemd/plugin-medium-zoom";
import highlight from "@bytemd/plugin-highlight";
import "highlight.js/styles/default.css";

const plugins = [gfm(), highlight(), gemoji(), mermaid(), mediumZoom()];

const mesages = ref({
  title: "",
  article: "",
  synopsis: "",
});

const handleChange = (v) => {
  mesages.value.article = v;
};

const uploadFile = () => {
  let el = document.getElementById("fileInput");
  el.click();
};

const change = (e) => {
  let file = e.target.files[0];
  console.log(file);

  if (!file) return;

  if (!file.type.startsWith("image/")) {
    console.log("选择图片");
    return;
  }

  const maxSize = 2 * 1024 * 1024; // 2MB
  if (file.size > maxSize) {
    console.log("图片大小超过2MB，请选择小一些的图片");
    return;
  }

  // 通过 FileReader 预览图片
  const reader = new FileReader();
  reader.onload = function (e) {
    const img = new Image();
    img.src = e.target.result;
    // document.body.appendChild(img);
  };
  reader.readAsDataURL(file);
};
</script>

<style lang="scss" scoped>
label {
  margin-right: 20px;
}
:deep(.bytemd) {
  z-index: 99;
  height: calc(100vh - 200px);
}
</style>
