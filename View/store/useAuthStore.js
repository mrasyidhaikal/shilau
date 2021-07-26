import create from 'zustand'

const useAuthStore = create((set) => ({
  isLoggedIn: false,
  isSuccess: false,
  isError: false,
  isLoading: false,

  setIsLoggedIn: (value) => {
    set({ isLoggedIn: value })
  },
}))

export default useAuthStore
