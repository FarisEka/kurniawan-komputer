<template>
  <div style="max-width:400px;margin:50px auto">
    <h2>Login Admin</h2>

    <form @submit.prevent="login">
      <input v-model="email" placeholder="Email" /><br /><br />
      <input v-model="password" type="password" placeholder="Password" /><br /><br />
      <button type="submit">Login</button>
    </form>

    <p style="color:red">{{ error }}</p>
  </div>
</template>

<script setup>
const email = ref('')
const password = ref('')
const error = ref('')

async function login() {
  try {
    await $fetch('/api/admin/login', {
      method: 'POST',
      body: { email: email.value, password: password.value }
    })

    navigateTo('/admin/dashboard')
  } catch (e) {
    error.value = 'Login gagal'
  }
}
</script>
