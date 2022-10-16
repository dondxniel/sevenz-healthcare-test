<template>
  <v-app>
    <div class="flex flex-row bg-[#F5F5FB] gap-[35px]">
      <div
        class="sidebar md:flex-[0.25] flex-0 md:w-auto w-0 overflow-hidden bg-white sticky"
      >
        <Sidebar />
      </div>
      <div class="main-content h-screen flex-1 overflow-y-scroll pr-10">
        <Navbar />
        <Nuxt />
      </div>
    </div>
  </v-app>
</template>
<script>
import Navbar from "../components/compound/Navbar.vue";
import Sidebar from "../components/compound/Sidebar.vue";
export default {
  name: "PageLayout",
  components: {
    Sidebar,
    Navbar,
  },
};
</script>
