export const useConfig = defineStore("config",{
  state: () => ({
    language: '',
    theme: 'light'
  }),
  persist: true
})