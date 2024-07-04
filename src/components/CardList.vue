<script setup>
import Card from "./Card.vue";
import { onMounted } from "vue";
import { usePostStore } from "@/stores/PostStore";
const postStore = usePostStore();

const props = defineProps({
  images: {
    type: Array,
    required: true,
  },
});

onMounted(() => {
  // console.log(images);
});
</script>

<template>
  <div
    v-bind:class="postStore.isDark ? 'cardlist_dark' : 'cardlist_light'"
    v-show="images.length > 0"
  >
    <Card v-for="image in images" v-bind:image="image" v-bind:key="image.id" />
  </div>
  <h2 v-show="images.length === 0" style="color: red">
    Адыхай, фотокарточек сегодня больше не будет! :(
  </h2>
</template>

<style scoped>
.cardlist_light {
  position: absolute;
  /* margin: auto; */
  top: 60px;
  left: 0px;
  right: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f0f8ff;
  /* background-color: gray; */
  padding-top: 30px;
  gap: 30px;
}

.cardlist_dark {
  position: absolute;
  top: 60px;
  left: 0px;
  right: 0px;
  /* width: auto; */
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-color: #f0f8ff; */
  background-color: black;
  padding-top: 30px;
  gap: 30px;
}
</style>
