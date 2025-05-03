<template>
    <section class="gallery py-12">
      <h2 class="text-3xl font-bold text-center mb-8">Galerii</h2>
      
      <!-- Test to display images directly -->
      <div class="gallery-images">
        <!-- Loop through the gallery images and display them -->
        <img v-for="(img, index) in galleryImages" :key="index" :src="img" alt="Gallery Image" class="rounded-lg shadow-lg" width="600" height="400" />
      </div>
    </section>
  </template>
  
  <script setup>
  // Import images directly
  import img1 from '../assets/Images/Gallery1.webp'
  import img2 from '../assets/Images/Gallery2.webp'
  import img3 from '../assets/Images/Gallery3.webp'
  
  // Array to hold the image paths
  const galleryImages = [img1, img2, img3]
  </script>
  