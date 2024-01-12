import { defineStore } from 'pinia'

export const useMainStore = defineStore({
  id: 'main',
  state: () => ({
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