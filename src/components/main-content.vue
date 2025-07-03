<script setup lang="ts">
import { ref, onMounted } from 'vue';
import GuestRepository from 'src/services/guest-repository';
import { GuestType } from 'src/services/guest-repository';

const loading = ref(true)
const guests = ref<GuestType[]>([])
onMounted(async () => {
  const repo = new GuestRepository()
  guests.value = await repo.load()
  loading.value = false
});
</script>

<template>
<div class="">
  <b>Dashboard</b>
  <div class="divider"></div>

  <div class="mt-3">
    <div class="max-w-xs bg-white rounded-md shadow-md overflow-hidden border border-gray-200">
  
      <div class="p-5">
        <h5 class="text-sm font-semibold text-gray-800">Guests Total</h5>
        <p class="text-gray-600 mt-2">
          <h2 class="font-bold">
            <span v-if="!loading">{{guests.length}}</span>
            <span class="text-xs" v-if="loading">Loading ...</span>
          </h2>
        </p>
      </div>
    </div>

  </div>

</div>
</template>

<style scoped>
</style>
