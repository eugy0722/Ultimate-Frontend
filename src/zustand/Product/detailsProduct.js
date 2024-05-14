import axios from "axios";

import useInfoStore from "./store";

export const searchProduct = async (inputs) => {
  try {
    const res = await axios.post(
      "http://localhost:8080/marketmanbusiness/exactsearch",
      inputs,
      {
        headers: { "Content-Type": "application/json" },
      }
    );

    const data = await res.data;
    if (res.status === 200) {
      useInfoStore.getState().searchProduct(data);
      console.log(data);
    } else {
      throw new Error(data.message);
    }
  } catch (error) {
    console.error("Falha na busca: ", error);
  }
};

export const searchMarkets = async () => {
  try {
    const res = await axios.get("http://localhost:8080/market/find/all", {
      headers: { "Content-Type": "application/json" },
    });

    const data = await res.data;
    if (res.status === 200) {
      useInfoStore.getState().setMarkets(data);
    } else {
      throw new Error(data.message);
    }
  } catch (error) {
    console.error("Falha na busca: ", error);
  }
};

export const setMarket = (inputs) => {
  useInfoStore.getState().setMarket(inputs);
};

export const setSector = (inputs) => {
  useInfoStore.getState().setSector(inputs);
};

export const setCoodernates = (latitude, logitude) => {
  useInfoStore.getState().setCoodernates(latitude, logitude);
};
