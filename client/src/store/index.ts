import { defineStore } from 'pinia'
import { MainState } from '@/types/mainStore'

export const useMainStore = defineStore({
  id: 'main',
  state: (): MainState => ({
    user: []
  }),
  getters: {
    returnUser: (state) => state.user,
  },
  actions: {
    putSMTH(data: []) {
      this.user = [];

      data.forEach(element => {
        this.user.push(element)
      });

    }
  },
})