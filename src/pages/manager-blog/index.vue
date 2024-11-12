<template>
  <div class="">
    <div class="flex justify-between mb-5">
      <h3 class="font_color">博客管理</h3>
      <NuxtLink to="manager-blog/blog-new" :external="true" class="font_color"
        >新增</NuxtLink
      >
    </div>
    <div class="w-full border rounded-xl font_color">
      <table class="table-auto w-full text-left">
        <!-- <caption class="caption-top">
          Table 3.1: Professional wrestlers and their signature moves.
        </caption> -->
        <thead>
          <tr>
            <th>序号</th>
            <th>序图</th>
            <th>标题</th>
            <th>浏览量</th>
            <th>评论量</th>
            <th>创建日期</th>
            <th>修改日期</th>
            <th>编辑</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>序号</td>
            <td>序图</td>
            <td>标题</td>
            <td>浏览量</td>
            <td>评论量</td>
            <td>创建日期</td>
            <td>修改日期</td>
            <td>编辑</td>
          </tr>
        </tbody>
        <tfoot></tfoot>
      </table>
    </div>
    <div class="py-10 w-full text-center">
      <Pagination />
    </div>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import Pagination from "@/components/pagination/index.vue";

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
</script>

<style scoped lang="scss">
th,
td {
  padding: 5px 20px;
}
</style>
