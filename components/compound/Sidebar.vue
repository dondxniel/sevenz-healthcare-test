<template>
  <div>
    <v-list dense>
      <v-list-item-group v-model="activeLink" class="mt-32">
        <v-list-item
          v-for="item in links"
          :key="item.id"
          class="my-3 default-text-color"
          active-class="bg-[#382F90] white--text"
        >
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.label"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    <v-list dense>
      <v-list-item-group v-model="activeBLink" class="mt-">
        <v-list-item
          v-for="item in bLinks"
          :key="item.id"
          class="my-3 default-text-color"
          active-class="bg-[#382F90] white--text"
          @click="() => item.label === 'Logout' && logout()"
        >
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.label"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </div>
</template>
<script>
import { bottomSidebarLinks, sidebarLinks } from "../../constants/pageLinks";

export default {
  name: "Sidebar",
  data: () => {
    return {
      activeLink: 0,
      links: sidebarLinks,
      activeBLink: bottomSidebarLinks.length,
      bLinks: bottomSidebarLinks,
    };
  },
  methods: {
    async logout() {
      await this.$apolloHelpers.onLogout();
      this.$router.push({ path: "/" });
    },
  },
};
</script>
<style>
.default-text-color {
  color: #aaa !important;
}
</style>
