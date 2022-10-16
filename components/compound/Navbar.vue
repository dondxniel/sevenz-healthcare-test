<template>
  <div class="flex flex-row justify-end items-center gap-5 mt-16 mb-8">
    <v-btn elevation="0" x-small dense class="text-none">
      <span style="color: #382f90"> Take a tour </span>
    </v-btn>
    <div class="relative">
      <div class="bg-red-500 p-1 absolute rounded-full top-1 left-6" />
      <v-btn icon color="#382F90">
        <v-icon>mdi-email</v-icon>
      </v-btn>
    </div>
    <v-btn icon>
      <v-icon>mdi-bell</v-icon>
    </v-btn>
    <v-avatar size="35">
      <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
    </v-avatar>
  </div>
</template>
