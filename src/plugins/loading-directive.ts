import { defineNuxtPlugin } from "#app";

interface HTMLElementWithLoading extends HTMLElement {
  _loadingElement?: any; // 指定类型，如 HTMLElement、boolean 等
}

export default defineNuxtPlugin((nuxtApp) => {
  // 将已有的 SVG 代码封装为 DOM 元素
  const createLoadingElement = (): HTMLElement => {
    const loadingOverlay = document.createElement("div");
    loadingOverlay.style.position = "absolute";
    loadingOverlay.style.top = "0";
    loadingOverlay.style.left = "0";
    loadingOverlay.style.width = "100%";
    loadingOverlay.style.height = "100%";
    loadingOverlay.style.backgroundColor = "rgba(0, 0, 0, 0.3)"; // 半透明蒙版
    loadingOverlay.style.display = "flex";
    loadingOverlay.style.justifyContent = "center";
    loadingOverlay.style.alignItems = "center";
    loadingOverlay.style.overflow = "hidden";

    // 插入现有的 SVG 代码
    loadingOverlay.innerHTML = `
     <svg version="1.1" width="100%" height="100%" id="L9" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 100"  enable-background="new 0 0 0 0" xml:space="preserve">
        <path fill="#fff" d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
          <animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="1s" from="0 50 50" to="360 50 50" repeatCount="indefinite"></animateTransform>
      </path>
    </svg>
    `;

    return loadingOverlay;
  };

  // 注册自定义指令 v-loading
  nuxtApp.vueApp.directive("loading", {
    mounted(el: HTMLElementWithLoading, binding) {
      const position = getComputedStyle(el).position;
      if (position === "static") {
        el.style.position = "relative"; // 保证容器是可定位的
        el.style.overflow = "hidden"; // 保证容器是可定位的
      }

      const loadingElement = createLoadingElement();
      el.appendChild(loadingElement);

      if (!binding.value) {
        loadingElement.style.display = "none"; // 初始状态
      }

      el._loadingElement = loadingElement; // 存储加载动画元素到 DOM 节点
    },
    updated(el: HTMLElementWithLoading, binding) {
      if (binding.value) {
        el._loadingElement.style.display = "flex"; // 显示加载动画
      } else {
        el._loadingElement.style.display = "none"; // 隐藏加载动画
      }
    },
    unmounted(el: HTMLElementWithLoading) {
      el.removeChild(el._loadingElement);
    },
  });
});
