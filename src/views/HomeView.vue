<script setup>
import { usePostStore } from "@/stores/PostStore";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";

const postStore = usePostStore();

const { posts } = storeToRefs(postStore);

console.log(posts);

onMounted(() => {
  // postStore.fetchPosts;
});
</script>

<template>
  <div>
    <button @click="postStore.fetchPosts">Fetch Posts</button>
    <h3>{{ posts }}</h3>
  </div>
</template>

<style scoped></style>
