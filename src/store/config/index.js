import { defineStore } from 'pinia';
export const useConfigDataStore = defineStore('configData', ()=>{
    const configData = {
        nickname: '大豆橙',
        phone: '18949954607',
        backgroundImageUrl:'/src/image/config/home-swiper.jpg'
    }
    return configData
})

export const usePageDataStore = defineStore('pageData', ()=>{
    const pageConfigData = {
        pageIndex:'/home'
    }
    const changePageIndex = (pageIndex)=>{
        pageConfigData.pageIndex = pageIndex
    }
    return {pageConfigData,changePageIndex}
})