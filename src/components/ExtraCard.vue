<script setup lang="ts">
import { Extra } from '../types/Extra';

defineProps<{
    extra: Extra,
}>();
</script>

<template>
    <div class="rounded-xl border-2 border-solid border-black py-6 px-7 flex w-full">
        <img :src="extra.icon" :alt="`${extra.title}-cover`">
        <p class="font-semibold text-base ml-4">{{ extra.title }}</p>
    </div>
</template>