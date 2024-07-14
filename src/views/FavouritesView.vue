<script setup>
import { onMounted, computed } from "vue";
import { usePostStore } from "@/stores/PostStore";
import CardList from "@/components/CardList.vue";
const postStore = usePostStore();

function display() {
  console.log(favImages.value);
}

onMounted(() => {
  postStore.fetchFavourites();
});

const favImages = computed(() => {
  return postStore.favourites.map((el) => ({
    ...el,
    url: el.image.url,
    favourites: true,
  }));
});
</script>

<template>
  <h1>DISPLAY FAVOURITES HERE:</h1>
  <button @click="display">ALALSDKASJD</button>
  <CardList v-bind:images="favImages" />
</template>

<style scoped></style>
