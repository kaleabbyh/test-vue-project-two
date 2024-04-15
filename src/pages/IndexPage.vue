<template>
  <div
    style="
      min-height: 100vh;
      background: linear-gradient(180deg, #26c2b9 0%, #288be7 100%);
    "
    class="q-pb-xl"
  >
    <div class="row w-full justify-center items-center">
      <div
        class="flex justify-end items-center text-white q-pa-md"
        style="width: 25%"
        id="sidebar"
      ></div>

      <div :style="{ width: screenWidth >= 500 ? '75%' : '100%' }">
        <HeaderComponent />

        <div
          class="w-full flex justify-center items-start text-white"
          style="font-family: 'Poppins', sans-serif; font-weight: 900"
          id="main"
        >
          <div class="col q-ml-md" style="flex: 1">
            <RightCard />
          </div>

          <div class="col justify-center items-center" style="flex: 1">
            <div class="row justify-center items-center q-mb-xl">
              <q-btn
                flat
                class="row flex justify-center items-center bg-white q-mt-xl text-bold"
                style="
                  border-radius: 8px;
                  color: #00c696;
                  font-size: 18px;
                  line-height: 27px;
                "
              >
                <div
                  class="q-pa-xsm q-mr-sm"
                  style="
                    border-radius: 50%;
                    width: 26px;
                    height: 26px;
                    background-color: #bbf3d2;
                  "
                >
                  <q-icon name="fa-sharp fa-solid fa-dollar-sign" size="xs" />
                </div>

                <span> 월100만원 </span>
              </q-btn>
            </div>

            <CarouselComponent />
          </div>
        </div>

        <div
          class="row w-full flex justify-center items-center text-white"
          id="slidder"
          style="font-family: 'Poppins', sans-serif; font-weight: 900"
        >
          <SliderComponent />
        </div>

        <div
          class="row flex justify-center items-center text-white q-ma-md"
          id="smallblock"
        >
          <div class="col flex justify-start items-center">
            <div class="row flex justify-center items-center q-mb-sm">
              <div
                class="bg-white flex justify-center items-center q-mx-md"
                style="height: 20px; width: 20px; border-radius: 5px"
              >
                <q-icon name="check" color="black" />
              </div>
              <div style="font-size: 16px; font-weight: 900">한국어 능력</div>
            </div>

            <div class="row flex justify-center items-center">
              <div
                class="bg-white flex justify-center items-center q-mx-md"
                style="height: 20px; width: 20px; border-radius: 5px"
              >
                <q-icon name="check" color="black" />
              </div>
              <div style="font-size: 16px; font-weight: 900">겸업 여부</div>
            </div>
          </div>

          <div class="col flex justify-start items-center">
            <div class="row flex justify-center items-center q-mb-sm">
              <div
                class="bg-white flex justify-center items-center q-mx-md"
                style="height: 20px; width: 20px; border-radius: 5px"
              >
                <q-icon name="check" color="black" />
              </div>
              <div style="font-size: 16px; font-weight: 900">
                업무 수행 능력
              </div>
            </div>
            <div class="row flex justify-center items-center">
              <div
                class="bg-white flex justify-center items-center q-mx-md"
                style="height: 20px; width: 20px; border-radius: 5px"
              >
                <q-icon name="check" color="black" />
              </div>
              <div style="font-size: 16px; font-weight: 900">평판 조회</div>
            </div>
          </div>
        </div>
        <div
          class="row flex justify-center items-center q-ma-lg"
          id="smallblock"
          style="
            border-radius: 8px;
            color: #fbff23;
            font-size: 18px;
            line-height: 27px;
            text-decoration: underline;
          "
        >
          개발자가 필요하신가요?
        </div>
      </div>
    </div>
  </div>

  <div class="row" style="background-color: #fbfbfb">
    <div style="width: 25%" id="sidebar"></div>
    <div :style="{ width: screenWidth >= 500 ? '75%' : '100%' }">
      <FooterComponent />
    </div>
  </div>
</template>

<script setup>
import HeaderComponent from "components/HeaderComponent.vue";
import RightCard from "components/RightCard.vue";
import CarouselComponent from "components/CarouselComponent.vue";
import SliderComponent from "components/Slider.vue";
import FooterComponent from "components/FooterComponent.vue";
import { ref, onMounted, onBeforeMount, watch } from "vue";

const screenWidth = ref(window.innerWidth);

onBeforeMount(() => {
  watch(
    () => window.innerWidth,
    (width) => {
      screenWidth.value = width;
    }
  );
});

defineOptions({
  name: "IndexPage",
});

const slide = ref(1);
</script>




<style>
@media (max-width: 500px) {
  #sidebar {
    display: none;
  }
  #slidder {
    display: none;
  }
  #main {
    flex-direction: column;
    justify-content: center;
  }
}

@media (min-width: 500px) {
  #smallblock {
    display: none;
  }
}

.fade-in {
  animation-name: fade;
  animation-duration: 1s;
  /* animation-delay: 500ms; */
  animation-fill-mode: forwards;
}

.fade-in-up {
  animation-name: fadeInUp;
  animation-duration: 500ms;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
