import axios from "axios";

import useUserStore from "./store";

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
      useUserStore.getState().searchProduct(data);
      console.log(data);
    } else {
      throw new Error(data.message);
    }
  } catch (error) {
    console.error("Falha ao entrar: ", error);
  }
};
