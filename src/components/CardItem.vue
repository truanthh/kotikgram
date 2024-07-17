<script setup>
import { usePostStore } from "@/stores/PostStore";
import { ref, computed } from "vue";
import Popper from "vue3-popper";
const postStore = usePostStore();
const props = defineProps({
  image: {
    id: String,
    url: String,
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

const favAction = (image) => {
  return image.isLiked ? postStore.delFav(image) : postStore.addFav(image);
};

const shareAction = (image) => {
  navigator.clipboard.writeText(image.url);
};
</script>

<template>
  <div v-bind:class="{ light: !postStore.isDark, dark: postStore.isDark }">
    <div class="card">
      <div class="card__title" v-if="image">{{ image.id }}</div>
      <!-- <div class="card-titletext" v-if="image.breeds">{{ image.breeds[0].name }}</div> -->

      <div class="card__media">
        <img class="card__img" :src="image.url" />
      </div>

      <div class="card__btns">
        <div class="icon" @click="favAction(image)">
          <img
            class="hoveron"
            v-show="!postStore.isDark && !image.isLiked"
            src="@/assets/icons/heart.svg"
          />
          <img
            class="hoveron"
            v-show="postStore.isDark && !image.isLiked"
            src="@/assets/icons/heart-white.svg"
          />
          <!-- <img src="@/assets/icons/heart.svg" /> -->
          <Transition name="bounce">
            <img v-show="image.isLiked" src="@/assets/icons/heart-filled.svg" />
          </Transition>
        </div>
        <Popper placement="top" zIndex="2">
          <div class="icon" ref="shareBtn" @click="shareAction(image)">
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
          <template #content>
            <div class="tooltip">
              <div class="tooltip__text">Link copied!</div>
            </div>
          </template>
        </Popper>
      </div>

      <div class="description">
        <div :class="descExpandable">
          <div :class="isExpanded ? 'card-desclongtext' : 'card-descshorttext'">
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
  --card-titletext-color: black;
  --card-desclongtext-color: black;
  /* --card-descshorttext-color: black; */
}

.dark {
  --card-bg: #161716;
  --card-bd: solid 1px #262626;
  --card-titletext-color: white;
  --card-desclongtext-color: white;
  /* --card-descshorttext-color: white; */
}

.tooltip {
  background-color: #333;
  color: white;
  font-weight: bold;
  padding: 4px 8px;
  font-size: 13px;
  border-radius: 4px;
  width: 75px;
}

.card {
  box-sizing: border-box;
  line-height: inherit;
  border-radius: 0.25rem;
  border-width: 1px;
  background-color: var(--card-bg);
  border: var(--card-bd);
}

.card__media {
  position: relative;
  width: 100%;
  padding-top: 100%;
  line-height: inherit;
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
  color: var(--card-titletext-color);
  /* background-color: orange; */
}

.card__btns {
  display: flex;
  height: 45px;
  align-items: center;
  /* padding: 0.5rem 0.5rem 0rem 0.5rem; */
  margin: 0px 16px 0px 16px;
  box-sizing: border-box;
  gap: 8px;
  -webkit-user-select: none;
  /* background-color: orange; */
}
.icon {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0px 8px;
  /* padding: 0.5rem; */
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
  /* align-items: center; */
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
.card-desclongtext {
  color: var(--card-descshorttext-color);
  text-align: start;
  font-size: 14px;
  text-overflow: ellipsis;
  overflow: hidden;
  max-height: 290px;
  white-space: pre-line;
  /* background-color: gray; */
}
.card-descshorttext {
  color: var(--card-descshorttext-color);
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

@media (max-width: 640px) {
  .card {
    border: none;
  }
}
</style>
