<script setup>
import { useActiveElement } from '@vueuse/core';

const activeElement = useActiveElement();

</script>
<template>
    <div @click="console.log(activeElement)">
        <h2>Active Element</h2>
        <div>Active Element: {{ activeElement }}</div>
        <!-- <div v-html="activeElement?.outerHTML"></div> -->
    </div>
</template>