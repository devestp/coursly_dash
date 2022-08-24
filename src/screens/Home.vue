<script setup lang="ts">
import TextInput from '../components/TextInput.vue';
import IconCard from '../components/IconCard.vue';
import CircleAvatar from '../components/CircleAvatar.vue';
import CourseCard from '../components/CourseCard.vue';
import { Course, Level } from '../types/Course';
import { Extra } from '../types/Extra';
import AvatarImage from '../assets/images/avatar.png';
import CourseCoverOne from '../assets/images/course-cover-one.png';
import CourseCoverTwo from '../assets/images/course-cover-two.png';
import ExtraIconOne from '../assets/icons/extra-icon-one.svg';
import ExtraIconTwo from '../assets/icons/extra-icon-two.svg';
import ExtraCard from '../components/ExtraCard.vue';
import WeeklyGoal from '../components/WeeklyGoal.vue';
import WeeklyLeader from '../components/WeeklyLeader.vue';
import { routes } from '../routes';

const courses: Array<Course> = [
    {
        cover: CourseCoverOne,
        title: 'Design Terminology',
        type: 'Course',
        totalLesson: 64,
        duration: 35,
        level: Level.beginner,
    },
    {
        cover: CourseCoverTwo,
        title: 'UI Design Foundation',
        type: 'Career Path',
        totalLesson: 85,
        duration: 40,
        level: Level.intermediate,
    },
];

const extras: Array<Extra> = [
    {
        title: 'Design Community',
        icon: ExtraIconOne,
    },
    {
        title: 'Design Roadmap',
        icon: ExtraIconTwo,
    }
];

</script>
<template>
    <div class="px-6 mt-10 overflow-x-scroll flex flex-col w-full">
        <div class="flex items-center justify-between mb-7">
            <h4 class="font-extrabold text-3xl">Home</h4>
            <div class="flex items-center space-x-4">
                <TextInput placeholder="Search course, topic or ..." />
                <IconCard>
                    <img src="../assets/icons/notification.svg" alt="notification-icon">
                </IconCard>
                <CircleAvatar :avatar="AvatarImage" />
            </div>
        </div>
        <div class="w-full mb-12">
            <img src="../assets/images/banner.png" alt="ad banner" class="w-full">
        </div>
        <div class="flex w-full mb-12">
            <div class="w-2/3 pr-4">
                <div class="flex justify-between mb-6">
                    <h5 class="font-bold text-xl">Hot Courses</h5>
                    <router-link :to="{name: routes.courses.name}" class="text-base font-normal text-accent">
                        <div class="flex">
                            <p class="mr-2">View All</p>
                            <img src="../assets/icons/arrow-right.svg" alt="view-all-courses">
                        </div>
                    </router-link>
                </div>
                <div class="flex space-x-6 mb-10">
                    <CourseCard v-for="course in courses" :key="course.title" :course="course"/>
                </div>
                <div class="flex mb-6">
                    <h5 class="font-bold text-xl">Extra</h5>
                </div>
                <div class="flex space-x-7">
                    <ExtraCard v-for="extra in extras" :key="extra.title" :extra="extra" />
                </div>
            </div>
            <div class="w-1/3 flex flex-col justify-between">
                <WeeklyGoal />
                <WeeklyLeader />
            </div>
        </div>
    </div>
</template>