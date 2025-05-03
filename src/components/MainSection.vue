<template>
    <section class="text-center mb-8 max-w-5xl mx-auto p-6 fade-in-up">
      <div class="flex justify-between items-center p-4 bg-gray-800 rounded-lg">
        <h1 class="text-3xl font-bold text-green-400">Lumedas</h1>
        <audio id="bg-audio" :src="musicSrc" loop></audio>
        <button @click="toggleAudio" class="music-btn">
          {{ isPlaying ? 'Pause music' : 'Play music' }}
        </button>
      </div>
  
      <p class="mt-4">Üks säravamaid ja andekamaid mängijaid Counter-Strike ajaloos. Clutch master, kes üksi võib mängu saatuse muuta.</p>
  
      <h2 class="mt-6">Peripherals</h2>
      <ul class="list-disc pl-6">
        <li><strong>Monitor:</strong> ZOWIE XL2546K</li>
        <li><strong>Mouse:</strong> RAZER DEATHADDER V3 PRO</li>
        <li><strong>Mousepad:</strong> ZOWIE G-SR</li>
        <li><strong>Headset:</strong> LOGITECH PRO X 2</li>
        <li><strong>Keyboard:</strong> LOGITECH G PRO X TKL LIGHTSPEED</li>
      </ul>
  
      <h2 class="mt-6">PC Specs</h2>
      <ul class="list-disc pl-6">
        <li><strong>CPU:</strong> i7 14700K</li>
        <li><strong>GPU:</strong> GIGABYTE RTX 4070 Ti</li>
        <li><strong>RAM:</strong> G.Skill Trident Z5 RGB DDR5 6600 MHz</li>
        <!-- ... other specs -->
      </ul>
  
      <h2 class="mt-6">DPI & Sensitivity</h2>
      <p>Sensitivity: 2.075 | 400 DPI</p>
  
      <h2 class="mt-6">Fun Fact</h2>
      <p>💡 Joo teed hea aim'i jaoks!</p>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import music from '@/assets/Minu_Muusika.mp3'
  
  const isPlaying = ref(false)
  const musicSrc = music
  
  function toggleAudio() {
    const audio = document.getElementById('bg-audio')
    if (audio.paused) {
      audio.play()
      isPlaying.value = true
    } else {
      audio.pause()
      isPlaying.value = false
    }
  }
  </script>
  