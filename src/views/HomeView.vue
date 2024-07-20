<script setup>
import { usePostStore } from "@/stores/PostStore";
import { onMounted } from "vue";
import CardList from "@/components/CardList.vue";
import { getScrollPosition } from "@/scrollManager";
const postStore = usePostStore();

onMounted(() => {
  const scrollY = getScrollPosition("/home");
  window.scroll(0, scrollY);

  if (postStore.favourites.length === 0) {
    postStore.fetchFromIDB();
  }

  if (postStore.images.length === 0) {
    postStore.fetchImages();
  }
});
</script>

<template>
  <!-- <button @click="postStore.saveData">save data</button> -->
  <CardList v-bind:images="postStore.allImages" />
  <div
    v-intersection="postStore.fetchMoreImages"
    class="intersection"
    v-show="postStore.images.length !== 0"
  >
    <!-- this is intersection observer -->
  </div>
  <div class="loading" v-show="postStore.images.length === 0">
    Pictures are loading... :)
  </div>
</template>

<style scoped>
/* probably need to remove constant width and height */
.intersection {
  width: 80%;
  height: 20%;
  /* background-color: orange; */
}
.loading {
  font-size: 40px;
  color: red;
  text-align: center;
}
</style>
