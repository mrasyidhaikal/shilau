import create from 'zustand'

const useGlobalStore = create((set) => ({
  userState: {
    fullName: '',
    email: '',
    uid: '',
  },

  setUser: (fullName, email, uid) => {
    set({
      userState: {
        fullName: fullName,
        email: email,
        uid: uid,
      },
    })
  },
  unsubscribeGlobalStore: () => {
    set({
      userState: {
        fullName: '',
        email: '',
        uid: '',
      },
    })
  },
}))

export default useGlobalStore
