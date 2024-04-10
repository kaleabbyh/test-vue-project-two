<template>
  <div
    style="
      min-height: 100vh;
      background: linear-gradient(180deg, #26c2b9 0%, #288be7 100%);
    "
    class="q-pb-xl"
  >
    <div class="row w-full justify-between items-center">
      <div
        class="flex justify-end items-center text-white q-pa-md"
        style="width: 25%"
        id="sidebar"
      ></div>

      <div :style="{ width: screenWidth >= 500 ? '75%' : '100%' }">
        <HeaderComponent />

        <div
          class="w-full flex justify-center items-center text-white"
          style="font-family: 'Poppins', sans-serif; font-weight: 900"
          id="main"
        >
          <div class="col q-ml-md" style="flex: 1">
            <q-btn
              flat
              class="flex justify-start items-center bg-white q-mt-xl text-bold fade-in"
              :style="{ opacity: showButton ? 1 : 0 }"
              style="
                border-radius: 8px;
                color: #40e2e8;
                font-size: 16px;
                line-height: 27px;
                transition: opacity 0.3s ease-out;
              "
            >
              풀타임, 파트타임
            </q-btn>
            <br />
            <div
              class="text-bold fade-in-up"
              style="font-size: 48px; line-height: 62.4px"
            >
              최고의 실력을 가진 <br />
              외국인 인재를 찾고 계신가요?
            </div>
            <br />
            <div class="fade-in-up" style="font-size: 24px; line-height: 34px">
              법률 및 인사관리 부담없이 <br />
              1주일 이내에 원격으로 채용해보세요.
            </div>
            <br />

            <div
              class="fade-in-up"
              style="
                font-size: 18px;
                line-height: 27px;
                text-decoration: underline;
              "
            >
              개발자가 필요하신가요?
            </div>
            <div class="row flex justify-beteween q-mt-lg">
              <q-card class="my-card bg-transparent" flat>
                <q-card-section>
                  <hr style="border: none; border-bottom: 1px solid #ffffff" />
                  <div style="font-size: 18px; line-height: 27px; opacity: 0.9">
                    평균 월 120만원
                  </div>
                  <div style="font-size: 16px; line-height: 24px; opacity: 0.8">
                    임금을 해당 국가를 기준<br />
                    으로 계산합니다.
                  </div>
                </q-card-section>
              </q-card>
              <q-card class="my-card bg-transparent" flat>
                <q-card-section>
                  <hr style="border: none; border-bottom: 1px solid #ffffff" />
                  <div style="font-size: 18px; line-height: 27px">
                    최대 3회 인력교체
                  </div>
                  <div style="font-size: 16px; line-height: 24px; opacity: 0.8">
                    막상 채용해보니 맞지않 <br />
                    아도 걱정하지 마세요.
                  </div>
                </q-card-section>
              </q-card>
              <q-card class="my-card bg-transparent" flat>
                <q-card-section>
                  <hr style="border: none; border-bottom: 1px solid #ffffff" />
                  <div style="font-size: 18px; line-height: 27px">
                    평균 3일, 최대 10일
                  </div>
                  <div style="font-size: 16px; line-height: 24px; opacity: 0.8">
                    급하게 사람이 필요한경 <br />
                    우에도 빠른 채용이 가능<br />
                    합니다.
                  </div>
                </q-card-section>
              </q-card>
            </div>
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
                  $
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
import CarouselComponent from "components/CarouselComponent.vue";
import SliderComponent from "components/Slider.vue";
import FooterComponent from "components/FooterComponent.vue";
import { ref, onMounted, onBeforeMount, watch } from "vue";

const showButton = ref(false);
const screenWidth = ref(window.innerWidth);

onMounted(() => {
  setTimeout(() => {
    showButton.value = true;
  }, 300);
});

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
  animation-delay: 300ms;
  animation-fill-mode: forwards;
}

.fade-in-up {
  animation-name: fadeInUp;
  animation-duration: 500ms;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
