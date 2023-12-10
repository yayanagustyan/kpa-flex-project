<template>
  <main
    class="
      h-full w-full
      flex justify-start items-center flex-col
      text-slate-700
    "
  >
    <nav-bar></nav-bar>

    <main-content></main-content>

    <!-- optional: you can remove this readme -->
    <read-me
      class="
        p-4 m-4
        max-h-2/3 overflow-auto
        border border-slate-100 rounded
      "
    ></read-me>
  </main>
</template>

<script setup lang="ts">
import NavBar from 'src/components/nav-bar.vue';
import MainContent from 'src/components/main-content.vue';
import ReadMe from 'src/components/read-me.vue';
</script>
