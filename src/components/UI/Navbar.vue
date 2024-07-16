<script setup>
import { usePostStore } from "@/stores/PostStore";
import { onMounted, ref } from "vue";
const postStore = usePostStore();

defineOptions({
  name: "Navbar",
});

const debugging = () => {
  console.log(postStore.allImages);
  // console.log(postStore.favourites);
  console.log(postStore.likedImages);
};

const iconCompass = "src/assets/icons/compass.svg";
const iconCompassWhite = "src/assets/icons/compass-white.svg";
const iconGithub = "src/assets/icons/github.svg";
const iconGithubWhite = "src/assets/icons/github-white.svg";
const iconMoon = "src/assets/icons/moon.svg";
const iconSun = "src/assets/icons/sun.svg";
</script>

<template>
  <div class="navbar">
    <div class="navbar__content">
      <div class="navbar__logo">
        <h2 @click="$router.push('/home')">Kotikgram</h2>
      </div>

      <div class="navbar__btns">
        <button @click="debugging">DEBUG</button>

        <img
          class="compass"
          :src="postStore.isDark ? iconCompassWhite : iconCompass"
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

        <a href="http://github.com/truanthh" target="_blank">
          <img
            class="github"
            :src="postStore.isDark ? iconGithubWhite : iconGithub"
          />
        </a>
      </div>
    </div>

    <!-- trying to preload this xd -->
    <div v-show="false" aria-hidden="true">
      <img :src="iconCompassWhite" />
      <img :src="iconCompass" />
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

.compass {
  height: 25px;
  width: 25px;
  cursor: pointer;
  margin: auto;
}

.moon {
  height: 25px;
  width: 25px;
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
