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
</style>
