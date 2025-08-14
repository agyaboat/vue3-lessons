<script setup>
import { useFavicon } from '@vueuse/core';
import { ref } from 'vue';

const favicon = useFavicon();
const fav = ref(false) 
const changeFavicon = () => {
    fav.value = !fav.value;
    fav.value ? favicon.value = '/favicon.ico' : favicon.value = '/yes.gif';
};

const vDirective = {
    mounted: (el, binding) =>{
        console.log(el)
        alert(binding.value)
    }
}

const vColor = {
    mounted: (el, binding) =>{
        el.style.color = binding.value;
    }
}

</script>
<template>
    <div v-directive="24">
        <h2 v-color="'red'">Favicon</h2>
        <button @click="changeFavicon">Change</button>
    </div>
</template>