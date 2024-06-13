<script setup>
const emit = defineEmits(['remove']);

const props = defineProps({
  post: {
    id: Number,
    title: String,
    body: String
  }
});

function removePost(post) {
  // console.log(`trying to remove post № ${post.id}`)
  emit('remove', post)
}
</script>

<template>
  <div class="post">
    <div class="posttext">
      <div> <span style="color: darkgray">postid</span>: {{ post.id }}</div>
      <div> Название: {{ post.title }} </div>
      <div> Описание: {{ post.body }} </div>
      <!-- <div> ID: {{ post.id }} </div> -->
    </div>
    <div class="post__btns">
      <my-button @click="$router.push(`/posts/${post.id}`)"> Открыть </my-button>
      <my-button @click="removePost(post)"> Удалить </my-button>
    </div>
  </div>
</template>

<style scoped>
.post {
  display: flex;
  justify-content: space-between;
  border: 2px solid darkgrey;
  border-radius: 10px;
  margin: 5px;
  width: 100%;
  height: auto;
  padding: 10px;
}

.posttext {
  margin: 2px 2px 2px 2px;
}

.post__btns {
  align-self: flex-end;
  display: flex;
  gap: 10px;
}
</style>
