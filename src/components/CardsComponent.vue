<template>
  <div class="col-12 col-md-6 col-lg-3">
    <q-card flat style="border-radius: 8px">
      <q-img :src="props.image" />
    </q-card>
    <div class="flex q-pt-sm">
      <q-avatar class="bg-white text-white" outlined>
        <q-img :src="props.avatar" />
      </q-avatar>
      <div class="flex column q-pl-sm">
        <span class="text-weight-bold">{{ props.title }}</span>
        <span class="text-weight-normal">{{ props.subtitle }}</span>
        <span class="text-weight-thin">{{ props.desc }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
defineOptions({
  name: "CardsComponent",
});

const props = defineProps({
  image: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
});
</script>
