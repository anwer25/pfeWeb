<script setup lang="ts">
import loginImage from '@/assets/svg/undraw_business_decisions_re_84ag.svg'
import LoginForm from '@/components/LoginForm.vue'

</script>

<template>
  <v-layout full-height>
    <v-container fluid class="d-flex ma-0 pa-0">
      <v-row class="pa-0 ma-0">
        <v-col class="d-flex justify-center align-center">
          <v-img cover :src="loginImage"></v-img>
        </v-col>
        <v-col class="bg_blue d-flex justify-center align-center">
          <v-card class="pa-6 w-100">
            <LoginForm />
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-layout>
</template>

<style></style>
