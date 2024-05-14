import create from "zustand";
import { persist } from "zustand/middleware";

const useInfoStore = create(
  persist(
    (set) => ({
      product: [],
      setProduct: (product) => set({ product: product }),
      markets: [],
      setMarkets: (markets) => set({ markets: markets }),
      market: {},
      setMarket: (market) => set({ market: market }),
      sector: {},
      setSector: (sector) => set({ id_sector: sector }),
      image: {},
      setImage: (image) => set({ image: image }),
      latitude: "",
      logitude: "",
      setCoodernates: (latitude, logitude) => {
        set({ latitude: latitude, logitude: logitude });
      },
    }),
    {
      name: "product-storage",
      getStorage: () => sessionStorage,
    }
  )
);

export default useInfoStore;
