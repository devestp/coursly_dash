<script setup lang="ts">
import { WeeklyLeaderMember } from '../types/WeeklyLeaderMember';
import MemberOne from '../assets/images/member-one.png';
import MemberTwo from '../assets/images/member-two.png';
import MemberThree from '../assets/images/member-three.png';
import MemberFour from '../assets/images/member-four.png';

const weeklyLeaderMembers: Array<WeeklyLeaderMember> = [
    {
        name: 'Saleh Hosseini',
        avatar: MemberOne,
        profession: 'UX Designer',
        isPro: true,
        xp: 1912,
    },
    {
        name: 'Iman Ansarifard',
        avatar: MemberTwo,
        profession: 'Product Designer',
        isPro: true,
        xp: 1800,
    },
    {
        name: 'Soheil Najafi',
        avatar: MemberThree,
        profession: 'Product Designer',
        isPro: true,
        xp: 1213,
    },
    {
        name: 'Mobin Madadi',
        avatar: MemberFour,
        profession: 'Visual Designer',
        isPro: true,
        xp: 1011,
    },
];
</script>
<template>
    <div class="rounded-xl border-solid border-2 border-black flex flex-col w-full px-4 py-6">
        <div class="flex justify-between mb-6">
            <h5>Weekly Leader</h5>
            <img src="../assets/icons/more.svg" alt="more-weekly-leader">
        </div>
        <div class="flex flex-col">
            <div v-for="(member, index) in weeklyLeaderMembers" :key="member.name" class="flex justify-between" :class="{ 'mb-8': index != weeklyLeaderMembers.length - 1 }">
                <div class="flex">
                    <img :src="member.avatar" :alt="`${member.name}-avatar`" class="w-10 h-10">
                    <div class="flex flex-col ml-3">
                        <div class="flex items-center">
                            <h6 class="text-sm font-semibold">{{ member.name }}</h6>
                            <p v-if="member.isPro" class="font-semibold text-xs ml-3 text-accent">Pro</p>
                        </div>
                        <p class="text-xs font-normal text-black/40 ">{{ member.profession }}</p>
                    </div>
                </div>
                <p class="text-sm font-medium">{{ member.xp }}xp</p>
            </div>
        </div>
    </div>
</template>