<script setup lang="ts">
import { useRoute } from "vue-router";
import {TabItem as TabItemProps} from '../types/TabItem';

const props = defineProps<{
    tabItem: TabItemProps,
}>();

const route = useRoute();
function isRouteActive(path: string): boolean{
    return path == route.fullPath;
}

</script>
<template>
    <router-link :to="tabItem.path">
        <div class="flex items-center mb-1">
            <div class="w-full mx-7 py-5 pl-8 rounded-xl flex items-center" :class="{'bg-[#F2F2FF]': isRouteActive(tabItem.path) }">
                <img :src="isRouteActive(tabItem.path) ? tabItem.activeAssetIcon : tabItem.assetIcon" :alt="`${tabItem.title}-icon`"
                    class="pr-4">
                {{ tabItem.title }}
            </div>
            <div v-if="isRouteActive(tabItem.path)" class="w-1 h-16 rounded-lg bg-accent"></div>
        </div>
    </router-link>
</template>