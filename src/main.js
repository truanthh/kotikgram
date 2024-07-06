import "./assets/main.css";

import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import components from "@/components/UI";
import directives from "@/directives";

const app = createApp(App);
const pinia = createPinia();

components.forEach((component) => {
  app.component(component.name, component);
});

directives.forEach((directive) => {
  app.directive(directive.name, directive);
});

app.use(pinia).use(router).mount("#app");
