<script setup lang="ts">
defineProps<{
    avatar: string,
}>();
</script>

<template>
    <div class="rounded-full overflow-hidden w-16 h-16 border-4 border-accent/30">
        <img :src="avatar" alt="avatar-image" class="w-full h-full">
    </div>
</template>