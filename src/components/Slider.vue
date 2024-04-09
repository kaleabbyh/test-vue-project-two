<template>
  <div class="q-pa-md" style="flex: 1; overflow: hidden; width: 100%">
    <div class="button-container">
      <ButtonComponent />
    </div>
  </div>
</template>

<script setup>
import ButtonComponent from "components/ButtonComponent.vue";
defineOptions({
  name: "SliderComponent",
});
</script>

<style scoped>
.button-container {
  display: flex;
  overflow: hidden;
  width: 100%;
  white-space: nowrap;
}
</style>
