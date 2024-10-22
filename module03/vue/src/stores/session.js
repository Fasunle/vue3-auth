import {defineStore} from "pinia"
import {ref} from 'vue'

export const useSessionStore = defineStore("session", () => {
    const fullName = ref("")
    const isLoggedIn = ref(false)

    const getFullName = () => fullName.value
    const setFullName = (value) => fullName.value = value
    const getIsLoggedIn = () => isLoggedIn.value
    const setIsLoggedIn = (value) => isLoggedIn.value = value

    return {getFullName, setFullName, getIsLoggedIn, setIsLoggedIn}
})