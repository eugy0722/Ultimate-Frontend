import create from "zustand";
import { persist } from "zustand/middleware";

const useProductStore = create(
  persist(
    (set) => ({
      product: [],
      setProduct: (product) => set({ product: product }),
    }),
    {
      name: "product-storage",
      getStorage: () => sessionStorage,
    }
  )
);

export default useProductStore;
