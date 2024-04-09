<template>
  <q-card
    class="my-card q-mb-md text-black text-bold"
    style="width: 292px; padding: 10px"
  >
    <div class="column flex justify-center items-center">
      <q-avatar
        class="flex justify-center items-center"
        style="width: 120px; height: 120px; border-radius: 50%"
      >
        <img src="https://cdn.quasar.dev/img/mountains.jpg" />
      </q-avatar>
    </div>

    <q-card-section>
      <div
        class=""
        style="
          font-family: Poppins;
          font-size: 24px;
          font-weight: 900;
          line-height: 36px;
          text-align: center;
          color: #24252f;
        "
      >
        Abhishek Gupta
      </div>
      <div
        class=""
        style="
          font-family: Poppins;
          font-size: 16px;
          font-weight: 900;
          line-height: 24px;
          text-align: center;
          color: #4a77ff;
        "
      >
        마케팅·2y+
      </div>

      <div class="column flex justify-center items-center">
        <q-btn
          flat
          style="border: 1px solid #c1c5cf; border-color: #c1c5cf"
          class="q-my-sm"
          >마케팅콘텐츠제작</q-btn
        >
        <q-btn
          flat
          style="border: 1px solid #c1c5cf; border-color: #c1c5cf"
          class="q-my-sm"
          >인스타그램관리</q-btn
        >
        <div class="row flex justify-center items-center">
          <q-btn
            flat
            style="border: 1px solid #c1c5cf; border-color: #c1c5cf"
            class="q-mr-sm"
            >트위터관리</q-btn
          >
          <q-btn flat style="border: 1px solid #c1c5cf; border-color: #c1c5cf">
            블로그글작성
          </q-btn>
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<script setup>
defineOptions({
  name: "CardsComponent",
});
</script>
