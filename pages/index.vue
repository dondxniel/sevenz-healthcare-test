<template>
  <div><LoginForm /></div>
</template>
<script>
import LoginForm from "~/components/compound/LoginForm.vue";
export default {
  name: "Login",
  auth: false,
  components: {
    LoginForm,
  },
};
</script>
