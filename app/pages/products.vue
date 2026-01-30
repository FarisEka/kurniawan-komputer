<template>
  <section class="py-16 bg-gray-50">
    <div class="max-w-6xl mx-auto px-6">
      <h1 class="text-3xl font-bold mb-10 text-center">
        Produk Kami
      </h1>

      <div class="grid md:grid-cols-3 gap-8">
        <div
          v-for="product in products"
          :key="product.id"
          class="bg-white p-6 rounded shadow hover:shadow-lg transition"
        >
          <div class="h-40 bg-gray-200 mb-4 flex items-center justify-center text-gray-500">
            Gambar Produk
          </div>

          <h2 class="text-xl font-bold mb-2">
            {{ product.name }}
          </h2>

          <p class="text-gray-600 mb-3">
            {{ product.description }}
          </p>

          <div class="flex justify-between items-center">
            <span class="font-semibold text-blue-600">
              Rp {{ product.price }}
            </span>

            <span
              class="text-sm"
              :class="product.stock > 0 ? 'text-green-600' : 'text-red-600'"
            >
              {{ product.stock > 0 ? 'Tersedia' : 'Habis' }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const products = [
  {
    id: 1,
    name: 'Laptop Asus VivoBook',
    description: 'Laptop untuk kerja dan belajar.',
    price: '7.500.000',
    stock: 5
  },
  {
    id: 2,
    name: 'PC Rakitan Office',
    description: 'PC rakitan untuk kebutuhan kantor.',
    price: '5.000.000',
    stock: 0
  },
  {
    id: 3,
    name: 'Printer Epson L3210',
    description: 'Printer ink tank untuk rumah & kantor.',
    price: '2.300.000',
    stock: 3
  }
]
</script>
