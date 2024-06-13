<script setup>
import { ref } from 'vue'

const emit = defineEmits(['create']);

const inputPost = ref({
  id: Date.now(),
  title: '',
  body: ''
})

function createPost() {
  let newPost = {}
  Object.assign(newPost, inputPost.value)

  emit('create', newPost)

  inputPost.value.title = ''
  inputPost.value.body = ''
}

</script>

<template>
  <div>
    <div class="header"> Создание поста </div>
    <form @submit.prevent>
      <my-input v-focus class="my-input" v-model="inputPost.title" type="text" placeholder="название" />
      <my-input class="my-input" v-model="inputPost.body" type="text" placeholder="описание" />
      <!-- <input class="input" @input="body = $event.target.value" type="text" placeholder="описание"> -->
      <my-button class="my-button" @click="createPost"> Создать пост </my-button>
    </form>
  </div>
</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
}

.header {
  margin-left: 5px;
  margin-bottom: 6px;
  font-size: 27px;
  font-weight: bold;
}

.my-input {
  width: 100%;
  border: 2px solid darkgrey;
  border-radius: 10px;
  margin-top: 2px;
  padding: 10px;
}

.my-button {
  align-self: flex-end;
  margin-top: 10px;
}
</style>
