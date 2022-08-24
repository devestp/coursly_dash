<script setup lang="ts">
const props = defineProps<{
    bgColor?: string,
    title: string,
}>();
</script>
<template>
    <button class="rounded-xl py-4 flex justify-center font-semibold text-lg" :class="bgColor ? `bg-[${bgColor}]` : 'bg-premium'">
        <slot name="icon"></slot>
        {{ title }}
    </button>
</template>