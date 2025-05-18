<template>
  <div class="bg-neutral-900 text-white font-sans antialiased min-h-screen">
    <Nav />
    <router-view />
    <Footer />
  </div>
</template>

<script setup>
import Nav from './components/Nav.vue'
import Footer from './components/Footer.vue'
</script>

<style>
@import url('https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css');
</style>
