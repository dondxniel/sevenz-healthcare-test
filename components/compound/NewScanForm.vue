<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="6">
        <p class="text-gray-400">CT Scan</p>
        <v-select
          v-model="ctScanValue"
          :items="ctScan"
          label="*Specify"
          outlined
          @change="$emit('ctscanchanged', ctScanValue)"
        ></v-select>
      </v-col>
      <v-col cols="12" md="6">
        <p class="text-gray-400">MRI</p>
        <v-select
          v-model="mriValue"
          :items="mri"
          label="*Specify"
          outlined
          @change="$emit('mrichanged', ctScanValue)"
        ></v-select>
      </v-col>
    </v-row>
    <div class="flex flex-row justify-end">
      <v-btn
        depressed
        color="#382F90"
        class="text-none white--text"
        @click="$emit('createrecord')"
        :loading="submitting"
      >
        Save and Send
      </v-btn>
    </div>
  </v-container>
</template>

<script>
import { ctScan, mri } from "~/constants/selectOptions";
export default {
  name: "NewScanForm",
  props: ["submitting"],
  data() {
    return {
      ctScan: ctScan,
      mri: mri,
      ctScanValue: "",
      mriValue: "",
    };
  },
  watch: {
    submitting(oldVal, newVal) {
      if (!oldVal && newVal) {
        this.ctScanValue = "";
        this.mriValue = "";
      }
    },
  },
};
</script>
