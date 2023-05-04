<script setup lang="ts">
import { RouterView } from 'vue-router'
import BaseSnackBar from '@/components/BaseSnackBar.vue'
import { useCommon } from './stores';
import { computed, onMounted } from 'vue';

const store = useCommon()
const isLoading = computed(()=> store.$state.isLoading)
onMounted(()=>  {

})

</script>

<template>
  <v-app>
    <v-layout>
      <router-view :key="$route.fullPath" />
      <BaseSnackBar />
      <v-progress-circular v-if="isLoading" :size="50" color="primary" indeterminate />
    </v-layout>
  </v-app>
</template>

<style scoped></style>
