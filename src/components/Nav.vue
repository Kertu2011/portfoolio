<template>
  <nav class="sticky-nav flex justify-center gap-6 py-4 bg-neutral-900 text-white">
    <router-link
     to="/gallery" 
     class="hover:text-pink-400 transition" 
     active-class="text-green-400 font-bold"
     >Galerii</router-link>

     <router-link
     to="/header" 
     class="hover:text-pink-400 transition" 
     active-class="text-green-400 font-bold"
     >Avaleht</router-link> 

     <router-link
     to="/" 
     class="hover:text-pink-400 transition" 
     active-class="text-green-400 font-bold"
     >Peripherals</router-link> 

     <router-link
     to="/links" 
     class="hover:text-pink-400 transition" 
     active-class="text-green-400 font-bold"
     >Links</router-link> 
  </nav>
</template>

<script>
export default {
  name: 'Nav',
}
</script>

<style scoped>
.sticky-nav {
  position: sticky;
  top: 0;
  z-index: 1000; /* Kindlasti hoia nav üleval */
  background-color: rgba(0, 0, 0, 0.5); /* Läbipaistev must taust */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); /* Lisab varjuefekti */
  width: 100%;
  padding: 10px 0;
  backdrop-filter: blur(10px); /* Blur efekt (kui soovid) */
}
</style>
