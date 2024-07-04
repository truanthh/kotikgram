<script setup>
import { usePostStore } from "@/stores/PostStore";
const postStore = usePostStore();

defineOptions({
  name: "Navbar",
});
</script>

<template>
  <div class="navbar">
    <div class="kotikgram">
      <h2 @click="$router.push('/home')">Kotikgram</h2>
    </div>

    <div class="navbar__btns">
      <img src="@/assets/icons/compass.svg" class="less-saturation" />
      <img src="@/assets/icons/moon.svg" @click="postStore.toggleDark" />

      <a href="http://github.com/truanthh" target="_blank">
        <img src="@/assets/icons/github-mark/github-mark.png" />
      </a>
      <!-- <my-button @click="$router.push('/pics')"> Pics </my-button> -->
      <!-- <my-button @click="$router.push('/home')"> Home </my-button> -->
      <my-button @click="$router.push('/about')"> About </my-button>
    </div>
  </div>
</template>

<style scoped>
.navbar {
  z-index: 100;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 60px;
  background-color: white;
  border: solid 1px lightgray;
  position: fixed;
  left: 0px;
  right: 0px;
  top: 0px;
}

img {
  height: 25px;
  align-self: center;
  width: 25px;
  cursor: pointer;
}

.less-saturation {
  height: 23px;
  width: 23px;
  filter: invert(18%);
}

a {
  display: flex;
  align-self: center;
  /* background-color: black; */
}

.navbar__btns {
  display: flex;
  height: 25px;
  gap: 16px;
  /* background-color: gray; */
}

.kotikgram {
  font-family: play;
  font-size: 14px;
  cursor: pointer;
  /* margin-left: 10px; */
}
</style>
