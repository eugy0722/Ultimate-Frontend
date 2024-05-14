import create from "zustand";
import { persist } from "zustand/middleware";

const useUserStore = create(
  persist(
    (set) => ({
      isAuthenticated: false,
      user: null,
      accessToken: null,
      refreshToken: null,
      search: [],
      setSearch: (search) => set({ search: search }),
      infoSearch: [],
      setInfoSearch: (infoSearch) => set({ infoSearch: infoSearch }),
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
          search: [],
          infoSearch: [],
        }),
    }),
    {
      name: "user-storage",
      getStorage: () => sessionStorage,
    }
  )
);

export default useUserStore;
