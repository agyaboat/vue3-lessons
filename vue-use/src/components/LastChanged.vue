<script setup>
import { useLastChanged } from '@vueuse/core';
import { ref } from 'vue';
let input = ref(0)

let lastChanged = useLastChanged(input);

</script>
<template>
    <div>
        <h2>Last Changed</h2>
        <input type="text" v-model="input">
        <div>Last Changed: {{ lastChanged }}</div>
    </div>
</template>