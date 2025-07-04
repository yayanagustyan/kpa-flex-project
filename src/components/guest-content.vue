<script setup lang="ts">
import { ref, onMounted, computed, watch } from 'vue'
import type { GuestType } from '../services/guest-repository'
import { guests, loadGuests, saveGuest, deleteId, showInfoModal, showModal, showDelModal, loading, hasPrev, revert, infoText, resetData } 
  from '../controllers/guest-controller'

const isEdit = ref(false)
const currentGuest = ref < GuestType > ({
  id: 0,
  email: '',
  tickets: 0
})

const currentPage = ref(1)
const itemsPerPage = ref(5)

const from = computed(() => (currentPage.value - 1) * itemsPerPage.value + 1)

const to = computed(() => {
  const last = currentPage.value * itemsPerPage.value
  return last > guests.value.length ? guests.value.length : last
})

const totalPages = computed(() => Math.ceil(guests.value.length / itemsPerPage.value))

const paginatedGuests = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value
  return guests.value.slice(start, start + itemsPerPage.value)
})

function setPage(page: number) {
  if (page >= 1 && page <= totalPages.value) currentPage.value = page
}

onMounted(async () => {
  loadGuests()
})

function openModal(type: string, guest: GuestType) {
  isEdit.value = type == 'edit' ? true : false
  showModal.value = true
  if (guest.id == 0) {
    guest.tickets = Date.now()
  }
  currentGuest.value = { ...guest }
}

function openDelModal(guest: GuestType) {
  showDelModal.value = true
  currentGuest.value = { ...guest }
}
// Optional: Reset to page 1 when itemsPerPage changes
watch(itemsPerPage, () => {
  currentPage.value = 1
})
</script>

<template>
<b>Guests</b>
<div class="divider"></div>

<div class="flex items-center justify-between text-white mt-4">
  <div>
    <span class="text-black text-sm">show <b>{{ from }} to {{ to }}</b> of <b>{{ guests.length }}</b> data(s)</span>
    &nbsp;&nbsp;
    <select id="perPage" v-model="itemsPerPage" class="border rounded px-6 text-sm text-gray-800">
      <option :value="5">5</option>
      <option :value="10">10</option>
      <option :value="25">25</option>
      <option :value="50">50</option>
    </select>
  </div>

  <div>
    <button class="px-4 py-2 bg-gray-800 text-white border border-gray-800 rounded text-sm hover:bg-gray-100 hover:text-gray-800" @click="openModal('add', {id:0, email:'',tickets:0} )">
      <i class="mdi mdi-plus-outline"></i>&nbsp;
      <span>Add New Guest</span>
    </button>
    &nbsp;

    <button class="px-4 py-2 bg-gray-800 text-white border border-gray-800 rounded text-sm hover:bg-gray-100 hover:text-gray-800" @click="resetData()">
      <span>Reset</span>
    </button>
  </div>

</div>

<div class="overflow-x-auto mt-4">
  <table class="min-w-full table-auto border bg-gray-800 text-white">
    <thead class="bg-gray-800 text-left">
      <tr>
        <th class="px-4 py-2 border">#</th>
        <th class="px-4 py-2 border">Tickets</th>
        <th class="px-4 py-2 border">Email</th>
        <th class="px-4 py-2 border text-center">Tools</th>
      </tr>
    </thead>
    <tbody>
      <tr v-if="loading">
        <td colspan="4">
          <div class="p-3">loading....</div>
        </td>
      </tr>
      <tr v-for="(guest, index) in paginatedGuests" :key="guest.id" class="hover:bg-gray-700">
        <td class="px-4 py-2 border">{{ (currentPage - 1) * itemsPerPage + index + 1 }}</td>
        <td class="px-4 py-2 border">{{ guest.tickets }}</td>
        <td class="px-4 py-2 border">{{ guest.email }}</td>
        <td class="px-4 py-2 border">
          <div class="flex-gap-15 flex-center">
            <div class="icon-tools" @click="openModal('edit', guest)">
              <i class="mdi mdi-pencil-outline"></i>
            </div>
            <div class="icon-tools" @click="openDelModal(guest)">
              <i class="mdi mdi-delete-outline"></i>
            </div>
          </div>

        </td>
      </tr>
    </tbody>
  </table>

  <!-- Pagination Controls -->
  <div class="mt-4 flex items-center justify-end space-x-2">
    <div class="flex border border-gray-400 rounded">
      <button @click="setPage(currentPage - 1)" :disabled="currentPage === 1" 
        class="px-3 py-1 bg-gray-200 rounded disabled:text-gray-400">
        &laquo;
      </button>

      <button
        v-for="page in totalPages"
        :key="page"
        @click="setPage(page)"
        :class="['px-3 py-1', currentPage === page ? 'bg-gray-800 text-white' : 'bg-gray-200']"
      >
        {{ page }}
      </button>

      <button @click="setPage(currentPage + 1)" :disabled="currentPage === totalPages" 
        class="px-3 py-1 bg-gray-200 rounded disabled:text-gray-400">
        &raquo;
      </button>

    </div>
  </div>

</div>

<!-- Modal -->
<div v-if="showModal" id="modal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
  <div class="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
    <h2 class="text-xl font-bold mb-4">{{isEdit ? 'Edit Guest': 'Add New Guest'}}</h2>    

    <div>
      <span class="text-gray-500">Tickets</span><br>
      <b>{{ currentGuest.tickets }}</b>
    </div>

    <div class="mt-2">
      <span class="text-gray-500">Email</span>
      <input v-model="currentGuest.email" type="text" placeholder="Guest Email" 
      class="w-full border p-2 mb-4 rounded"
      @keydown.enter="saveGuest(currentGuest, isEdit, 'new')" />
    </div>

    <div class="mt-1 mb-3 text-sm" v-if="hasPrev(currentGuest)" >
      <span>Undo the last change?</span> <span class="undo-me" @click="revert(currentGuest)">Yes, let's do it!</span>
    </div>
    <div class="divider mb-3"></div>

    <div class="flex justify-end space-x-2">
      <button @click="showModal = false" class="px-4 py-1 border border-gray-800 bg-white rounded hover:bg-gray-800 hover:text-white">
        Cancel
      </button>
      <button @click="saveGuest(currentGuest, isEdit, 'new')" class="px-4 py-1 bg-gray-800 border border-gray-800 text-white rounded hover:bg-white hover:text-gray-800">
        Confirm
      </button>
    </div>
  </div>
</div>

<div v-if="showDelModal" id="delmodal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
  <div class="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
    <h2 class="text-xl font-bold mb-4">Delete Confirmation</h2>
    <p>Are you sure to delete this data?</p>
    <pre>`{{ currentGuest.email }}`</pre>

    <div class="flex justify-end space-x-2 mt-5">
      <button @click="showDelModal = false" class="px-4 py-1 border border-gray-800 bg-gray-100 rounded hover:bg-gray-800 hover:text-white">
        Cancel
      </button>
      <button @click="deleteId(currentGuest.id)" class="px-4 py-1 bg-gray-800 border border-gray-800 text-white rounded hover:bg-gray-100 hover:text-gray-800">
        Confirm
      </button>
    </div>
  </div>
</div>


<div v-if="showInfoModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
  <div class="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
    <h2 class="text-xl font-bold mb-4"><i class="mdi mdi-alert-outline"></i> Warning!</h2>
    <p>{{ infoText }}</p>

    <div class="flex justify-end space-x-2 mt-5">
      <button @click="showInfoModal = false" 
      class="px-4 py-2 border border-gray-800 bg-white text-sm rounded hover:bg-gray-800 hover:text-white">
        Okay, I got it
      </button>
    </div>
  </div>
</div>


</template>
