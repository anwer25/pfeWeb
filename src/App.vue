<script setup lang="ts">
import { RouterView } from 'vue-router'
import BaseSnackBar from '@/components/BaseSnackBar.vue'
import { useCommon } from './stores'
import { computed, onMounted } from 'vue'

const store = useCommon()
const isLoading = computed(() => store.$state.isLoading)
onMounted(() => {})
</script>

<template>
  <v-app>
    <v-layout>
      <router-view :key="$route.fullPath" />
      <BaseSnackBar />
      <div class="" v-if="isLoading" :class="$style.progress">
        <v-progress-circular v-if="isLoading" :size="20" color="primary" indeterminate />
      </div>
    </v-layout>
  </v-app>
</template>

<style module lang="scss">
.progress {
  position: absolute;
  right: 0px;
  bottom: 0;
  z-index: 1001;
}

.v-layout {
  z-index: 1000;
  position: relative;
}
</style>
