import create from 'zustand'

const useAuthStore = create((set) => ({
  isLoggedIn: false,
  isSuccess: false,
  isError: false,
  isLoading: false,

  setIsLoggedin: (value) => {
    set({ isLoggedIn: value })
  },
}))

export default useAuthStore
