<script></script>
<template>
    <div class="flex items-center bg-white rounded-lg py-4 px-4 border-hidden border-2 focus-within:border-solid">
        <slot name="icon"></slot>
        <input type="text" class="outline-none font-normal text-xs placeholder:font-normal placeholder:text-xs"
            v-bind="$attrs">
    </div>
</template>