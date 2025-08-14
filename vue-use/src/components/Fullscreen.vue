<script setup>
import { ref } from 'vue';
import { useFullscreen, onKeyStroke } from '@vueuse/core';
const el = ref(null);
const { isFullscreen, toggle:toggleFullscreen, exit } = useFullscreen(el);
onKeyStroke(true, exit);
</script>
<template>
  <div
    ref="el"
    :style="{
      height: isFullscreen ? '100vh' : 'auto',
      width: isFullscreen ? '100vw' : 'auto',
      transition: 'all 0.3s ease',
      backgroundColor: '#f0f0f0'
    }"
    style="position: relative;"
  >
    <button @click="exit" :style="{ position: 'absolute', top: '2px', right: '2px', display: isFullscreen ? 'block' : 'none' }">Close</button>
    <h2>Fullscreen</h2>
    <div v-if="isFullscreen">Press any key to exit full screen</div>
    <button :style="{display: isFullscreen ? 'none' : 'inline-block'}" @click="toggleFullscreen">Toggle Fullscreen</button>
  </div>
</template>