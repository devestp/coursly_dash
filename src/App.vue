<script setup lang="ts">
import Tabbar from './components/Tabbar.vue';
</script>

<template>
  <div class="w-screen h-screen bg-[#f9f9f9] flex">
    <div class="w-1/4 flex h-full">
      <tabbar />
    </div>
    <div class="w-3/4 flex h-full">
      <router-view></router-view>
    </div>
  </div>
</template>