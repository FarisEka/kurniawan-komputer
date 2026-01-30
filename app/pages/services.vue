<template>
  <section class="py-16">
    <div class="max-w-6xl mx-auto px-6">
      <h1 class="text-3xl font-bold mb-10 text-center">
        Layanan Kami
      </h1>

      <div class="grid md:grid-cols-3 gap-8">
        <div
          v-for="service in services"
          :key="service.id"
          class="bg-white p-6 rounded shadow hover:shadow-lg transition"
        >
          <h2 class="text-xl font-bold mb-2">
            {{ service.name }}
          </h2>

          <p class="text-gray-600 mb-4">
            {{ service.description }}
          </p>

          <p class="font-semibold text-blue-600">
            Mulai dari Rp {{ service.price }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const services = [
  {
    id: 1,
    name: 'Service Laptop & PC',
    description: 'Perbaikan hardware, software, install ulang, upgrade.',
    price: '150.000'
  },
  {
    id: 2,
    name: 'Jaringan & Internet',
    description: 'Setup LAN, WiFi kantor, dan troubleshooting jaringan.',
    price: '250.000'
  },
  {
    id: 3,
    name: 'Maintenance IT',
    description: 'Perawatan rutin komputer & jaringan perusahaan.',
    price: '500.000'
  }
]
</script>
