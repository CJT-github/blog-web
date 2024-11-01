<template>
  <NavigationMenuRoot
    v-model="currentTrigger"
    class="relative z-20 flex w-full justify-center pt-1 pb-1"
  >
    <NavigationMenuList
      class="center shadow-blackA7 m-0 flex gap-2 list-none p-1 page-width"
    >
      <NavigationMenuItem>
        <NavigationMenuTrigger
          class="font_color hover_color focus:font_active_color group flex select-none items-center justify-between gap-[2px] px-3 py-2 text-[15px] font-medium leading-none rounded-[4px] outline-none focus:shadow-[0_0_0_2px]"
        >
          {{ $t("menu.learn") }}
          <Icon
            icon="radix-icons:caret-down"
            class="font_color relative top-[1px] transition-transform duration-[250ms] ease-in group-data-[state=open]:-rotate-180"
          />
        </NavigationMenuTrigger>
        <NavigationMenuContent
          class="data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight absolute top-0 left-0 w-full sm:w-auto"
        >
          <ul
            class="one m-0 grid list-none gap-x-[10px] p-[22px] sm:w-[500px] sm:grid-cols-[0.75fr_1fr]"
          >
            <li class="row-span-3 grid">
              <NavigationMenuLink as-child>
                <a
                  class="focus:font_active_color from-green9 to-teal9 flex h-full w-full select-none flex-col justify-end rounded-[6px] bg-gradient-to-b p-[25px] no-underline outline-none focus:shadow-[0_0_0_2px]"
                  href="/"
                >
                  <img class="w-16" src="https://www.radix-vue.com/logo.svg" />
                  <div
                    class="mt-4 mb-[7px] text-[18px] font-medium leading-[1.2] text-white"
                  >
                    Radix Primitives
                  </div>
                  <p class="text-mauve4 text-[14px] leading-[1.3]">
                    Unstyled, accessible components for Vue.
                  </p>
                </a>
              </NavigationMenuLink>
            </li>

            <NavigationMenuListItem
              href="https://stitches.dev/"
              title="Stitches"
            >
              CSS-in-JS with best-in-class developer experience.
            </NavigationMenuListItem>
            <NavigationMenuListItem href="/colors" title="Colors">
              Beautiful, thought-out palettes with auto dark mode.
            </NavigationMenuListItem>
            <NavigationMenuListItem
              href="https://icons.radix-ui.com/"
              title="Icons"
            >
              A crisp set of 15x15 icons, balanced and consistent.
            </NavigationMenuListItem>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <NavigationMenuTrigger
          class="font_color hover_color focus:font_active_color group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]"
        >
          {{ $t("menu.classification") }}
          <Icon
            icon="radix-icons:caret-down"
            class="font_color relative top-[1px] transition-transform duration-[250ms] ease-in group-data-[state=open]:-rotate-180"
          />
        </NavigationMenuTrigger>
        <NavigationMenuContent
          class="data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight absolute top-0 left-0 w-full sm:w-auto"
        >
          <ul
            class="m-0 grid list-none gap-x-[10px] p-[22px] sm:w-[600px] sm:grid-flow-col sm:grid-rows-3"
          >
            <NavigationMenuListItem
              title="Introduction"
              href="/docs/primitives/overview/introduction"
            >
              Build high-quality, accessible design systems and web apps.
            </NavigationMenuListItem>
            <NavigationMenuListItem
              title="Getting started"
              href="/docs/primitives/overview/getting-started"
            >
              A quick tutorial to get you up and running with Radix Primitives.
            </NavigationMenuListItem>
            <NavigationMenuListItem
              title="Styling"
              href="/docs/primitives/guides/styling"
            >
              Unstyled and compatible with any styling solution.
            </NavigationMenuListItem>
            <NavigationMenuListItem
              title="Animation"
              href="/docs/primitives/guides/animation"
            >
              Use CSS keyframes or any animation library of your choice.
            </NavigationMenuListItem>
            <NavigationMenuListItem
              title="Accessibility"
              href="/docs/primitives/overview/accessibility"
            >
              Tested in a range of browsers and assistive technologies.
            </NavigationMenuListItem>
            <NavigationMenuListItem
              title="Releases"
              href="/docs/primitives/overview/releases"
            >
              Radix Primitives releases and their changelogs.
            </NavigationMenuListItem>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>

      <NavigationMenuItem class="ml-auto flex gap-2 items-center">
        <NavigationMenuLink
          class="font_color hover_color focus:font_active_color block select-none rounded-[4px] px-3 py-2 font-medium leading-none no-underline outline-none focus:shadow-[0_0_0_2px]"
        >
          <Language />
        </NavigationMenuLink>
        <NavigationMenuLink
          class="font_color hover_color focus:font_active_color block select-none rounded-[4px] px-3 py-2 font-medium leading-none no-underline outline-none focus:shadow-[0_0_0_2px]"
          @click="changeTheme(theme)"
        >
          <Icon
            v-if="theme === 'dark'"
            icon="radix-icons:moon"
            class="font_color relative top-[1px] transition-transform duration-[250ms] ease-in group-data-[state=open]:-rotate-180"
          />
          <Icon
            v-if="theme === 'light'"
            icon="radix-icons:sun"
            class="font_color relative top-[1px] transition-transform duration-[250ms] ease-in group-data-[state=open]:-rotate-180"
          />
        </NavigationMenuLink>
        <NavigationMenuLink
          class="font_color hover_color focus:font_active_color block select-none rounded-[4px] px-3 py-2 font-medium leading-none no-underline outline-none focus:shadow-[0_0_0_2px]"
          href="https://github.com/CJT-github/blog.git"
        >
          <Icon
            icon="radix-icons:github-logo"
            class="font_color relative top-[1px] transition-transform duration-[250ms] ease-in group-data-[state=open]:-rotate-180"
          />
        </NavigationMenuLink>
        <NavigationMenuLink
          class="font_color hover_color focus:font_active_color block select-none rounded-[4px] px-3 py-2 font-medium leading-none no-underline outline-none focus:shadow-[0_0_0_2px]"
        >
          <Login />
        </NavigationMenuLink>
      </NavigationMenuItem>
    </NavigationMenuList>

    <div
      class="perspective-[2000px] absolute top-full left-0 flex w-full justify-between page-width"
    >
      <NavigationMenuViewport
        class="data-[state=open]:animate-scaleIn data-[state=closed]:animate-scaleOut relative mt-[10px] h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-[10px] bg-white transition-[width,_height] duration-300 sm:w-[var(--radix-navigation-menu-viewport-width)] shadow-md"
      />
    </div>
  </NavigationMenuRoot>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import { ref } from "vue";
import { useConfig } from "@/store/index.js";
import {
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuRoot,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "radix-vue";
import NavigationMenuListItem from "./NavigationMenuListItem.vue";
import Language from "./Language.vue";
import Login from "./Login.vue";

const currentTrigger = ref("");

const storeConfig = useConfig();
const theme = computed(() => storeConfig.theme);

const dd = ref(1);

setTimeout(() => {
  dd.value = 3;
}, 3000);

onMounted(() => {
  document.documentElement.setAttribute("data-theme", storeConfig.theme);
  watch(
    () => dd.value,
    () => {
      console.log("2222");
    },
    { immediate: true }
  );
});

const changeTheme = () => {
  storeConfig.theme = theme.value === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", storeConfig.theme);
};
</script>
