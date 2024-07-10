<script setup>
import { usePostStore } from "@/stores/PostStore";
import { onMounted } from "vue";
import CardList from "@/components/CardList.vue";
const postStore = usePostStore();

onMounted(() => {
  postStore.fetchImages();
  // console.log(postStore.images);
});
</script>

<template>
  <CardList v-bind:images="postStore.images" />
</template>

<style scoped>
/* * { */
/*   background-color: teal; */
/* } */
</style>
