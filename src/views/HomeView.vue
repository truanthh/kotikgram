<script setup>
import { usePostStore } from "@/stores/PostStore";
import { onMounted } from "vue";
import CardList from "@/components/CardList.vue";

const postStore = usePostStore();

onMounted(() => {
  // postStore.initializeImages();
  // postStore.fetchImages();
});

const toggleLike = (image) => {
  if (image.isLiked) {
    // const fav = postStore.favourites.find((fav) => fav.image.id === image.id);
    postStore.delFav(image);
  } else {
    postStore.addFav(image);
  }
};
</script>

<template>
  <!-- <button @click="postStore.saveData">save data</button> -->
  <CardList
    v-bind:images="postStore.allImages"
    v-bind:toggleLike="toggleLike"
  />
  <div v-intersection="postStore.fetchMoreImages" class="intersection">
    <!-- this is intersection observer -->
  </div>
</template>

<style scoped>
/* probably need to remove constant width and height */
.intersection {
  width: 600px;
  height: 200px;
  /* background-color: orange; */
}
</style>
