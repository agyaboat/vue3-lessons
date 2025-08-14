<script setup>
import { useMouse, onClickOutside, useOnline, useDark, useTitle } from '@vueuse/core';
import { UseDark } from '@vueuse/components';
import { ref, computed } from 'vue';

import LastChanged from './components/LastChanged.vue';
import ActiveElement from './components/ActiveElement.vue';
import Favicon from './components/Favicon.vue';
import Fullscreen from './components/Fullscreen.vue';
import Image from './components/Image.vue';

const { x, y } = useMouse();

const el = ref(null);
onClickOutside(el, () => {
  console.log('Clicked outside');
});

const isSupported = 'Clipboard' in window

const isDark = useDark()

useTitle(() => isDark.value ? '🌙 Good evening!' : '☀️ Good morning!')
</script>

<template>
  <div>
    <div class="initial bound">
      <div ref="el">
        <UseDark v-slot="{ isDark, toggleDark }">
          <button @click="toggleDark()">
            Is Dark: {{ isDark }}
          </button>
        </UseDark>
        <h1>You did it!</h1>
        <p>Mouse position: {{ x }}, {{ y }}</p>
        <p>Clipboard API supported: {{ isSupported }}</p>
      </div>
    </div>
    <LastChanged class="bound" />
    <ActiveElement class="bound" />
    <Favicon class="bound" />
    <Fullscreen class="bound" />
    <Image class="bound" />
  </div>
</template>

<style>
.bound{
  border: 1px dashed #ccc;
  padding: 16px;
  border-radius: 8px;
  margin:10px;
}
</style>
