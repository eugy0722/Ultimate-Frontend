import axios from "axios";
import useUserStore from "./store";

export const loginUser = async (inputs) => {
  try {
    axios
      .post("http://localhost:8080/login", inputs, {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        const data = res.data;
        useUserStore
          .getState()
          .setUser(data.user, data.accessToken, data.refreshToken);
      })
      .catch(() => {
        alert(JSON.stringify({ Erro: "Erro na requisação" }));
      });
  } catch (error) {
    console.error("Falha ao entrar: ", error);
  }
};
