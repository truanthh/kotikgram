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

const expDesc = computed(() => {
  return isExpanded.value ? "desclong" : "descshort";
});
</script>

<template>
  <div v-bind:class="{ light: !postStore.isDark, dark: postStore.isDark }">
    <div class="card">
      <div class="header">
        <div class="headertext" v-if="image">Lorem Ipsum</div>
        <!-- <div class="headertext" v-if="image">{{ image.breeds[0].name }}</div> -->
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

      <div class="description">
        <div :class="expDesc">
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

.light {
  --card-bg: white;
  --card-bd: solid 1px lightgray;
  --headertext-color: black;
  --desclongtext-color: black;
  --descshorttext-color: black;
}

.dark {
  --card-bg: #161716;
  --card-bd: solid 1px #3d3d3d;
  --headertext-color: white;
  --desclongtext-color: white;
  --descshorttext-color: white;
}

.card {
  width: 600px;
  max-height: 1000px;
  justify-content: start;
  text-align: center;
  border-radius: 4px;
  line-height: 0;
  background-color: var(--card-bg);
  border: var(--card-bd);
}

.card .headertext {
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
  color: var(--headertext-color);
}

.header {
  display: flex;
  height: 45px;
  justify-content: start;
  align-items: center;
  padding: 0px 0px 0px 20px;
}

img {
  height: 600px;
  width: 600px;
  object-fit: cover;
  margin: auto;
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
  max-width: 600px;
}
.desclong {
  display: flex;
  width: 600px;
  max-height: 100%;
  padding: 0px 16px 16px 16px;
}
.descshort {
  display: flex;
  justify-content: space-between;
  width: 600px;
  max-height: 25px;
  padding: 0px 16px 16px 16px;
  overflow: hidden;
}
.desclongtext {
  text-align: justify;
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
  color: var(--descshorttext-color);
}
.descshorttext {
  max-width: 540px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
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
  color: var(--descshorttext-color);
}
.more {
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
  color: gray;
  cursor: pointer;
}
</style>
