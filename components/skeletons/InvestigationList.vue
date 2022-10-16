<template>
  <div class="grid md:grid-cols-4 grid-cols-2 text-gray-500 gap-y-7">
    <v-skeleton-loader
      type="list-item"
      v-for="n in 12"
      :key="n"
    ></v-skeleton-loader>
  </div>
</template>
<script>
export default {
  name: "InvestigationListSkeleton",
};
</script>
