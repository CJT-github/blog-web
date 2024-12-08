<template>
  <DialogRoot v-model:open="open">
    <DialogPortal>
      <DialogOverlay
        class="bg-blackA9 data-[state=open]:animate-overlayShow fixed inset-0 z-30"
      />
      <DialogContent
        class="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none z-[100]"
      >
        <DialogTitle class="text-mauve12 m-0 text-[17px] font-semibold">
          {{ $t("login.sign_up") }}
        </DialogTitle>
        <DialogDescription
          class="text-mauve11 mt-[10px] mb-5 text-[15px] leading-normal"
        >
          {{ $t("login.login_message") }}.
        </DialogDescription>
        <form action="" name="formState" novalidate id="register">
          <fieldset class="mb-[15px] flex items-center gap-5">
            <label
              class="text-grass11 w-[90px] text-right text-[15px]"
              for="username"
            >
              {{ $t("signup.username") }}
            </label>
            <input
              id="username"
              class="text-grass11 shadow-green7 focus:shadow-green8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
              defaultValue=""
              type="text"
              @change="(e) => inputFn(e, 'username')"
            />
          </fieldset>
          <fieldset class="mb-[15px] flex items-center gap-5">
            <label
              class="text-grass11 w-[90px] text-right text-[15px]"
              for="password"
            >
              {{ $t("login.password") }}
            </label>
            <input
              id="password"
              type="password"
              class="text-grass11 shadow-green7 focus:shadow-green8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
              defaultValue=""
              @change="(e) => inputFn(e, 'password')"
            />
          </fieldset>
          <fieldset class="mb-[15px] flex items-center gap-5">
            <label
              class="text-grass11 w-[90px] text-right text-[15px]"
              for="email"
            >
              {{ $t("login.email") }}
            </label>
            <input
              id="email"
              type="email"
              class="text-grass11 shadow-green7 focus:shadow-green8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
              defaultValue=""
              @change="(e) => inputFn(e, 'email')"
            />
          </fieldset>
          <fieldset class="mb-[15px] flex items-center gap-5">
            <label
              class="text-grass11 w-[90px] text-right text-[15px]"
              for="captcha"
            >
              {{ $t("signup.captcha") }}
            </label>
            <input
              id="captcha"
              type="text"
              class="text-grass11 shadow-green7 focus:shadow-green8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
              defaultValue=""
              @change="(e) => inputFn(e, 'captcha')"
            />
            <button
              class="bg-green4 text-green11 hover:bg-green5 focus:shadow-green7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-semibold leading-none focus:shadow-[0_0_0_2px] focus:outline-none"
              @click.stop="captchaFn"
              type="button"
              v-loading="isLoading"
            >
              {{ $t("action.send") }}
            </button>
          </fieldset>
        </form>

        <div class="mt-[25px] flex justify-end">
          <button
            class="bg-green4 text-green11 hover:bg-green5 focus:shadow-green7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-semibold leading-none focus:shadow-[0_0_0_2px] focus:outline-none"
            @click="loginFn"
            v-loading="isLoading"
          >
            {{ $t("login.sign_up") }}
          </button>
        </div>
        <DialogClose
          class="text-grass11 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full"
          aria-label="Close"
        >
          <Icon icon="lucide:x" />
        </DialogClose>
        <Message ref="messageRef"></Message>
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>

<script setup lang="ts">
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogPortal,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "radix-vue";
import { Icon } from "@iconify/vue";
import { registerCaptcha, register } from "@/api/login.js";
import Message from "@/components/message/index.vue";

const emits = defineEmits(["login"]);

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const open = ref(false);
const messageRef = ref<InstanceType<typeof Message>>();

defineExpose({ open });

const isLoading = ref(false);
const loginFn = async () => {
  isLoading.value = true;
  if (!formState.username) {
    messageRef.value!.message("warning", "请输入姓名");
    isLoading.value = false;
    return;
  }
  if (!formState.password) {
    messageRef.value!.message("warning", "请输入密码");
    isLoading.value = false;
    return;
  }
  if (!formState.captcha) {
    messageRef.value!.message("warning", "请输入验证码");
    isLoading.value = false;
    return;
  }
  if (!formState.email) {
    messageRef.value!.message("warning", "请输入邮箱");
    isLoading.value = false;
    return;
  }
  if (!emailRegex.test(formState.email)) {
    messageRef.value!.message("warning", "请输入合法邮箱");
    isLoading.value = false;
    return;
  }
  const res = await register(formState);
  if (res && Object.keys(res).length) {
    messageRef.value!.message("success", "注册成功");
    open.value = false;
    emits("login", true);
  } else {
    messageRef.value!.message("error", "注册失败");
  }
  isLoading.value = false;
};

const captchaFn = async () => {
  isLoading.value = true;
  if (!formState.email) {
    messageRef.value!.message("warning", "请输入邮箱");
    isLoading.value = false;
    return;
  }
  if (!emailRegex.test(formState.email)) {
    messageRef.value!.message("warning", "请输入合法邮箱");
    isLoading.value = false;
    return;
  }
  const res = await registerCaptcha({ address: formState.email });
  console.log(res);
  if (res && Object.keys(res).length) {
    messageRef.value!.message("success", "发送成功");
  } else {
    messageRef.value!.message("error", "发送失败");
  }
  isLoading.value = false;
};

interface FormState {
  username: string;
  password: string;
  email: string;
  captcha: string;
}

const inputFn = (e: Event, name: keyof FormState) => {
  const target = e.target as HTMLInputElement;
  formState[name] = target.value;
};

const formState = reactive<FormState>({
  username: "",
  password: "",
  email: "",
  captcha: "",
});

watch(
  () => open.value,
  () => {
    if (!open.value) {
      Object.assign(formState, {
        username: "",
        password: "",
        email: "",
        captcha: "",
      });
    }
  }
);
</script>
