<script setup>
defineOptions({
  name: 'MySelect'
});

const props = defineProps({
  options: {
    type: Array,
    default: () => []
  },
  selectedOption: String
},);

const model = defineModel()

function changeOption(event) {
  model.value = event.target.value
}

</script>

<template>
  <div>
    <select class="slct" v-model="model" @change="changeOption">
      <option disabled value=""> Выберите из списка </option>
      <option v-for="option in options" v-bind:key="option.value" v-bind:value="option.value"> {{ option.name }}
      </option>
    </select>
  </div>
</template>

<style scoped>
.slct {
  width: 200px;
  height: 30px;
  padding: 0px 0px 0px 8px;
  border: 2px solid black;
  border-radius: 10px;
  background: none;
}
</style>
