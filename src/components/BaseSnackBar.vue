<script lang="ts">
import { useCommon } from '@/stores'
import { computed } from 'vue'
export default {
  name: 'BaseSnackBar',
  setup() {
    const store = useCommon()
    const snackbar = computed({
      get: () => store.$state.snackbar.show,
      set: (value) => store.setSnackBar({ show: value })
    })
    const message = computed(() => store.$state.snackbar.message)

    return {
      snackbar,
      message
    }
  }
}
</script>
<template>
  <v-snackbar v-model="snackbar" multi-line>
    {{ message }}
    <template #actions>
      <v-btn color="red" variant="text" @click="snackbar = false"> close </v-btn>
    </template>
  </v-snackbar>
</template>
<style module></style>
