<template>
  <div class="q-pa-md">
    <div class="q-carousel-wrapper">
      <q-btn
        push
        flat
        class="q-carousel-button"
        @click="$refs.carousel.previous()"
      >
        <img
          src="../assets/prev.png"
          alt=""
          style="height: 32px; width: 32px"
        />
      </q-btn>

      <div class="q-carousel-container bg-transparent">
        <div
          class="relative-position"
          swipeable
          animated
          :autoplay="autoplay"
          ref="carousel"
          infinite
          style="height: 408px; background: transparent"
        >
          <div
            v-for="n in 3"
            :key="n"
            :style="`left: ${(n - 1) * 25}%`"
            :class="`q-carousel-slide slide${n}`"
            :name="n"
          >
            <CardsComponent />
          </div>
        </div>
      </div>

      <q-btn push flat class="q-carousel-button" @click="$refs.carousel.next()">
        <img src="../assets/next.png" alt="" style="height: 32px; width: 32px"
      /></q-btn>
    </div>
  </div>
</template>

<script setup>
import CardsComponent from "components/CardsComponent.vue";
import { ref } from "vue";

defineOptions({
  name: "CarouselComponent",
});
</script>

<style scoped>
.q-carousel-wrapper {
  display: flex;
  align-items: center;
}

.q-carousel-container {
  flex: 1;
  /* position: relative; */
}

.q-carousel-slide {
  position: absolute;
  width: 50%;
  height: 100%;
}

.slide2 {
  z-index: 1;
  transform: scaleY(1.1); /* Increase the height of slide2 */
}
</style>
