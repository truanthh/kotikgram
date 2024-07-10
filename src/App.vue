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
  position: absolute;
  top: 55px;
  left: 0;
  right: 0;
  background-color: var(--body-bg);
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
  --body-bg: #f0f8ff;
}
.dark {
  --body-bg: black;
}
</style>
