<script setup>
import CardItem from "./CardItem.vue";
import { onMounted } from "vue";

const props = defineProps({
  images: {
    type: Array,
    required: true,
  },
  toggleLike: {
    type: Function,
    required: true,
  },
});

onMounted(() => {
  // console.log(images);
});
</script>

<template>
  <div class="cardlist" v-show="images.length > 0">
    <CardItem
      v-for="image of images"
      v-bind:image="image"
      v-bind:toggleLike="toggleLike"
      v-bind:key="image.id"
    />
  </div>
  <div class="loading" v-show="images.length === 0">
    Pictures are loading... :)
  </div>
</template>

<style scoped>
.cardlist {
  /* background-color: #f0f8ff; */
  padding-top: 30px;
  padding: 1.25rem;
  margin-left: auto;
  margin-right: auto;
  max-width: 42rem;
  width: 100%;
  gap: 1.5rem;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}

@media (max-width: 640px) {
  .cardlist {
    gap: 0rem;
    padding: 0rem;
  }
}

.loading {
  font-size: 40px;
  color: red;
  text-align: center;
}
</style>
