<script setup>
import { usePostStore } from "@/stores/PostStore";
import { onMounted, ref } from "vue";
import { getScrollPosition } from "@/scrollManager";
const postStore = usePostStore();

defineOptions({
  name: "Navbar",
});

const debugging = () => {
  console.log(postStore.isDark);
};

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
        <!-- <button @click="debugging">DEBUG</button> -->

        <img
          class="favourites"
          :src="postStore.isDark ? iconNavHeartWhite : iconNavHeart"
          @click="$router.push('/favourites')"
        />
        <!-- <img -->
        <!--   class="compass" -->
        <!--   :src="postStore.isDark ? iconCompassWhite : iconCompass" -->
        <!--   @click="$router.push('/explore')" -->
        <!-- /> -->
        <img
          class="moon"
          :src="postStore.isDark ? iconSun : iconMoon"
          @click="postStore.toggleDark"
        />

        <a href="https://github.com/truanthh/kotikgram" target="_blank">
          <img
            class="github"
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
  /* background-color: orange; */
  box-sizing: border-box;
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
  cursor: pointer;
  margin: auto;
}

.moon {
  height: 23px;
  width: 23px;
  cursor: pointer;
  margin: auto;
}

.github {
  height: 25px;
  width: 25px;
  cursor: pointer;
  margin: auto;
}

a {
  display: flex;
}
</style>
