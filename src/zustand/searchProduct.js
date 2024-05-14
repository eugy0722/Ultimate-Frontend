import axios from "axios";
import useUserStore from "./store";
import { backendRoutes } from "../utils/routes";

export const searchSimilarProduct = async (inputs) => {
  try {
    const res = await axios.post(
      `http://localhost:8080${backendRoutes.FindAllBusinessesAboutThisSimilar}`,
      inputs,
      {
        headers: { "Content-Type": "application/json" },
      }
    );

    const data = await res.data;
    if (res.status === 200) {
      useUserStore.getState().setSearch(data);
      if (!data) return true;
      return false;
    } else {
      throw new Error(data.message);
    }
  } catch (error) {
    console.error("Falha ao entrar: ", error);
  }
};

export const InfoProduct = async (inputs) => {
  try {
    const res = await axios.get(
      `http://localhost:8080${backendRoutes.FindByPK}${inputs}`,
      inputs,
      {
        headers: { "Content-Type": "application/json" },
      }
    );

    const data = await res.data;
    if (res.status === 200) {
      useUserStore.getState().setInfoSearch(data);
    } else {
      throw new Error(data.message);
    }
  } catch (error) {
    console.error("Falha na busca: ", error);
  }
};
