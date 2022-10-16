<template>
  <v-checkbox
    dense
    color="rgb(107 33 168)"
    v-model="selected"
    :label="label"
    class="box-text"
  />
</template>
<script>
export default {
  name: "CheckboxItem",
  props: ["label"],
  data() {
    return {
      selected: false,
    };
  },
};
</script>
