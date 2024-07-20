<script setup>
import CardItem from "./CardItem.vue";

const props = defineProps({
  images: {
    type: Array,
    required: true,
  },
  reverse: Boolean,
});
</script>

<template>
  <div class="cardlist" v-show="images.length > 0">
    <CardItem
      v-for="image of images"
      v-bind:image="image"
      v-bind:key="image.id"
    />
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
</style>
