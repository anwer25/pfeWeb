<script setup lang="ts">
import { storage } from '@/api/instance'
import { sideBarLinks } from '@/lib'
import { ref, reactive } from 'vue'

const drawer = ref(true)
const rail = ref(false)
const state = reactive({ drawer, rail })
</script>
<template>
  <VNavigationDrawer v-model="state.drawer" :rail="state.rail" permanent @click="rail = !rail">
    <VListItem
      prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
      :title="storage.data.name"
      nav
    >
      <template #append>
        <VBtn variant="text" icon="fa-solid fa-arrow-left" @click.stop="rail = !rail"></VBtn>
      </template>
    </VListItem>
    <VDivider />
    <VList density="compact" nav>
      <VListItem
        v-for="item in sideBarLinks"
        :prepend-icon="item.icon"
        :title="item.title"
        :value="item.title"
        :v-if="storage.data.role === item.role"
      >
        <RouterLink :to="item.link" />
      </VListItem>
    </VList>
  </VNavigationDrawer>
</template>
<style module lang="scss"></style>
