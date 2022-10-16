<template>
  <div>
    <PageTitle
      title="Update Patient Medical Record"
      subtitle="Click the tabs to view and edit patient medical details"
    />
    <PageContentContainer>
      <div>
        <div class="pb-10 mb-10 border-b">
          <SectionTitle title="X-Ray" />
          <InvestigationList v-if="xRay.length === 0" />
          <div class="grid md:grid-cols-4 grid-cols-2 text-gray-500 gap-y-7">
            <v-checkbox
              dense
              v-for="investigation in xRay"
              :key="investigation.id"
              :value="parseInt(investigation.id)"
              color="rgb(107 33 168)"
              v-model="selectedInvestigations"
              :label="investigation.title"
              class="box-text"
            />
          </div>
        </div>
        <div class="pb-10 mb-10 border-b">
          <SectionTitle title="Ultrasound Scan" />
          <InvestigationList v-if="ultraSound.length === 0" />
          <div class="grid md:grid-cols-4 grid-cols-2 text-gray-500 gap-y-7">
            <v-checkbox
              dense
              v-for="investigation in ultraSound"
              :key="investigation.id"
              :value="parseInt(investigation.id)"
              color="rgb(107 33 168)"
              v-model="selectedInvestigations"
              :label="investigation.title"
              class="box-text"
            />
          </div>
        </div>
        <div>
          <NewScanForm
            :submitting="submitting"
            @ctscanchanged="mirrorCtScanChange"
            @mrichanged="mirrorMriChange"
            @createrecord="createMedicalRecord"
          />
        </div>
      </div>
    </PageContentContainer>
    <!-- Dialog -->
    <v-dialog v-model="dialog.display" max-width="290">
      <v-card>
        <lottie-vue-player
          src="https://assets2.lottiefiles.com/packages/lf20_jbrw3hcz.json"
          autoplay
          style="width: 100%; height: 100%"
        />
        <div class="text-center mx-3 mb-3 text-sm text-gray-500">
          {{ dialog.message }}
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import Vue from "vue";
import PageContentContainer from "~/components/compound/PageContentContainer.vue";
import PageTitle from "~/components/simple/PageTitle.vue";
import InvestigationList from "~/components/skeletons/InvestigationList.vue";
import { CREATE_MEDICAL_RECORD, RETRIEVE_DATA } from "~/queries/data.queries";
import NewScanForm from "../components/compound/NewScanForm.vue";
import SectionTitle from "../components/simple/SectionTitle.vue";

export default Vue.extend({
  name: "IndexPage",
  layout: "PageLayout",
  components: {
    PageTitle,
    PageContentContainer,
    SectionTitle,
    NewScanForm,
    InvestigationList,
  },
  data() {
    return {
      ultraSound: [],
      xRay: [],
      selectedInvestigations: [],
      selectedCtscan: "",
      selectedMRI: "",
      submitting: false,
      dialog: { display: false, message: "" },
    };
  },
  async mounted() {
    const investigations = await this.fetchData();
    let xrayInv = [];
    let utsScanInv = [];
    investigations?.forEach((item) => {
      if (item.type.title === "X-Ray") xrayInv.push(item);
      if (item.type.title === "Ultrasound Scan") utsScanInv.push(item);
    });
    this.ultraSound = utsScanInv;
    this.xRay = xrayInv;
  },
  methods: {
    mirrorCtScanChange(val) {
      this.selectedCtscan = val;
    },
    mirrorMriChange(val) {
      this.selectedMRI = val;
    },
    async fetchData() {
      const {
        data: { investigations },
      } = await this.$apollo.mutate({
        mutation: RETRIEVE_DATA,
      });
      return investigations;
    },
    async createMedicalRecord() {
      this.submitting = true;
      const credentials = {
        investigations: this.selectedInvestigations,
        ctscan: this.selectedCtscan,
        mri: this.selectedMRI,
        developer: "Developer",
      };
      const res = await this.$apollo.mutate({
        mutation: CREATE_MEDICAL_RECORD,
        variables: credentials,
      });
      this.dialog = {
        display: true,
        message: `You just successfully creating a medical record for ${res.data.add_medical_record.patient.name}`,
      };

      console.log(res);
      this.submitting = false;
      this.resetState();
    },
    resetState() {
      this.selectedInvestigations = [];
      this.selectedCtscan = "";
      this.selectedMRI = "";
    },
  },
});
</script>
<style>
.box-text .v-label {
  font-size: 80% !important;
  color: #000;
}
</style>
