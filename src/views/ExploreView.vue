<script setup>
import { usePostStore } from "@/stores/PostStore";
const postStore = usePostStore();

// const props = defineProps({
//   images: {
//     type: Array,
//     required: true,
//   },
// });

// onMounted(() => {
//   postStore.fetchImagesExplore();
// });
</script>

<template>
  <!-- <div class="test" v-for="image in postStore.images"> -->
  <!--   <img class="explore__img" :src="image.url" /> -->
  <!-- </div> -->
  <div class="grid">
    <div class="container" v-for="image in postStore.images">
      <img class="actualimg" :src="image.url" />
    </div>
  </div>

  <div v-intersection="postStore.loadMorePosts" class="intersection">
    <!-- this is intersection observer -->
  </div>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  max-width: 56rem;
  width: 100%;
  /* background-color: orange; */
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;
  gap: 0.5rem;
  padding: 1.25rem;
}

.actualimg {
  display: block;
  position: absolute;
  height: 100%;
  width: 100%;
  object-fit: cover;
  box-sizing: border-box;
  top: 0;
}

.container {
  padding-top: 100%;
  position: relative;
  display: block;
  width: 100%;
  box-sizing: border-box;
}

@media (max-width: 640px) {
  .grid {
    padding: 0rem;
    gap: 0.25rem;
  }
}
</style>
