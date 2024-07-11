<script setup>
import { RouterLink, RouterView } from "vue-router";
import { usePostStore } from "@/stores/PostStore";
const postStore = usePostStore();
</script>

<template>
  <div :class="{ light: !postStore.isDark, dark: postStore.isDark }">
    <navbar />

    <main>
      <RouterView />
    </main>
  </div>
</template>

<style>
@font-face {
  font-family: play;
  src: url("@/assets/fonts/PlaywriteITModerna-Regular.ttf");
}

main {
  background-color: var(--main-bgcolor);
  color: var(--main-color);
}

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family:
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    "Open Sans",
    "Helvetica Neue",
    sans-serif;
}

.light {
  --main-bgcolor: #f0f8ff;
  --main-color: black;
  --navbar-bg: white;
  --navbar-bd: solid 1px lightgray;
  --navbarlogo-color: black;
}
.dark {
  --main-bgcolor: black;
  --main-color: white;
  --navbar-bg: #161716;
  --navbar-bd: solid 1px #262626;
  --navbarlogo-color: white;
}
</style>
