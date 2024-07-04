<script setup>
defineOptions({
  name: 'MyInput'
})

// defineProps({
//   modelValue: [String, Number]
// });

// const emit = defineEmits(['update']);

// function updateInput(event) {
//   emit('update:modelValue', event.target.value)
// }

const model = defineModel()

function updateInput(event) {
  model.value = event.target.value
}


</script>

<template>
  <input class="inpt" type="text" v-model="model" @input="updateInput">
</template>

<style scoped>
/* sdaas */
.inpt {
  padding: 0px 10px 0px 10px;
}
</style>
