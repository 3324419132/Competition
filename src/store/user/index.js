import { defineStore } from 'pinia';
export const useUserDataStore = defineStore('userData', ()=>{
    const userData = {
        nickname: '大豆橙', 
        account: 18949954607,
        token: "9-099-9-",
    }
    const recordData={
        isAgree: false
    }
    return userData
})