import { computed, ComputedRef } from 'vue';
import { useRoute } from 'vue-router'


export function checkPage (pagePath: string): ComputedRef<boolean> {
    return computed(() => {
        return useRoute().path === pagePath
    })



} 