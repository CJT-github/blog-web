<template>
  <div class="">
    <div class="flex justify-between mb-5">
      <h3 class="font_color">字典管理</h3>
      <button @click="newCategory" class="font_color">新增</button>
    </div>
    <div class="w-full border rounded-xl font_color">
      <table class="table-auto w-full text-left">
        <caption class="caption-top py-4">
          Tip: 不可随意更改、删除.
        </caption>
        <thead>
          <tr>
            <th>序号</th>
            <th>密钥</th>
            <th>名称</th>
            <th>创建日期</th>
            <th>修改日期</th>
            <th>编辑</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>序号</td>
            <td>密钥</td>
            <td>名称</td>
            <td>创建日期</td>
            <td>修改日期</td>
            <td>编辑\删除</td>
          </tr>
        </tbody>
        <tfoot></tfoot>
      </table>
    </div>
    <div class="py-10 w-full text-center">
      <Pagination />
    </div>
  </div>
  <Dialog ref="dialogRef">
    <DialogTitle class="text-mauve12 m-0 text-[17px] font-semibold">
      新增字典
    </DialogTitle>
    <fieldset class="mb-[15px] flex items-center gap-5">
      <label class="text-grass11 w-[90px] text-right text-[15px]" for="key">
        密钥
      </label>
      <input
        id="key"
        class="text-grass11 shadow-green7 focus:shadow-green8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
        @change="(e) => inputFn(e, 'key')"
      />
    </fieldset>
    <fieldset class="mb-[15px] flex items-center gap-5">
      <label class="text-grass11 w-[90px] text-right text-[15px]" for="name">
        名称
      </label>
      <input
        id="name"
        class="text-grass11 shadow-green7 focus:shadow-green8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
        @change="(e) => inputFn(e, 'name')"
      />
    </fieldset>
    <div class="flex justify-end py-2">
      <button class="" @click="submitFn">提交</button>
    </div>
  </Dialog>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import Pagination from "@/components/pagination/index.vue";
import { DialogTitle } from "radix-vue";
import Dialog from "@/components/dialog/index.vue";
import { createCategory } from "@/api/blog_system.js";

const dialogRef = ref(null);

const column = [
  {
    dataIndex: "id",
    title: "序号",
    width: "",
  },
  {
    dataIndex: "title",
    title: "标题",
    width: "",
  },
];

const formState = ref({
  key: "",
  value: "",
});

const newCategory = () => {
  dialogRef.value.open = true;
};

const inputFn = (e, key) => {
  formState.value[key] = e.target.value;
};

const submitFn = async () => {
  await createCategory(formState.value);
  dialogRef.value.open = false;
  formState.value = { key: "", value: "" };
};
</script>

<style scoped lang="scss">
th,
td {
  padding: 5px 20px;
}
</style>
