<template>
  <div>
    <nav class="bg-gray-900 text-white px-6 py-4 flex justify-between">
      <h2 class="font-bold text-lg">Kurniawan Komputer</h2>

      <ul class="flex gap-6">
        <li><NuxtLink class="hover:text-blue-400" to="/">Home</NuxtLink></li>
        <li><NuxtLink class="hover:text-blue-400" to="/services">Services</NuxtLink></li>
        <li><NuxtLink class="hover:text-blue-400" to="/products">Products</NuxtLink></li>
        <li><NuxtLink class="hover:text-blue-400" to="/contact">Contact</NuxtLink></li>
      </ul>
    </nav>

    <main class="p-8">
      <NuxtPage />
    </main>

    <footer class="bg-gray-100 text-center py-4 text-sm text-gray-600">
      © {{ new Date().getFullYear() }} Kurniawan Komputer
    </footer>
  </div>
</template>
