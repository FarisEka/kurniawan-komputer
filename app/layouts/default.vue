<template>
  <div>
    <nav class="p-4 bg-blue-600 text-white flex gap-6">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/services">Service</NuxtLink>
      <NuxtLink to="/products">Produk</NuxtLink>
      <NuxtLink to="/contact">Kontak</NuxtLink>
    </nav>

    <main class="p-6">
      <slot />
    </main>
  </div>
</template>
