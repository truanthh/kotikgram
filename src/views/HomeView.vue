<script setup>
import { usePostStore } from "@/stores/PostStore";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";

const postStore = usePostStore();

const posts = postStore.posts;

function print() {
  // console.log(postStore.posts);
}

function fetch() {
  // postStore.fetchPosts();
}

onMounted(() => {
  postStore.fetchPosts();
});
</script>

<template>
  <div class="abc" v-for="post in posts">
    <div>Название: {{ post.title }}</div>
    <div>Описание: {{ post.body }}</div>
  </div>
</template>

<style scoped>
.abc {
  width: full;
  height: 100px;
  background: none;
  border: solid darkgray 2px;
  border-radius: 12px;
  margin: 4px;
  padding: 4px;
}
</style>
