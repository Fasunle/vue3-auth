
<template>
  <v-container>
    <v-card>
      <v-card-title>
        <div class="text-h4">
          Login
        </div>
      </v-card-title>
      <v-card-text>
        <div class="text-h6">
          User name:
        </div>
        <v-text-field v-model="userName"></v-text-field>
        <div class="text-h6">
          Password
        </div>
        <v-text-field v-model="password" type="password"></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-btn variant="outlined" @click="onCancel">
          Cancel
        </v-btn>
        <v-btn variant="outlined" @click="onSubmit">
          Login
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'
import auth from '@/module/auth';

const emit = defineEmits(['close']);

const userName = ref('')
const password = ref('')

const onSubmit = () => {
auth.login(userName.value, password.value)
.then(() => emit("close"))
}

const onCancel = () => {
  emit("close")
}

</script>
