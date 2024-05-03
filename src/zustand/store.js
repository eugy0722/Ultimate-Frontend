import create from "zustand";
import { persist } from "zustand/middleware";

const useUserStore = create(
  persist(
    (set) => ({
      isAuthenticated: false,
      user: null,
      accessToken: null,
      refreshToken: null,
      setUser: (user, accessToken, refreshToken) =>
        set({
          user: user,
          accessToken: accessToken,
          refreshToken: refreshToken,
          isAuthenticated: true,
        }),
      logout: () =>
        set({
          user: null,
          accessToken: null,
          refreshToken: null,
          isAuthenticated: false,
        }),
    }),
    {
      name: "user-storage",
      getStorage: () => sessionStorage,
    }
  )
);

export default useUserStore;
