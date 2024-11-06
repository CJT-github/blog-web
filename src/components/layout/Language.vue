<template>
  <DropdownMenuRoot v-model:open="toggleState">
    <DropdownMenuTrigger
      class="inline-flex items-center justify-center font_color hover_color outline-none"
      aria-label="Customise options"
    >
      <Icon
        icon="prime:language"
        class="font_color hover_color relative top-[1px] transition-transform duration-[250ms] ease-in group-data-[state=open]:-rotate-180"
      />
    </DropdownMenuTrigger>

    <DropdownMenuPortal>
      <DropdownMenuContent
        class="min-w-[100px] outline-none bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
        :side-offset="5"
      >
        <template v-for="item in languages" :key="item.value">
          <DropdownMenuItem
            value="New Tab"
            class="group text-[13px] leading-none font_color rounded-[3px] flex items-center justify-center h-[25px] px-[5px] relative select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green-950"
            @click="selectLanguage(item.value)"
            :style="{
              background: locale === item.value ? 'green' : 'transparent',
              color: locale === item.value ? 'white' : 'rgba(51,51,51,0.7)',
            }"
          >
            {{ $t(`appInfo.${item.value}`) }}
          </DropdownMenuItem>
        </template>
        <DropdownMenuArrow class="fill-white" />
      </DropdownMenuContent>
    </DropdownMenuPortal>
  </DropdownMenuRoot>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import { useI18n } from "vue-i18n";
import { ref } from "vue";
import { useConfig } from "@/store/index.js";
import {
  DropdownMenuArrow,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuRoot,
  DropdownMenuTrigger,
} from "radix-vue";

const config = useConfig();

const i18n_redirected = useCookie("i18n_redirected");

const toggleState = ref(false);
const { locale } = useI18n();

const languages = [
  { label: "中文", value: "zh-cn", dir: "ltr" },
  { label: "英文", value: "en", dir: "ltr" },
  { label: "日文", value: "ja", dir: "ltr" },
];

function selectLanguage(newLanguage) {
  const langInfo = languages.find((item) => item.value === newLanguage);

  if (!langInfo) return;

  config.language = langInfo.dir;
  i18n_redirected.value = langInfo.value;
  locale.value = langInfo.value;
}
</script>
