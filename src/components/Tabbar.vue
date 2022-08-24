<script setup lang="ts">
import Button from './Button.vue';
import TabItem from './TabItem.vue';
import { routes } from '../routes';
import { useRoute } from 'vue-router';
import { TabItem as TabItemProps } from '../types/TabItem';
import HomeIcon from '../assets/icons/tab/home.svg';
import HomeIconActive from '../assets/icons/tab/home-active.svg';
import CoursesIcon from '../assets/icons/tab/courses.svg';
import CoursesIconActive from '../assets/icons/tab/courses-active.svg';
import SkillTestIcon from '../assets/icons/tab/skill-test.svg';
import SkillTestIconActive from '../assets/icons/tab/skill-test-active.svg';
import JobBoardIcon from '../assets/icons/tab/job-board.svg';
import JobBoardIconActive from '../assets/icons/tab/job-board-active.svg';
import ArcadeIcon from '../assets/icons/tab/arcade.svg';
import ArcadeIconActive from '../assets/icons/tab/arcade-active.svg';

const tabItems: Array<TabItemProps> = [
    {
        title: "Home",
        assetIcon: HomeIcon,
        activeAssetIcon: HomeIconActive,
        path: routes.home.path,
    },
    {
        title: "Courses",
        assetIcon: CoursesIcon,
        activeAssetIcon: CoursesIconActive,
        path: routes.courses.path,
    },
    {
        title: "Skills Test",
        assetIcon: SkillTestIcon,
        activeAssetIcon: SkillTestIconActive,
        path: routes.skillTests.path,
    },
    {
        title: "Job Board",
        assetIcon: JobBoardIcon,
        activeAssetIcon: JobBoardIconActive,
        path: routes.jobBoard.path,
    },
    {
        title: "Arcade",
        assetIcon: ArcadeIcon,
        activeAssetIcon: ArcadeIconActive,
        path: routes.arcade.path,
    },
];

const route = useRoute();

function isActive(path: string): boolean {
    return route.path == path;
}

</script>
<template>
    <div class="w-full h-full flex flex-col py-12 bg-white">
        <div class="flex flex-1 flex-col items-center">
            <div class="h-1/4">
                <router-link :to="{ name: routes.home.name }">
                    <img src="../assets/images/logo.png" alt="logo" class="w-20 h-20" />
                </router-link>
            </div>
            <div class="h-3/4 w-full">
                <TabItem v-for="item in tabItems" :key="item.title" :tab-item="item" />
            </div>
        </div>
        <div class="px-7">
            <Button title="Upgrade" class="w-full">
                <template v-slot:icon>
                    <img src="../assets/icons/flash.svg" alt="premium-icon">
                </template>
            </Button>
        </div>
    </div>
</template>