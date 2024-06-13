<script setup>
import PostItem from './PostItem.vue'

const emit = defineEmits(['remove']);

const props = defineProps({
  posts: {
    type: Array,
    required: true
  }
});

</script>

<template>
  <div v-show="posts.length > 0">
    <h3> Список постов </h3>
    <transition-group name="post-list">
      <PostItem v-for="post in posts" v-bind:post="post" v-bind:key="post.id" @remove="$emit('remove', post)" />
    </transition-group>
  </div>
  <h2 v-show="posts.length === 0" style="color: red">
    Список постов пуст!
  </h2>
</template>

<style scoped>
.post-list-item {
  display: inline-block;
  margin-right: 10px;
}

.post-list-enter-active,
.post-list-leave-active {
  transition: all 0.3s ease;
}

.post-list-enter-from,
.post-list-leave-to {
  opacity: 0;
  transform: translateX(130px);
}

.post-list-move {
  transition: transform 0.4s ease;
}
</style>
