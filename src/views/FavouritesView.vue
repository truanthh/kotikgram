<script setup>
import { onMounted, computed } from "vue";
import { usePostStore } from "@/stores/PostStore";
import CardList from "@/components/CardList.vue";
const postStore = usePostStore();

function debugging() {
  // console.log(postStore.favourites);
  console.log(postStore.favourites);
}

const toggleLike = (image) => {
  if (image.isLiked) {
    // const fav = postStore.favourites.find((fav) => fav.image.id === image.id);
    postStore.delFav(image);
  } else {
    postStore.addFav(image);
  }
};

onMounted(() => {
  postStore.fetchFavourites();
  // const favouritesImages = postStore.favourites.map((el) => el.image);
});
</script>

<template>
  <div class="info">
    <!-- <h1>DISPLAY FAVOURITES HERE:</h1> -->
  </div>
  <CardList
    v-bind:images="postStore.likedImages"
    v-bind:toggleLike="toggleLike"
  />
</template>

<style scoped>
.info {
  position: fixed;
  z-index: 100;
}
</style>
