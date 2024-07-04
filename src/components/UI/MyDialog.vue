<script setup>

defineOptions({
  name: 'MyDialog'
})

const emit = defineEmits(['update:show']);

const props = defineProps({
  show: Boolean,
  default: false
});

function hideDialog() {
  emit('update:show', false)
}

</script>

<template>
  <div class="dialog" v-if="show" @click.self="hideDialog">
    <div class="dialog__content">
      <slot></slot>
    </div>
  </div>

</template>

<style scoped>
.dialog {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  height: 100%;
  width: 100%;
  position: fixed;
  display: flex;
  background: rgba(0, 0, 0, 0.5)
}

.dialog__content {
  margin: auto;
  padding: 20px;
  background: orange;
  min-height: 150px;
  min-width: 400px;
  border-radius: 12px;
}
</style>
