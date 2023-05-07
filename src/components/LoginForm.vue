<script lang="ts">
import { ref } from 'vue'
import { Client } from '@/api'
import router from '@/router'
export default {
  name: 'LoginForm',
  setup() {
    const email = ref('')
    const password = ref('')

    const login = async () => {
      await Client.auth.login({
        login: email.value,
        password: password.value
      }).then((res)=> res? router.push('/dashboard'): null)
    }
    return {
      email,
      password,
      login
    }
  }
}
</script>
<template>
  <v-form>
    <v-container>
      <v-text-field
        class="mb-2"
        v-model="email"
        label="email"
        type="text"
        variant="outlined"
        required
      />
      <v-text-field
        v-model="password"
        label="password"
        type="password"
        variant="outlined"
        required
      />
      <v-row>
        <v-col class="d-flex justify-center align-center">
          <v-btn variant="tonal" color="primary" @click="login">login </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>
<style module></style>
