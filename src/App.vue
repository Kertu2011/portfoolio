<template>
  <div class="bg-neutral-900 text-white font-sans antialiased min-h-screen">
    <Nav />
    <router-view />
    <Hero />
    <MainSection />
    <Gallery />
    <Links />
    <Footer />
  </div>
</template>

<script setup>
import Hero from './components/Hero.vue'
import Nav from './components/Nav.vue'
import MainSection from './components/MainSection.vue'
import Gallery from './views/GalleryView.vue'
import Links from './components/LinksPage.vue'
import Footer from './components/Footer.vue'
</script>

<style>
@import url('https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css');
</style>
