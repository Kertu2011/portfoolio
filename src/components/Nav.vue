<template>
  <nav class="flex justify-center gap-6 py-4 bg-neutral-900 text-white">
    <router-link
      to="/gallery"
      class="hover:text-pink-400 transition"
      active-class="text-green-400 font-bold"
    >Galerii</router-link>

    <router-link
      to="/cfg"
      class="hover:text-pink-400 transition"
      active-class="text-green-400 font-bold"
    >CFG</router-link>

    <router-link
      to="/viewmodel"
      class="hover:text-pink-400 transition"
      active-class="text-green-400 font-bold"
    >Viewmodel</router-link>

    <router-link
      to="/crosshairs"
      class="hover:text-pink-400 transition"
      active-class="text-green-400 font-bold"
    >Crosshairid</router-link>

    <router-link
      to="/video"
      class="hover:text-pink-400 transition"
      active-class="text-green-400 font-bold"
    >Video sätted</router-link>
  </nav>
</template>

<script>
export default {
  name: 'Nav',
}
</script>
