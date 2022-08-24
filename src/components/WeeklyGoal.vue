<script setup lang="ts">
import { DailyGoal } from '../types/DailyGoal';
const weekDays: Array<DailyGoal> = [
    {
        name: 'S',
        completed: true,
    },
    {
        name: 'M',
        completed: true,
    },
    {
        name: 'T',
        completed: false,
    },
    {
        name: 'W',
        completed: false,
    },
    {
        name: 'T',
        completed: false,
    },
    {
        name: 'F',
        completed: false,
    },
    {
        name: 'S',
        completed: false,
    },
];

const date = new Date();

</script>
<template>
    <div class="rounded-xl border-solid border-2 border-black flex flex-col w-full px-4 py-6">
        <div class="flex justify-between mb-6">
            <h5>Weekly Goal</h5>
            <img src="../assets/icons/edit.svg" alt="edit-weekly-goal">
        </div>
        <div class="flex justify-between mb-1">
            <div v-for="(day, index) in weekDays" :key="day.name"
                class="w-10 h-10 flex justify-center items-center rounded-lg"
                :class="{ 'bg-[#00E7B3]': day.completed, 'bg-accent': date.getDay() == index }">{{ day.name }}</div>
        </div>
        <div class="flex justify-between mb-6">
            <div v-for="(_day, index) in weekDays" :key="index"
                class="w-10 flex justify-center">
                    <div v-if="index == date.getDay()" class="w-1/2 h-1 bg-accent rounded-full"></div>
                </div>
        </div>
        <div class="flex font-normal text-xs items-center">
            <img src="../assets/icons/weekly-goal.svg" alt="weekly-goal-icon">
            <p class="ml-2">Your Goal: 2/6 Days</p>
        </div>
    </div>
</template>