<template>
  <div class="min-h-screen flex bg-gray-100">
    <!-- Sidebar -->
    <aside class="w-64 bg-gray-900 text-white p-6">
      <h2 class="text-xl font-bold mb-8">Admin Panel</h2>

      <ul class="space-y-4">
        <li>
          <NuxtLink to="/admin" class="hover:text-blue-400">
            Dashboard
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/admin/services" class="hover:text-blue-400">
            Services
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/admin/products" class="hover:text-blue-400">
            Products
          </NuxtLink>
        </li>
      </ul>
    </aside>

    <!-- Content -->
    <main class="flex-1 p-8">
      <NuxtPage />
    </main>
  </div>
</template>
