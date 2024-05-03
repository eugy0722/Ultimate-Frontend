import axios from "axios";
import useUserStore from "./store";

export const loginUser = async (inputs) => {
  try {
    const res = await axios.post("http://localhost:8080/login", inputs, {
      headers: { "Content-Type": "application/json" },
    });

    const data = await res.data;
    if (res.status === 200) {
      useUserStore
        .getState()
        .setUser(data.user, data.accessToken, data.refreshToken);
    } else {
      throw new Error(data.message);
    }
  } catch (error) {
    console.error("Falha ao entrar: ", error);
  }
};
