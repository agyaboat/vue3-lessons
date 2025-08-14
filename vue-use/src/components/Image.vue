<script setup>
import { ref } from 'vue';
import { useImage } from '@vueuse/core';
import { UseImage } from '@vueuse/components';

const imageSrc = 'https://place.dog/1080/540';
const imageAlt = ref('Placeholder Image');
const {isLoading} = useImage({src:imageSrc})
</script>

<template>
    <div class="mxn">
        <h2>Use Image</h2>
        <div>Loading {{ isLoading }}</div>
        <div style="width: 200px; height: 200px; overflow: hidden; position: relative; margin-bottom: 20px;" >
            <div v-if="isLoading" style="background: gray; height: 100%; width: 100%;"></div>
            <img v-else :src="imageSrc" :alt="imageAlt" style="width: 100%; height: 100%;" />
        </div>

        <div style="width: 200px; height: 200px;">
            <UseImage src="https://place.dog/1080/540" style="width: 100%; height: 100%;">
                <template #loading>
                    <div style="background: gray; height: 100%; width: 100%;"></div>
                </template>
                <template #error>
                    <div style="color: red;">Error loading image</div>
                </template>
            </UseImage>
        </div>
    </div>
</template>