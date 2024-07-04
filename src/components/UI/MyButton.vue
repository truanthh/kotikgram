<script setup>
defineOptions({
  name: "MyButton",
});
</script>

<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<style scoped>
.btn {
  padding: 5px 15px;
  border: 2px solid black;
  border-radius: 10px;
  background: none;
  cursor: pointer;
  font-size: 15px;
}
</style>
