<template>
    <div class="main">
        <Header></Header>

        <v-main class="bg-grey-lighten-3 h-screen">
            <v-container>
                <v-row>
                    <v-col cols="2">
                        <v-sheet rounded="lg">
                            <v-list rounded="lg">
                                <v-list-item v-for="n in 5" :key="n" link :title="`List Item ${n}`"></v-list-item>

                                <v-divider class="my-2"></v-divider>

                                <v-list-item color="grey-lighten-4" link title="Refresh"></v-list-item>
                            </v-list>
                        </v-sheet>
                    </v-col>

                    <v-col>
                        <v-sheet rounded="lg">
                            <slot name="view"></slot>
                        </v-sheet>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>

        <Footer></Footer>
    </div>
</template>

<script lang="ts" setup>
import Footer from '@/components/layouts/Footer/Footer.vue'
import Header from '@/components/layouts/Header/Header.vue'

import { computed } from 'vue'
import { useRoute } from 'vue-router'

//computed
const isMain = computed(() => {
    return useRoute().path === '/';
})


</script>

