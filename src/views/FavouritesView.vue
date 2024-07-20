<script setup>
import { onMounted, computed, ref } from "vue";
import { usePostStore } from "@/stores/PostStore";
import CardList from "@/components/CardList.vue";
const postStore = usePostStore();
// import { useRoute } from "vue-router";
import { getScrollPosition } from "@/scrollManager";

// const route = useRoute();

function debugging() {}

onMounted(() => {
  // postStore.fetchFromIDB();
  const scrollY = getScrollPosition("/favourites");
  window.scroll(0, scrollY);
});
</script>

<template>
  <!-- <button @click="debugging" style="position: fixed">DEBUG</button> -->
  <div class="info">
    <!-- <h1>DISPLAY FAVOURITES HERE:</h1> -->
  </div>
  <CardList v-bind:images="postStore.favourites" />
  <div class="loading" v-show="postStore.favourites.length === 0">
    You have no liked posts yet...
  </div>
</template>

<style scoped>
.info {
  position: fixed;
  z-index: 100;
}
.loading {
  font-size: 40px;
  color: red;
  text-align: center;
}
</style>
