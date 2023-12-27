<template>
    <v-app-bar flat>
        <v-container class="mx-auto d-flex align-center justify-center">
            <v-avatar class="me-4 " color="grey-darken-1" size="32"></v-avatar>

            <div v-if="isMain">
                <v-btn variant="text">
                    <RouterLink to="/about">Вперед</RouterLink>
                </v-btn>
            </div>

            <div v-else>
                <v-btn v-for="path, link in links" :key="link" variant="text">
                    <RouterLink :to="path">{{ link }}</RouterLink>
                </v-btn>
            </div>

            <v-spacer></v-spacer>

            <v-responsive max-width="160">
                <v-text-field density="compact" flat hide-details label="Search" rounded="lg" single-line
                    variant="solo-filled"></v-text-field>
            </v-responsive>
        </v-container>
    </v-app-bar>
</template>


<script lang="ts" setup>
import { RouterLink } from 'vue-router';
import { checkPage } from '@/components/common/helpers/pageBoolean'


const isMain = checkPage('/');
const links = {
    'Главная': '/',
    'Сообщения': '/messages'
}
</script>

<style lang="scss" scoped>


</style>