import { useState } from "react";
import axios from "axios";

export default function LogInAction(data) {
  const [user, setUser] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const [refreshToken, setRefreshToken] = useState("");

  try {
    axios
      .post("http://localhost:8080/login", data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        if (res.data) {
          setUser(res.data.user);
          setAccessToken(res.data.accessToken);
          setRefreshToken(res.data.refreshToken);

          return { user, accessToken, refreshToken };
        }
      })
      .catch((error) => {
        console.log(error);
      });
    return;
  } catch (err) {
    console.log(err);
  }
}

// const RegisterAction = (data, redirect = false) => {
//   try {
//     if (data !== null) {
//       axios
//         .post("http://localhost:8080/user/register", data, {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         })
//         .then((response) => {
//           alert(JSON.stringify(response.data, null, 2));
//           if (redirect) navigate("/login");
//           return true;
//         })
//         .catch((error) => {
//           console.log(error);
//         });
//     }
//   } catch (err) {
//     console.log(err);
//   }

//   return false;
// };
