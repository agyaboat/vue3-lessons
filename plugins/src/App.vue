<script setup>
import { useHello } from './composables/hello';

const helloFromComposable = useHello('AgyaBoat');
</script>

<template>
  <h1>Plugins Hub</h1>
  <div>
    {{ $hello('Vue') }}
  </div>
  <div>
    {{ helloFromComposable }}
  </div>
</template>

<style scoped>
.bound{
  border: 1px dashed #ccc;
  padding: 16px;
  border-radius: 8px;
  margin:10px;
}
</style>
