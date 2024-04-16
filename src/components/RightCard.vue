<template>
  <div>
    <q-btn
      flat
      class="flex justify-start items-center q-mt-xl text-bold fade-in"
      :style="{
        opacity: showButton ? 1 : 0,
        backgroundColor: buttonBackgroundColor,
      }"
      style="
        border-radius: 8px;
        color: #40e2e8;
        font-size: 16px;
        line-height: 27px;
        transition: opacity 0.3s ease-out;
        position: relative;
      "
    >
      풀타임, 파트타임
      <q-icon
        name="bi-caret-down-fill"
        color="white"
        size="lg"
        style="
          position: absolute;
          left: 1px;
          top: 100%;
          transform: translate(0, -50%);
        "
      />
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
      style="font-size: 18px; line-height: 27px; text-decoration: underline"
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
</template>

<script setup>
import { ref, onMounted, computed, onBeforeMount, watch } from "vue";
const showButton = ref(false);
onMounted(() => {
  setTimeout(() => {
    showButton.value = true;
  }, 500);
});
defineOptions({
  name: "RightCard",
});

const screenWidth = ref(window.innerWidth);
const buttonBackgroundColor = "#ffffff";
// });
// const buttonBackgroundColor = computed(() => {
//   return screenWidth.value < 768 ? "#40e2e8" : "#ffffff";
// });

onBeforeMount(() => {
  window.addEventListener("resize", handleResize);
});

const handleResize = () => {
  screenWidth.value = window.innerWidth;
};
</script>

<style lang="scss" scoped>
</style>
