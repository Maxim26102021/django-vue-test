<template>
    <div class="container">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterView />
    </div>
</template>


<script lang="ts" setup>

    import { RouterView, RouterLink } from 'vue-router'
    import Default from '@/layouts/Default.vue';
</script>