<template>
  <q-item clickable tag="a" target="_blank" :href="props.link" class="q-pl-lg">
    <q-item-section v-if="props.icon" avatar>
      <q-icon :name="props.icon" />
      <q-item-label caption>{{ props.caption }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup>
defineOptions({
  name: "EssentialLink",
});

const props = defineProps({
  title: {
    type: String,
    required: true,
  },

  caption: {
    type: String,
    default: "",
  },

  link: {
    type: String,
    default: "#",
  },

  icon: {
    type: String,
    default: "",
  },
});
</script>
