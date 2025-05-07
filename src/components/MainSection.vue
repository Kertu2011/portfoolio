<template>
  <section class="text-center mb-8 max-w-5xl mx-auto p-6 animate-fade-in-up">
    <div class="flex flex-col sm:flex-row justify-between items-center p-4 bg-gray-800 rounded-lg gap-4">
      <h1 class="text-3xl font-bold text-limegreen">Lumedas</h1>
      <audio id="bg-audio" :src="musicSrc" loop></audio>
      <button
        @click="toggleAudio"
        class="rounded-lg border border-transparent px-5 py-2 text-base font-medium bg-neutral-800 hover:border-pink-400 focus:outline"
      >
        {{ isPlaying ? 'Pause music' : 'Play music' }}
      </button>
    </div>
    <p class="max-w-6xl mx-auto p-8 text-center">
      LUMEDAS IS ONE OF THE BRIGHTEST AND MOST TALENTED PLAYERS IN THE LONG HISTORY OF COUNTER-STRIKE: GLOBAL OFFENSIVE. A CLUTCH MASTER WHO ALONE CAN TURN THE TIDE OF THE GAME.
    </p>

    <h2 class="mt-6 text-xl font-semibold text-left text-limegreen">Peripherals</h2>
    <ul class="max-w-6xl mx-auto p-8 pl-6 text-left text-gray-300">
      <li><strong>Monitor:</strong> ZOWIE XL2546K</li>
      <li><strong>Mouse:</strong> LOGITECH G PRO X SUPERLIGHT 2</li>
      <li><strong>Mousepad:</strong> SteelSeries QCK HEAVY L</li>
      <li><strong>Headset:</strong> HyperX Cloud II</li>
      <li><strong>Keyboard:</strong> LOGITECH G PRO X TKL LIGHTSPEED</li>
    </ul>
    
    <h2 class="mt-6 text-xl font-semibold text-left text-limegreen">PC</h2>
    <ul class="max-w-6xl mx-auto p-8 pl-6 text-left text-gray-300">
      <li><strong>CPU:</strong> i7 14700K</li>
      <li><strong>Motherboard:</strong>GIGABYTE Z790</li>
      <li><strong>GPU:</strong>GIGABYTE RTX 4070 Ti</li>
      <li><strong>SSD:</strong>Kingston A2000 M.2 SSD 500GB</li>
      <li><strong>Memory:</strong> G.Skill Trident Z5 RGB DDR5 6600 MHz</li>
      <li><strong>PSU:</strong>Corsair RM850e</li>
      <li><strong>Case:</strong>Fractal Design Meshify 2 Compact RGB</li>
      <li><strong>OS:</strong>Windows 11 Pro</li>
    </ul>
    
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
