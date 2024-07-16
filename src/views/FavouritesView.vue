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
  console.log("this is toggleLike from FavouritesView!!");
};

onMounted(() => {
  postStore.fetchFavourites();
  // const favouritesImages = postStore.favourites.map((el) => el.image);
});

// const favouritesImages = computed(() => {
//   return postStore.favourites.map((el) => el.image);
// });

// const favouritesImages = () => {
//   return postStore.favourites.map((el) => el.image);
// };
</script>

<template>
  <div class="info">
    <!-- <h1>DISPLAY FAVOURITES HERE:</h1> -->
  </div>
  <CardList
    v-bind:images="postStore.favourites"
    v-bind:toggleLike="toggleLike"
  />
</template>

<style scoped>
.info {
  position: fixed;
  z-index: 100;
}
</style>
