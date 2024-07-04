<script setup>
// const emit = defineEmits(["remove"]);
import { usePostStore } from "@/stores/PostStore";
const postStore = usePostStore();

const props = defineProps({
  post: {
    id: Number,
    title: String,
    body: String,
  },
});

// function removePost(post) {
//   emit("remove", post);
// }
</script>

<template>
  <div class="post">
    <div class="posttext">
      <div><span style="color: darkgray">postid</span>: {{ post.id }}</div>
      <div>Название: {{ post.title }}</div>
      <div>Описание: {{ post.body }}</div>
      <!-- <div> ID: {{ post.id }} </div> -->
    </div>
    <div class="post__btns">
      <my-button @click="$router.push(`/posts/${post.id}`)">
        Открыть
      </my-button>
      <my-button @click="postStore.removePost(post)"> Удалить </my-button>
    </div>
  </div>
</template>

<style scoped>
.post {
  display: flex;
  justify-content: space-between;
  width: auto;
  height: auto;
  border: 2px solid darkgrey;
  border-radius: 10px;
  margin: 10px;
  padding: 10px;
  font-size: 20px;
  gap: 50px;
}

.posttext {
  margin: 2px 2px 2px 2px;
  /* background-color: orange; */
}

.post__btns {
  align-self: flex-end;
  display: flex;
  gap: 10px;
}
</style>
