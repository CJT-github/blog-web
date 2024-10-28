<template>
  <ConfigProvider :dir="dir">
    <NuxtLayout>
      <NuxtPage></NuxtPage>
    </NuxtLayout>
  </ConfigProvider>
</template>

<script setup>
import { ConfigProvider } from "radix-vue";
import { useConfig } from "@/store/index.js";

const config = useConfig();

const dir = computed(() => useTextDirection({ initialValue: config.language }));
</script>
