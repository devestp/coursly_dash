export interface Course{
    title: string,
    cover: string,
    type: 'Course' | 'Career Path',
    totalLesson: number,
    duration: number,
    level: Level,
}

export enum Level{
    beginner,
    intermediate,
    advanced,
}