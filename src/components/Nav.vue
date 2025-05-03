<template>
  <nav class="text-center space-x-4">
    <router-link to="/gallery">Galerii</router-link>
    <router-link to="/cfg">CFG</router-link>
    <router-link to="/viewmodel">Viewmodel</router-link>
    <router-link to="/crosshairs">Crosshairid</router-link>
    <router-link to="/video">Video sätted</router-link>
  </nav>
</template>

<script>
export default {
  name: 'Nav'
}
</script>

<style scoped>
/* Add styles if needed, e.g., for the active link */
.router-link-exact-active {
  color: #42b983; /* Example active color */
  font-weight: bold;
}
</style>