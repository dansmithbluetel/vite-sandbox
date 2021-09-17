<template>
  <h1 class="text-2xl font-bold">Invite members to group</h1>
  <form action="">
    <div class="mt-8 max-w-md">
      <div class="grid grid-cols-1 gap-1">
        <label v-for="(colleague, index) in colleagues" class="block">
          <input v-model="colleague.email" :key="index" type="text" class="mt-1 block w-full" placeholder="">
        </label>
      </div>
    </div>
    <div class="mt-8 max-w-md bg-erm-grey">
      <div class="grid grid-cols-1 gap-6">
        <button @click.prevent="addColleague">Add more</button>
        <button @click.prevent="sendInvitations">Send Invitations</button>
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import {ref, defineComponent} from 'vue';

export default defineComponent({
  setup() {
    interface Colleague {
      email: string
    }
    const colleagues = ref<Colleague[]>([]);

    const addColleague = (): void => {
      colleagues.value.push({email: ''});
    }

    const sendInvitations = (): void => {
      alert(colleagues.value.map((colleague) => {
        return colleague.email
      }))
    }

    return {
      colleagues,
      addColleague,
      sendInvitations
    }
  }
})
</script>