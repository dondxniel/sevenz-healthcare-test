<template>
  <div>
    <div class="text-3xl font-bold text-[#382F90]">
      {{ title }}
    </div>
    <div v-if="!!subtitle" class="text-gray-400 mb-5">
      {{ subtitle }}
    </div>
  </div>
</template>
<script>
export default {
  name: "PageTitle",
  props: {
    title: String,
    subtitle: String,
  },
};
</script>
