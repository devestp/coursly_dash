<script setup lang="ts">
import { Course, Level } from '../types/Course';
import { toPascalCase } from '../utils/String';

defineProps<{
    course: Course,
}>();
</script>
<template>
    <div class="rounded-xl border-solid border-2 border-black flex flex-col items-center w-full">
        <div class="rounded-b-lg bg-premium py-2 px-6 font-bold text-sm">
            Pro Course
        </div>
        <div class="mt-6 mb-7">
            <div class="w-32 h-32">
                <img :src="course.cover" :alt="`${course.title}-cover`" class="w-32 h-32">
            </div>
        </div>
        <h4 class="text-2xl font-semibold mb-2">{{course.title}}</h4>
        <p class="font-light text-base text-[#8C8C8C] mb-7">{{ course.type}}</p>
        <div class="flex space-x-2 mb-7">
            <div class="flex items-center text-xs font-medium"> <img src="../assets/icons/course/lesson.svg" alt="total-lesson-icon" class="mr-1" /> {{`${course.totalLesson} Lesson`}}</div>
            <div class="flex items-center text-xs font-medium"> <img src="../assets/icons/course/duration.svg" alt="duration-icon" class="mr-1" />{{`${course.duration} Hours`}}</div>
            <div class="flex items-center text-xs font-medium"> <img src="../assets/icons/course/level.svg" alt="level-icon" class="mr-1" />{{`${toPascalCase(Level[course.level])}`}}</div>
        </div>
    </div>
</template>