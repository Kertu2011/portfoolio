<template>
    <div class="gallery-container text-white bg-neutral-900 min-h-screen p-6">
      <h1 class="text-3xl text-center mb-6">Galerii</h1>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div v-for="(image, index) in images" :key="index">
          <img :src="image.src" :alt="image.alt" class="w-full rounded-lg hover:scale-105 transition" />
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const images = ref([
    { src: new URL('@/assets/Images/Gallery2.webp',
     import.meta.url).href,
    alt: 'Pilt 1' },
    { src: new URL('@/assets/Images/Gallery1.webp',
    import.meta.url).href,
     alt: 'Pilt 2' },
    { src: new URL('@/assets/Images/Gallery3.webp',
    import.meta.url).href,
     alt: 'Pilt 3' },
  ])
  </script>
  
  <style scoped>
  .gallery-container img {
    transition: transform 0.3s ease;
  }
  </style>
  