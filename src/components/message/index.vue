<template>
  <Teleport to="#message-tip">
    <ToastProvider>
      <ToastRoot
        v-model:open="open"
        class="rounded-md bg-white shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] p-[15px] grid [grid-template-areas:_'title_action'_'description_action'] grid-cols-[auto_max-content] gap-x-[15px] items-center data-[state=open]:animate-slideIn data-[state=closed]:animate-hide data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:translate-x-0 data-[swipe=cancel]:transition-[transform_200ms_ease-out] data-[swipe=end]:animate-swipeOut"
      >
        <ToastTitle class="[grid-area:_title] mb-[5px] font-medium text-[15px]">
          <slot>
            <div :class="[`message_${status}`]">{{ info[status] }}</div>
          </slot>
        </ToastTitle>
        <ToastDescription as-child>
          <time
            class="[grid-area:_description] m-0 text-slate11 text-[13px] leading-[1.3]"
            :dateTime="eventDateRef.toISOString()"
          >
            {{ prettyDate(eventDateRef) }}
          </time>
        </ToastDescription>
        <ToastAction
          class="[grid-area:_action]"
          as-child
          alt-text="Goto schedule to undo"
        >
          <slot name="action"></slot>
        </ToastAction>
      </ToastRoot>
      <ToastViewport
        class="[--viewport-padding:_25px] fixed bottom-0 right-0 flex flex-col p-[var(--viewport-padding)] gap-[10px] w-[390px] max-w-[100vw] m-0 list-none z-[2147483647] outline-none"
      />
    </ToastProvider>
  </Teleport>
</template>

<script setup lang="ts">
import { ref } from "vue";
import {
  ToastAction,
  ToastDescription,
  ToastProvider,
  ToastRoot,
  ToastTitle,
  ToastViewport,
} from "radix-vue";

const open = ref(false);
const eventDateRef = ref(new Date());
const timerRef = ref(0);

function oneWeekAway() {
  const now = new Date();
  const inOneWeek = now.setDate(now.getDate() + 7);
  return new Date(inOneWeek);
}

function prettyDate(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "full",
    timeStyle: "short",
  }).format(date);
}

interface Info {
  success: string;
  error: string;
  info: string;
  warning: string;
}

const info = reactive<Info>({
  success: "",
  error: "",
  info: "",
  warning: "",
});

const status = ref<"success" | "error" | "info" | "warning">("success");

const message = (
  state: "success" | "error" | "info" | "warning",
  msg: string
) => {
  info[state] = msg;
  status.value = state;
  open.value = true;
};

function handleClick() {
  open.value = false;
  window.clearTimeout(timerRef.value);
  timerRef.value = window.setTimeout(() => {
    eventDateRef.value = oneWeekAway();
    open.value = true;
  }, 100);
}

defineExpose({ message, open });
</script>
