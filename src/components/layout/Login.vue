<template>
  <DialogRoot v-model:open="open">
    <DialogTrigger>
      <slot name="placeholder">
        <Icon
          icon="radix-icons:avatar"
          class="font_color relative top-[1px] transition-transform duration-[250ms] ease-in group-data-[state=open]:-rotate-180"
        />
      </slot>
    </DialogTrigger>
    <DialogPortal>
      <DialogOverlay
        class="bg-blackA9 data-[state=open]:animate-overlayShow fixed inset-0 z-30"
      />
      <DialogContent
        class="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none z-[100]"
      >
        <DialogTitle class="text-mauve12 m-0 text-[17px] font-semibold">
          {{ $t("action.login") }}
        </DialogTitle>
        <DialogDescription
          class="text-mauve11 mt-[10px] mb-5 text-[15px] leading-normal"
        >
          {{ $t("login.login_message") }}.
        </DialogDescription>
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
            class="text-grass11 shadow-green7 focus:shadow-green8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
            defaultValue=""
            @change="(e) => inputFn(e, 'password')"
          />
        </fieldset>
        <div class="mt-[25px] flex justify-end">
          <a
            class="text-green11 hover:bg-green5 focus:shadow-green7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-semibold leading-none focus:shadow-[0_0_0_2px] focus:outline-none cursor-pointer"
            @click="registerFn"
          >
            {{ $t("login.sign_up") }}
          </a>

          <button
            class="bg-green4 text-green11 hover:bg-green5 focus:shadow-green7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-semibold leading-none focus:shadow-[0_0_0_2px] focus:outline-none ml-2"
            @click="requestFn"
            v-loading="isLoading"
          >
            {{ $t("action.login") }}
          </button>
        </div>
        <DialogClose
          class="text-grass11 hover:bg-green4 focus:shadow-green7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
          aria-label="Close"
        >
          <Icon icon="lucide:x" />
        </DialogClose>
        <Message ref="messageRef"></Message>
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
  <Register ref="registerRef" @login="loginFn" />
</template>

<script setup lang="ts">
import Register from "@/components/layout/Register.vue";
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
import { login } from "@/api/login.js";
import Message from "@/components/message/index.vue";

const token = useCookie("token", { maxAge: 60 * 60 * 24 });
const user = useCookie("user", { maxAge: 60 * 60 * 24 });

const open = ref(false);
const registerRef = ref<null | any>(null);

const loginFn = (bl: boolean) => {
  open.value = bl;
};

const messageRef = ref<InstanceType<typeof Message>>();
const isLoading = ref(false);

const registerFn = () => {
  open.value = false;
  registerRef.value!.open = true;
};

interface FormState {
  username: string;
  password: string;
}

const inputFn = (e: Event, name: keyof FormState) => {
  const target = e.target as HTMLInputElement;
  formState[name] = target.value;
};

const formState = reactive<FormState>({
  username: "",
  password: "",
});

const requestFn = async () => {
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
  const res = await login(formState);

  if (res && Object.keys(res).length) {
    token.value = res.token;
    user.value = res.user;
    messageRef.value!.message("success", "登录成功");
    open.value = false;
  }
  isLoading.value = false;
};
</script>
