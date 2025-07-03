<template>

  <div class="flex flex-col min-h-screen">
    <HeaderBar />
    <div class="flex flex-1">
      <SideBar />
      <main class="flex-1 p-6 bg-gray-100 overflow-y-auto">
        <router-view />
      </main>
    </div>

    <FooterBar />
  </div>

</template>

<script setup lang="ts">
  import SideBar from 'src/components/layouts/side-bar.vue'
  import HeaderBar from 'src/components/layouts/header-bar.vue'
  import FooterBar from 'src/components/layouts/footer-bar.vue'
</script>
