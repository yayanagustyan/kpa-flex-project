<script setup lang="ts">
import { mdiViewDashboardOutline, mdiAccountGroupOutline } from '@mdi/js'

import { ref } from 'vue'

const BASE_PATH = import.meta.env.BASE_URL
const menus = ref([
  { id: 0, name: 'Dashboard', path: BASE_PATH+'', icon: mdiViewDashboardOutline },
  { id: 1, name: 'Guests', path: BASE_PATH+'guests', icon: mdiAccountGroupOutline },
])

</script>

<template>
  <aside class="w-64 bg-white border-r h-full hidden md:block">
    <nav class="flex flex-col p-4">
      <router-link v-for="menu in menus" :key="menu.id" :to="menu.path" 
        class="px-4 py-2 rounded hover:bg-gray-100 flex flex-row" :class="{ 'bg-gray-200': $route.path === menu.path }" >
        <svg class="w-5 h-5 text-gray-500" viewBox="0 0 24 24"
          :class="{ 'text-black font-bold': $route.path === menu.path }" >
          <path :d="menu.icon" fill="currentColor" />
        </svg>&nbsp;&nbsp;
        <span class="text-sm" :class="{ 'text-black font-bold': $route.path === menu.path }">{{menu.name}}</span>
      </router-link>
    </nav>
  </aside>
</template>
