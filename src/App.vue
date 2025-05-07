<template>
  <div class="bg-neutral-900 text-white font-sans antialiased min-h-screen">
    <Header />
    <Nav />
    <ProfileImage />
    <MainSection />
    <CFG />
    <Gallery />
    <Links />
    <Footer />
  </div>
</template>

<script setup>
import Header from './components/Header.vue'
import Nav from './components/Nav.vue'
import ProfileImage from './components/ProfileImage.vue'
import MainSection from './components/MainSection.vue'
import CFG from './components/CFG.vue'
import Gallery from './components/GalleryPage.vue'
import Links from './components/LinksPage.vue'
import Footer from './components/Footer.vue'
</script>

<style>
@import url('https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css');
</style>
