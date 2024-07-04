<script setup>
import { usePostStore } from "@/stores/PostStore";
import { ref } from "vue";
const postStore = usePostStore();

const isDescFull = ref(true);

const expandDesc = () => {
  isDescFull.value = !isDescFull.value;
};

const props = defineProps({
  image: {
    id: String,
    url: String,
    favourite: Object,
    breeds: Array,
  },
});
</script>

<template>
  <div v-bind:class="postStore.isDark ? 'card_dark' : 'card_light'">
    <div class="header">
      <div class="headertext" v-if="image">{{ image.breeds[0].name }}</div>
    </div>

    <img :src="image.url" />

    <div class="card__btns">
      <div class="icon" @click="postStore.addToFav(image)">
        <img
          class="hoveron"
          v-show="!postStore.isDark && !image.favourites"
          src="@/assets/icons/heart.svg"
        />
        <img
          class="hoveron"
          v-show="postStore.isDark && !image.favourites"
          src="@/assets/icons/heart-white.svg"
        />
        <!-- <img src="@/assets/icons/heart.svg" /> -->
        <Transition name="bounce">
          <img
            v-show="image.favourites"
            src="@/assets/icons/heart-filled.svg"
          />
        </Transition>
      </div>
      <div class="icon">
        <img
          class="hoveron"
          v-show="!postStore.isDark"
          src="@/assets/icons/share.svg"
        />
        <img
          class="hoveron"
          v-show="postStore.isDark"
          src="@/assets/icons/share-white.svg"
        />
      </div>
    </div>

    <div :class="isDescFull ? 'desc' : 'desc-small'">
      <div class="more" @click="expandDesc">more</div>
      <div class="desctext">{{ image.breeds[0].description }}</div>
    </div>
  </div>
</template>

<style scoped>
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
/* .bounce-leave-active { */
/*   animation: bounce-in 0.5s reverse; */
/* } */
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
.card_light {
  /* display: flex; */
  /* flex-direction: column; */
  width: 600px;
  height: 1000px;
  /* margin: 0px 0px 0px 0px; */
  /* margin: auto; */
  justify-content: start;
  text-align: center;
  background-color: white;
  border-radius: 4px;
  border: solid 1px lightgray;
  line-height: 0;
  /* line height is cuz theres a weird 
   * gap below the picture otherwise */
}
.card_dark {
  display: flex;
  flex-direction: column;
  /* margin: 0px 0px 0px 0px; */
  width: 600px;
  height: 800px;
  justify-content: center;
  text-align: center;
  background-color: #161716;
  border-radius: 4px;
  border: solid 1px #3d3d3d;
}
.card_light .headertext {
  font-size: 14px;
  font-family:
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    "Open Sans",
    "Helvetica Neue",
    sans-serif;
}
.card_dark .headertext {
  font-size: 14px;
  font-family:
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    "Open Sans",
    "Helvetica Neue",
    sans-serif;
  color: white;
}
.card_light .desctext {
  font-size: 14px;
  font-family:
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    "Open Sans",
    "Helvetica Neue",
    sans-serif;
  text-align: left;
  margin: 0px 10px 10px 10px;
}
.card_dark .desctext {
  font-size: 14px;
  font-family:
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    "Open Sans",
    "Helvetica Neue",
    sans-serif;
  text-align: left;
  margin: 0px 10px 10px 10px;
  color: white;
}
.header {
  display: flex;
  height: 45px;
  justify-content: start;
  align-items: center;
  padding: 0px 0px 0px 20px;
  background-color: orange;
}
.desc {
  display: flex;
  flex-direction: column;
  justify-content: center;
  line-height: 1.5;
  font-size: 12px;
  /* background-color: orange; */
}
/* .desc-small { */
/*   height: 20px; */
/*   width: 600px; */
/*   flex-direction: column; */
/*   justify-content: center; */
/*   font-size: 12px; */
/* } */
.more {
  font-size: 16px;
}
.card__btns {
  display: flex;
  height: 45px;
  align-items: center;
  /* background-color: gray; */
  padding-left: 15px;
  gap: 8px;
  -webkit-user-select: none;
}
.icon {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0px 8px;
  height: 30px;
  width: 30px;
  cursor: pointer;
  /* background-color: gray; */
}
.icon img {
  position: absolute;
  height: 22px;
  width: 22px;
}
.icon:hover .hoveron {
  opacity: 0.5;
}
img {
  /* display: flex; */
  /* width: 100%; */
  /* height: 100%; */
  height: 600px;
  width: 600px;
  object-fit: cover;
  margin: auto;
  /* margin-bottom: 0px; */
}
</style>
