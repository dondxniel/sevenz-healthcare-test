<template>
  <div class="h-screen relative mx-10">
    <div
      class="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] md:w-96 w-full grid grid-cols-1 gap-1"
    >
      <p class="text-purple-800 text-center mb-4">
        Just click the login button to login.
      </p>
      <v-text-field
        label="Username"
        placeholder="Placeholder"
        outlined
        type="text"
        disabled
        dense
        v-model="username"
      ></v-text-field>

      <v-text-field
        label="Password"
        placeholder="Placeholder"
        outlined
        type="password"
        disabled
        dense
        v-model="password"
      ></v-text-field>

      <v-btn
        @click="login"
        depressed
        color="rgb(107 33 168)"
        text-color="white"
      >
        <span class="white-text"> Login </span>
      </v-btn>
      <v-btn
        @click="logout"
        depressed
        color="rgb(107 33 168)"
        text-color="white"
      >
        <span class="white-text"> Log out </span>
      </v-btn>
    </div>
    <!-- Dialog -->
    <v-dialog v-model="dialog.display" max-width="290">
      <v-card>
        <lottie-vue-player
          src="https://assets6.lottiefiles.com/packages/lf20_qw8ewk7k.json"
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
import { password, username } from "~/constants/loginInfo";
import { LOGIN_QUERY } from "~/queries/auth.queries";

export default {
  name: "LoginForm",
  data() {
    return {
      username: username,
      password: password,
      dialog: { display: false, message: "" },
    };
  },
  methods: {
    async login() {
      const credentials = { email: this.username, password: this.password };
      try {
        const res = await this.$apollo.mutate({
          mutation: LOGIN_QUERY,
          variables: credentials,
        });
        const token = res.data.login;
        await this.$apolloHelpers.onLogin(token);
        this.$router.push({ path: "/home" });
      } catch (error) {
        this.dialog = {
          display: true,
          message:
            "There was an error; try clicking logout before clicking login again.",
        };
      }
    },

    async logout() {
      await this.$apolloHelpers.onLogout();
    },
  },
};
</script>
<style>
.white-text {
  color: #fff !important;
}
</style>
