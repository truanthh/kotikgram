<script setup>
import { onMounted, computed } from "vue";
import { usePostStore } from "@/stores/PostStore";
import CardList from "@/components/CardList.vue";
const postStore = usePostStore();

function syncFav() {
  console.log(postStore.favourites);
  console.log(postStore.images);
}

onMounted(() => {
  postStore.fetchFavourites();
});

// restucturing an object to make sure it fits cardlist component
const favImages = computed(() => {
  return postStore.favourites.map((el) => ({
    ...el,
    url: el.image.url,
    fav_id: el.id,
    isLiked: true,
  }));
});
</script>

<template>
  <div class="info">
    <h1>DISPLAY FAVOURITES HERE:</h1>
    <button @click="syncFav">SYNC FAVOURITES</button>
  </div>
  <CardList v-bind:images="favImages" />
</template>

<style scoped>
.info {
  position: fixed;
  z-index: 100;
}
</style>
