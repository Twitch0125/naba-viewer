import {Client, Account, ID, } from 'appwrite'
export default defineNuxtPlugin((nuxtApp) => {
    const config = useRuntimeConfig()
    const client = new Client().setEndpoint(config.public.APPWRITE_URL).setProject( config.APPWRITE_PROJECT)
    return {
        provide:{
            appwrite: client
        }
    }
})