import { defineStore } from 'pinia'
export const useLoadingStore = defineStore('myLoading', {
  state: () => ({
    loading: false
  }),
  getters: {},
  actions: {
    chnageLoading(flag: boolean) {
      this.loading = flag
    }
  }
})
export default useLoadingStore
