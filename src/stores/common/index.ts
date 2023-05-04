import { defineStore } from 'pinia'

const useCommon = defineStore('common', {
  state: () => ({
    isLoading: false,
    snackbar: { show: false, message: '' }
  }),
  getters: {
    getIsLoading: (state) => state.isLoading,
    getSnackBar: (state) => state.snackbar
  },
  actions: {
    setIsLoading(payload: boolean) {
      this.isLoading = payload
    },
    setSnackBar(payload: any) {
      this.snackbar = payload
    },
    showSnackBar(message: string) {
      this.snackbar.show = true
      this.snackbar.message = message
    },
    hideSnackBar() {
      this.snackbar.show = false
      this.snackbar.message = ''
    }
  }
})

export default useCommon
