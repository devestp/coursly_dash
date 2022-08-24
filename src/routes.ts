import { RouteRecordRaw } from 'vue-router';
import Home from './screens/Home.vue';
import Courses from './screens/Courses.vue';
import SkillTests from './screens/SkillTests.vue';
import JobBoard from './screens/JobBoard.vue';
import Arcade from './screens/Arcade.vue';


export const routes = {
    home: {
        name: 'home',
        path: '/',
    },
    courses: {
        name: 'courses',
        path: '/courses',
    },
    skillTests: {
        name: 'Skill_tests',
        path: '/skill-tests',
    },
    jobBoard: {
        name: 'job_board',
        path: '/job-board',
    },
    arcade: {
        name: 'arcade',
        path: '/arcade',
    },
};

export const routesDef: Array<RouteRecordRaw> = [
    {
        name: routes.home.name,
        path: routes.home.path,
        component: Home,
    },
    {
        name: routes.courses.name,
        path: routes.courses.path,
        component: Courses,
    },
    {
        name: routes.skillTests.name,
        path: routes.skillTests.path,
        component: SkillTests,
    },
    {
        name: routes.jobBoard.name,
        path: routes.jobBoard.path,
        component: JobBoard,
    },
    {
        name: routes.arcade.name,
        path: routes.arcade.path,
        component: Arcade,
    },
];