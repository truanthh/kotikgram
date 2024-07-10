<script setup>
import { usePostStore } from "@/stores/PostStore";
import { ref, computed } from "vue";

const postStore = usePostStore();

const props = defineProps({
  image: {
    id: String,
    url: String,
    favourite: Object,
    breeds: Array,
  },
});

const isExpanded = ref(false);

const expandDesc = () => {
  isExpanded.value = !isExpanded.value;
};

const descExpandable = computed(() => {
  return isExpanded.value ? "desclong" : "descshort";
});
</script>

<template>
  <div v-bind:class="{ light: !postStore.isDark, dark: postStore.isDark }">
    <div class="card">
      <div class="card__title" v-if="image">Lorem Ipsum</div>
      <!-- <div class="titletext" v-if="image.breeds">{{ image.breeds[0].name }}</div> -->

      <div class="card__media">
        <img class="card__img" :src="image.url" />
      </div>

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

      <div class="description">
        <div :class="descExpandable">
          <div :class="isExpanded ? 'desclongtext' : 'descshorttext'">
            <!-- {{ image.breeds[0].description }} -->
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nisi
            itaque delectus a esse dolores id quaerat accusamus deserunt minima
            consequatur, tempore ipsa reiciendis expedita repellendus
            consequuntur quidem odio mollitia suscipit beatae libero explicabo?
            Cupiditate ipsam qui, soluta corporis illo eum similique fugit
            suscipit vel voluptatem sunt! Sapiente, odit quibusdam.
          </div>

          <div class="more" v-show="!isExpanded" @click="expandDesc">
            &nbsp;more
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
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

.light {
  --card-bg: white;
  --card-bd: solid 1px lightgray;
  --titletext-color: black;
  --desclongtext-color: black;
  --descshorttext-color: black;
}

.dark {
  --card-bg: #161716;
  --card-bd: solid 1px #3d3d3d;
  --titletext-color: white;
  --desclongtext-color: white;
  --descshorttext-color: white;
}

.card {
  box-sizing: border-box;
  line-height: inherit;
  border-radius: 0.25rem;
  border-width: 1px;
  /* background-color: orange; */
  /* position: relative; */
  /* width: 100%; */
  /* padding-top: 100%; */
  /* margin: 0 auto; */
  /* max-width: 600px; */
  /* max-height: 1000px; */
  /* justify-content: start; */
  /* text-align: center; */
  background-color: var(--card-bg);
  border: var(--card-bd);
}

.card__media {
  position: relative;
  width: 100%;
  /* box-sizing: border-box; */
  padding-top: 100%;
  /* margin: 0 auto; */
  /* max-width: 600px; */
  /* max-height: 1000px; */
  /* justify-content: start; */
  line-height: inherit;
  /* text-align: center; */
  /* border-radius: 4px; */
  /* background-color: var(--card-bg); */
  /* border: var(--card-bd); */
}

.card__img {
  position: absolute;
  top: 0;
  display: block;
  height: 100%;
  width: 100%;
  max-width: 100%;
  margin-top: 0;
  object-fit: cover;
  box-sizing: border-box;
  /* z-index: 2; */
}

.card__title {
  box-sizing: border-box;
  padding: 1rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  z-index: 2;
  color: var(--titletext-color);
  /* background-color: orange; */
}

.card__btns {
  display: flex;
  height: 45px;
  align-items: center;
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
}
.icon img {
  position: absolute;
  height: 22px;
  width: 22px;
}
.icon:hover .hoveron {
  opacity: 0.5;
}
.description {
  display: flex;
  line-height: 1.3;
  width: 100%;
  /* max-width: 600px; */
  /* background-color: orange; */
}
.desclong {
  display: flex;
  width: 100%;
  max-height: 100%;
  padding: 0px 16px 16px 16px;
}
.descshort {
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-height: 25px;
  padding: 0px 16px 16px 16px;
  overflow: hidden;
  /* background-color: teal; */
}
.desclongtext {
  color: var(--descshorttext-color);
  text-align: start;
  font-size: 14px;
  text-overflow: ellipsis;
  overflow: hidden;
  max-height: 290px;
  white-space: pre-line;
}
.descshorttext {
  color: var(--descshorttext-color);
  max-width: 540px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 14px;
}
.more {
  font-size: 14px;
  color: gray;
  cursor: pointer;
}
</style>
