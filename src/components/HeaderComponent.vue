<template>
  <div
    class="row w-full flex justify-start items-center q-mx-md"
    style="height: 60px"
  >
    <div class="col" style="flex: 1">
      <div class="flex justify-start items-center text-white">
        <img src="../assets/logo.svg" alt="" />
      </div>
    </div>
    <div class="col" style="flex: 1">
      <div class="flex justify-start items-center text-white">
        <div class="flex justify-between items-center text-white q-pr-md">
          <div class="flex justify-center items-center text-white">
            <div class="" id="small">채용</div>
            <div class="" id="small">
              <q-btn-dropdown flat>
                <q-list>
                  <q-item clickable v-close-popup @click="onItemClick">
                    <q-item-section>
                      <q-item-label>채용</q-item-label>
                    </q-item-section>
                  </q-item>

                  <q-item clickable v-close-popup @click="onItemClick">
                    <q-item-section>
                      <q-item-label>해외 개발자 원격 채용</q-item-label>
                    </q-item-section>
                  </q-item>

                  <q-item clickable v-close-popup @click="onItemClick">
                    <q-item-section>
                      <q-item-label
                        >외국인 원격 채용 (비개발 직군)</q-item-label
                      >
                    </q-item-section>
                  </q-item>

                  <q-item clickable v-close-popup @click="onItemClick">
                    <q-item-section>
                      <q-item-label>한국어 가능 외국인 채용</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-btn-dropdown>
            </div>
          </div>

          <div class="q-pa-md" id="small">해외 개발자 활용 서비스</div>
        </div>
      </div>
    </div>
    <div class="col" id="small" style="flex: 1">
      <q-btn
        flat
        rounded
        class="flex justify-start items-center text-bold bg-white"
        style="
          width: 107px;
          height: 36px;
          border-radius: 8px;
          color: #6188ff;
          opacity: 0.9;
        "
        >문의하기</q-btn
      >
    </div>
  </div>
</template>

<script setup>
defineOptions({
  name: "HeaderComponent",
});
</script>

<style lang="scss" scoped>
@media (max-width: 500px) {
  #small {
    display: none;
  }
}
</style>
