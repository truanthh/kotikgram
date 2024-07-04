<script setup>
import { ref } from "vue";

const long = ref(false);

function aleky() {
  long.value = !long.value;
}
</script>

<template>
  <div class="a">
    <div :class="long ? 'postlong' : 'postshort'" @click="aleky">
      <div :class="long ? 'textlong' : 'textshort'">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae
        perspiciatis itaque, tenetur vitae magni dolorem porro sapiente placeat
        velit deserunt harum autem eveniet obcaecati nulla explicabo esse totam
        fugit accusantium architecto officia? Dolores ea incidunt maxime,
        pariatur sunt ipsa dolore tempore ad saepe rerum cum distinctio eligendi
        soluta omnis iste accusamus odio maiores ducimus officia in tenetur
        ipsam? A labore sunt provident, maiores expedita beatae quae est porro
        ea quos. Voluptates eum et itaque minima error magnam dignissimos, sit
        recusandae.
      </div>

      <div class="more" v-show="!long">more</div>

      <!-- <div class="btn"></div> -->
    </div>
  </div>
</template>

<style scoped>
.a {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 800px;
  width: 100%;
  top: 60px;
  left: 0px;
  right: 0px;
  background-color: #f0f8ff;
  padding-top: 30px;
  gap: 30px;
  -webkit-line-clamp: 3;
  overflow: hidden;
}
/* .postlong { */
/*   display: flex; */
/*   padding: 10px 10px 10px 10px; */
/*   font-size: 20px; */
/*   font-weight: bold; */
/*   width: 600px; */
/*   max-height: 200px; */
/*   background-color: orange; */
/*   overflow: hidden; */
/* } */

/* .postsmall { */
/*   display: flex; */
/*   padding: 10px 10px 10px 10px; */
/*   font-size: 20px; */
/*   font-weight: bold; */
/*   width: 600px; */
/*   max-height: 40px; */
/*   background-color: orange; */
/*   overflow: hidden; */
/* } */

.postlong {
  display: flex;
  width: 600px;
  max-height: 200px;
  padding: 5px 10px 10px 10px;
  /* background-color: orange; */
  border: solid 2px gray;
  border-radius: 10px;
}

.postshort {
  /* flex: 1; */
  display: flex;
  width: 600px;
  max-height: 20px;
  padding: 5px 10px 10px 10px;
  /* background-color: orange; */
  overflow: hidden;
  border: solid 2px gray;
  border-radius: 10px;
}

.tip {
  background-color: gray;
  height: 15px;
  width: 550px;
  height: 15px;
}

.btn {
  background-color: green;
  width: 50px;
  height: 20px;
}

.textlong {
  font-size: 18px;
}

.textshort {
  font-size: 18px;
  max-width: 550px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.more {
  display: flex;
  justify-content: center;
  height: 30px;
  width: 50px;
  color: black;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
}
</style>
