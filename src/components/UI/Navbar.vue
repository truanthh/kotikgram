<script setup>
import { usePostStore } from "@/stores/PostStore";
import { onMounted, ref } from "vue";
const postStore = usePostStore();

defineOptions({
  name: "Navbar",
});

const iconCompass = "src/assets/icons/compass.svg";
const iconCompassWhite = "src/assets/icons/compass-white.svg";
const iconGithub = "src/assets/icons/github.svg";
const iconGithubWhite = "src/assets/icons/github-white.svg";
const iconMoon = "src/assets/icons/moon.svg";
const iconSun = "src/assets/icons/sun.svg";
</script>

<template>
  <div :class="{ light: !postStore.isDark, dark: postStore.isDark }">
    <div class="navbar">
      <div class="kotikgram">
        <h2 @click="$router.push('/home')">Kotikgram</h2>
      </div>

      <div class="navbar__btns">
        <img
          class="compass"
          :src="postStore.isDark ? iconCompassWhite : iconCompass"
        />
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
  </div>
</template>

<style scoped>
.navbar {
  z-index: 10;
  display: flex;
  position: fixed;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 55px;
  left: 0px;
  right: 0px;
  top: 0px;
  background-color: var(--navbar-bg);
  border-bottom: var(--navbar-bd);
}

.navbar__btns {
  display: flex;
  height: 25px;
  gap: 16px;
  -webkit-user-select: none;
}

.kotikgram {
  font-family: play;
  font-size: 14px;
  cursor: pointer;
  color: var(--kotikgram-color);
  /* margin-left: 10px; */
}

.light {
  --navbar-bg: white;
  --navbar-bd: solid 1px lightgray;
  --kotikgram-color: black;
}

.dark {
  --navbar-bg: #161716;
  --navbar-bd: solid 1px #3d3d3d;
  --kotikgram-color: white;
}

.compass {
  height: 25px;
  width: 25px;
  align-self: center;
  cursor: pointer;
}

.moon {
  height: 25px;
  width: 25px;
  align-self: center;
  cursor: pointer;
}

.github {
  height: 25px;
  width: 25px;
  align-self: center;
  cursor: pointer;
}
</style>
