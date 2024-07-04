<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="app">
    <navbar />
  </div>

  <RouterView />
</template>

<style>
@font-face {
  font-family: play;
  src: url("@/assets/fonts/PlaywriteITModerna-Regular.ttf");
}
</style>
