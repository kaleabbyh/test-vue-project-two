<template>
  <q-btn
    v-for="(card, index) in cards"
    :key="card"
    :class="['slide-button', `slide-button-${index}`]"
    :style="`animation-delay: ${(n - 1) * 5}s`"
    flat
    class="row flex justify-start items-center q-mt-xl text-bold"
    style="
      border-radius: 8px;
      color: white;
      font-size: 18px;
      line-height: 27px;
      background-color: rgba(255, 255, 255, 0.2);
    "
  >
    <q-btn
      flat
      style="
        border-radius: 4px;
        line-height: 27px;
        height: 56px;
        width: 56px;
        background-color: rgba(255, 255, 255, 0.4);
      "
      class="q-mr-md"
    >
      <q-icon :name="card.icon" size="32px"
    /></q-btn>

    <span>{{ card.text }} </span>
  </q-btn>
</template>

<script setup>
defineOptions({
  name: "ButtonComponent",
});

const cards = [
  { icon: "image", text: "월100만원" },
  { icon: "phone", text: "퍼블리셔" },
  { icon: "camera", text: "캐드원(제도사)" },
  { icon: "camera", text: "해외 세일즈" },
  { icon: "camera", text: "월100만원" },
  { icon: "camera", text: "월100만원" },
];
</script>

<style lang="scss" scoped>
.slide-button {
  width: 332px;
  height: 88px;
  margin-right: 10px;
  opacity: 0;
  animation: slideButton 5s linear infinite;
}

@keyframes slideButton {
  0% {
    transform: translateX(332px);
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  80% {
    opacity: 1;
  }
  100% {
    transform: translateX(-332px);
    opacity: 0;
  }
}
</style>
