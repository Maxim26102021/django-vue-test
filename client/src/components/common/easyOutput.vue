<template>
    <div>
        <p>type path to get data</p>

        <v-text-field v-model="inputData" hide-details="auto"></v-text-field>

        <div class="output" v-for="item, index in usersList" :key="index">
            <div>{{ item.name }}</div>
            <div>{{ item.description }}</div>
        </div>
        <v-btn @click="sendData" block>Send request</v-btn>
    </div>
</template>


<script setup lang="ts">

import { ref, computed, onMounted } from 'vue';
import { useMainStore } from '@/store';
import { usersService } from '@/shared/services/usersService'


const inputData = ref<string>('');


//methods
const sendData = () => usersService.makeRequest(inputData.value);


//computed
const usersList = computed(() => {
    return useMainStore().returnUser
})

</script>



<style scope lang="scss">
p {
    height: 54px;
    padding: 15px;
}

.output {
    padding: 5px 15px 5px 15px;
    display: flex;
    justify-content: space-between;
}
</style>