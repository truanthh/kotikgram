<script setup>
import { usePostStore } from "@/stores/PostStore";
import { onMounted, ref, computed } from "vue";
import { useRouter } from "vue-router";
import { getScrollPosition } from "@/scrollManager";
const postStore = usePostStore();

defineOptions({
  name: "Navbar",
});

const router = useRouter();

// function debug() {
//   console.log(router.currentRoute.value.name);
// }

const favClass = computed(() => {
  if (router.currentRoute.value.name === "favourites") {
    if (postStore.isDark) {
      return "favourites light";
    } else {
      return "favourites dark";
    }
  }

  return "favourites";
});

const iconNavHeart = new URL("@/assets/icons/nav-heart.svg", import.meta.url)
  .href;
const iconNavHeartWhite = new URL(
  "@/assets/icons/nav-heart-white.svg",
  import.meta.url,
).href;
const iconGithub = new URL("@/assets/icons/github.svg", import.meta.url).href;
const iconGithubWhite = new URL(
  "@/assets/icons/github-white.svg",
  import.meta.url,
).href;
const iconMoon = new URL("@/assets/icons/moon.svg", import.meta.url).href;
const iconSun = new URL("@/assets/icons/sun.svg", import.meta.url).href;
</script>

<template>
  <div class="navbar">
    <div class="navbar__content">
      <div class="navbar__logo">
        <h2 @click="$router.push('/home')">Kotikgram</h2>
      </div>

      <div class="navbar__btns">
        <div :class="favClass" @click="$router.push('/favourites')">
          <img
            class="favourites__img"
            :src="postStore.isDark ? iconNavHeartWhite : iconNavHeart"
          />
        </div>
        <!-- <img -->
        <!--   class="compass" -->
        <!--   :src="postStore.isDark ? iconCompassWhite : iconCompass" -->
        <!--   @click="$router.push('/explore')" -->
        <!-- /> -->
        <div class="moon" @click="postStore.toggleDark">
          <img class="moon__img" :src="postStore.isDark ? iconSun : iconMoon" />
        </div>

        <a
          href="https://github.com/truanthh/kotikgram"
          target="_blank"
          class="github"
        >
          <img
            class="github__img"
            :src="postStore.isDark ? iconGithubWhite : iconGithub"
          />
        </a>
      </div>
    </div>

    <!-- trying to preload this xd -->
    <div v-show="false" aria-hidden="true">
      <!-- <img :src="iconCompassWhite" /> -->
      <!-- <img :src="iconCompass" /> -->
      <img :src="iconNavHeartWhite" />
      <img :src="iconNavHeart" />
      <img :src="iconMoon" />
      <img :src="iconSun" />
      <img :src="iconGithub" />
      <img :src="iconGithubWhite" />
    </div>
  </div>
</template>

<style scoped>
.navbar {
  z-index: 2000;
  display: flex;
  position: sticky;
  top: 0;
  height: 3.5rem;
  width: 100%;
  justify-content: center;
  box-sizing: border-box;
  background-color: var(--navbar-bg);
  border-bottom: var(--navbar-bd);
}

.navbar__content {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  max-width: 56rem;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  box-sizing: border-box;
  /* background-color: gray; */
}

.navbar__btns {
  display: flex;
  height: 40px;
  gap: 1rem;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  box-sizing: border-box;
  align-items: center;
}

.navbar__logo {
  font-family: play;
  font-size: 14px;
  cursor: pointer;
  color: var(--navbarlogo-color);
  /* margin-left: 10px; */
}

/* .compass { */
/*   height: 25px; */
/*   width: 25px; */
/*   cursor: pointer; */
/*   margin: auto; */
/* } */

.favourites {
  height: 27px;
  width: 27px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.favourites.dark::before {
  content: "_";
  font-size: 22px;
  position: absolute;
  bottom: -6px;
  color: black;
}

.favourites.light::before {
  content: "_";
  font-size: 22px;
  position: absolute;
  bottom: -6px;
  color: white;
}

.favourites__img {
  height: 27px;
  width: 27px;
  cursor: pointer;
}

.moon {
  height: 27px;
  width: 27px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.moon__img {
  height: 23px;
  width: 23px;
  cursor: pointer;
}

.github {
  height: 27px;
  width: 27px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.github__img {
  height: 25px;
  width: 25px;
  cursor: pointer;
}

a {
  display: flex;
}
</style>
