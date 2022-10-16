<template>
  <div>
    <div class="text-base font-bold text-[#382F90] mb-3">
      {{ title }}
    </div>
  </div>
</template>
<script>
export default {
  name: "PageTitle",
  props: {
    title: String,
  },
};
</script>
