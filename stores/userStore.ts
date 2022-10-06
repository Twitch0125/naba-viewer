export const useUserStore = defineStore('user', () => {
  const user = ref()
  const getUserDetails = async () => {
    const client = useClient()
    try {
      user.value = await client.query('auth.getTokenDetails')
    }
    catch (err) {

    }
  }
  return {
    user,
    getUserDetails,
  }
})
