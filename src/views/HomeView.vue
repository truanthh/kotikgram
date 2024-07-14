<script setup>
import { usePostStore } from "@/stores/PostStore";
import { onMounted } from "vue";
import CardList from "@/components/CardList.vue";

const postStore = usePostStore();

onMounted(() => {
  // postStore.initializeImages();
  // postStore.fetchImages();
});
</script>

<template>
  <!-- <button @click="postStore.saveData">save data</button> -->
  <CardList v-bind:images="postStore.images" />
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
