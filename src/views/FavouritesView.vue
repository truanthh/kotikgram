<script setup>
import { onMounted, computed } from "vue";
import { usePostStore } from "@/stores/PostStore";
import CardList from "@/components/CardList.vue";
const postStore = usePostStore();

function debugging() {
  // console.log(postStore.favourites);
  // console.log(postStore.favourites);
}

onMounted(() => {
  // postStore.fetchFromIDB();
});
</script>

<template>
  <div class="info">
    <!-- <h1>DISPLAY FAVOURITES HERE:</h1> -->
  </div>
  <CardList v-bind:images="postStore.favImages" />
</template>

<style scoped>
.info {
  position: fixed;
  z-index: 100;
}
</style>
