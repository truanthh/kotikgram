<script setup>
import CardItem from "./CardItem.vue";
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
  <div :class="{ light: !postStore.isDark, dark: postStore.isDark }">
    <div class="cardlist" v-show="images.length > 0">
      <CardItem
        v-for="image of images"
        v-bind:image="image"
        v-bind:key="image.id"
      />
      <div v-intersection="postStore.loadMorePosts" class="intersection">
        <!-- this is intersection observer -->
      </div>
    </div>
  </div>
  <div class="loading" v-show="images.length === 0">
    Адыхай, фотокарточек сегодня больше не будет! :(
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

.light {
  --cardlist-bg: #f0f8ff;
}

.dark {
  --cardlist-bg: black;
}

.loading {
  font-size: 40px;
  color: red;
  text-align: center;
}

/* probably need to remove constant width and height */
.intersection {
  width: 600px;
  height: 200px;
  /* background-color: orange; */
}
</style>
