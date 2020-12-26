<template>
  <section class="call-to-action pt-64 pb-10">
    <div class="container mx-auto">
      <div class="w-full text-center">
        <h1 class="text-5xl text-white font-semibold">
          Cara Mudah Untuk Menginvestasikan
          <br />
          Ide Dan Inovasi Terbaik
        </h1>
        <button
          @click="$router.push({ path: '/register' })"
          class="inline-block bg-orange-button hover:bg-green-button text-white font-semibold px-6 py-4 mt-8 text-lg rounded-full"
        >
          Ayo Mulai
        </button>
      </div>
    </div>
  </section>
</template>
