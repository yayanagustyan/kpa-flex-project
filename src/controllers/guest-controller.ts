import { ref } from 'vue'
import type { GuestType } from 'src/services/guest-repository'
import GuestRepository from 'src/services/guest-repository'

export const guests = ref<GuestType[]>([])
export const editedGuests = ref<GuestType[]>([])

export const showInfoModal = ref(false)
export const showModal = ref(false)
export const showDelModal = ref(false)
export const loading = ref(true)
export let infoText = ref("")

const maxData = 20
const repo = new GuestRepository()

export async function loadGuests(){
  editedGuests.value = await repo.loadPrev()
  guests.value = await repo.load()
  loading.value = false;
}

export function hasPrev(guest:GuestType):boolean {
  if (guest.id != 0) {
    const index = editedGuests.value.findIndex(g => g.id === guest.id)
    return (index !== -1)
  }
  return false
}

export function revert(guest:GuestType) {
  const backup = editedGuests.value.find(g => g.id === guest.id)
  if (backup) {
    saveGuest(backup, true, 'revert')
  }
}

function checkPrevEdit(guest:GuestType, type:string) {
  const ori = guests.value.find(g => g.id === guest.id)
  if (ori) {
    const index = editedGuests.value.findIndex(g => g.id === guest.id)
    if (index !== -1) {
      // data exist
      if (type == 'revert') {
        editedGuests.value.splice(index, 1)
      }else{
        editedGuests.value[index] = { ...ori }
      }
    }else{
      if (guest.email !== ori.email) {
        editedGuests.value.push(ori)        
      }
    }
    repo.savePrev(editedGuests.value)
  }
}

export function saveGuest(guest: GuestType, isEdit: boolean, type:string) {
  if (!guest.email || guest.tickets == 0) {
    infoText.value = "Please fill all fields"
    showInfoModal.value = true
  }else{
    if (isEdit) {
      checkPrevEdit(guest, type)
  
      const index = guests.value.findIndex(g => g.id === guest.id)
      if (index !== -1) guests.value[index] = { ...guest }
    } else {
      if (guests.value.length < maxData) {
        // check email exist
        const idx = guests.value.findIndex(g => g.email === guest.email)
        if (idx !== -1) {
          infoText.value = "Email already exist!"
          showInfoModal.value = true            
        }else{
          const newId = Math.max(0, ...guests.value.map(g => g.id)) + 1
          guests.value.push({ ...guest, id: newId })          
        }
      }else{
        infoText.value = "You have reached the data insertion quota."
        showInfoModal.value = true
      }
    }
    repo.save(guests.value)
    showModal.value = false
  }
}

export function deleteId(id: number) {
  const index = guests.value.findIndex(g => g.id === id)
  if (index !== -1) {
    guests.value.splice(index, 1)
  }
  repo.save(guests.value)
  showDelModal.value = false
}

export async function resetData(){
  loading.value = true;
  guests.value = []
  await repo.reset()
  loadGuests()
}
