<template>
  <div>
    <!-- HERO -->
    <section class="bg-gray-900 text-white py-20">
      <div class="max-w-6xl mx-auto px-6 text-center">
        <h1 class="text-4xl md:text-5xl font-bold">
          Solusi Komputer & IT Terpercaya
        </h1>
        <p class="mt-6 text-gray-300 max-w-2xl mx-auto">
          Kurniawan Komputer melayani service laptop, PC, jaringan,
          serta penyediaan perangkat IT dengan harga terbaik.
        </p>

        <div class="mt-8 flex justify-center gap-4">
          <NuxtLink
            to="/services"
            class="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded font-semibold"
          >
            Lihat Layanan
          </NuxtLink>

          <NuxtLink
            to="/contact"
            class="border border-white px-6 py-3 rounded hover:bg-white hover:text-gray-900"
          >
            Hubungi Kami
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- SERVICES PREVIEW -->
    <section class="py-20 bg-gray-100">
      <div class="max-w-6xl mx-auto px-6">
        <h2 class="text-3xl font-bold text-center mb-12">
          Layanan Kami
        </h2>

        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-white p-6 rounded shadow">
            <h3 class="font-bold text-lg mb-2">Service Laptop & PC</h3>
            <p class="text-gray-600">
              Perbaikan hardware & software, install ulang, upgrade.
            </p>
          </div>

          <div class="bg-white p-6 rounded shadow">
            <h3 class="font-bold text-lg mb-2">Jaringan & Internet</h3>
            <p class="text-gray-600">
              Setup LAN, WiFi, kantor, dan troubleshooting jaringan.
            </p>
          </div>

          <div class="bg-white p-6 rounded shadow">
            <h3 class="font-bold text-lg mb-2">Penjualan Produk IT</h3>
            <p class="text-gray-600">
              Laptop, PC, printer, dan aksesoris berkualitas.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-20 bg-blue-600 text-white">
      <div class="text-center px-6">
        <h2 class="text-3xl font-bold">
          Butuh Service atau Produk IT?
        </h2>
        <p class="mt-4">
          Hubungi kami sekarang dan dapatkan solusi terbaik.
        </p>

        <NuxtLink
          to="/contact"
          class="inline-block mt-6 bg-white text-blue-600 px-8 py-3 rounded font-semibold"
        >
          Kontak Kami
        </NuxtLink>
      </div>
    </section>
  </div>
</template>
