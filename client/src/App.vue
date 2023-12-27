<template>
    <v-app>
        <Default>
            <template v-slot:view>
                <RouterView />
            </template>    
        </Default>
    </v-app>
</template>


<script lang="ts" setup>

    import { RouterView } from 'vue-router'
    import Default from '@/layouts/Default.vue';
</script>