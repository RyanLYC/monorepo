import { App } from "vue";
import Button from "@packages/Button/index.vue";

const components = [Button];
// 全局注册
const install = (app: App) => {
  components.forEach((component) => {
    app.component(component.name, component);
  });
};

export { Button };
export default {
  install,
};
