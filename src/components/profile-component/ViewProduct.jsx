import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

// Tailwind file
import "./css/tailwind.css";

// mui-material
import { Typography } from "@mui/material";

//Avatar componet
import Avatar from "@mui/material/Avatar";

// import project
import useUserStore from "../../zustand/store";
import { backendRoutes } from "../../utils/routes";
import { setCoodernates } from "../../zustand/Product/detailsProduct";

function View() {
  const [market, setMarket] = React.useState({});
  const { infoSearch } = useUserStore();

  React.useEffect(() => {
    axios
      .get(
        `http://localhost:8080${backendRoutes.FindByMarketmanSector}${infoSearch["Business.id_sector"]}/${infoSearch["User.id_user"]}`,
        {
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((res) => {
        const [data] = res.data;
        setMarket(data);
      })
      .catch((error) => {
        console.log({ "Falha na busca": error });
      });
  }, []);

  console.log(infoSearch);
  return (
    <>
      <div className="hero container-inner mx-auto flex flex-col gap-16 sm:flex-row justify-between py-16">
        <div className="mt-8 mx-auto sm:mt-0">
          <Avatar
            alt="avatar-user"
            // src={`http://localhost:8080/user/avatar/${}`}
            sx={{ width: 290, height: 290 }}
            className="rounded-none"
          />
        </div>
        <div className="text-4xl font-bold w-full sm:w-3/5 text-center sm:text-left">
          <Typography className="mb-8" variant="h4">
            Informações do Producto:
          </Typography>
          <label className="mb-4 font-thin text-xl block">
            Nome Producto: {infoSearch["Business.name"]}
          </label>
          <label className="mb-4 font-thin text-xl block">
            Preço do Producto: {infoSearch["price"]}
          </label>
          <label className="mb-4 font-thin text-xl block">
            Nome de Mercado: {market["Market.name"]}
          </label>
        </div>
      </div>
      <div className="overflow-x-hidden">
        <div className="projects container-inner mx-auto border-t text-xl border-gray-500 py-6 mb-6 relative">
          <Typography className="mb-4" variant="h4">
            Informações Adicional:
          </Typography>
          <p className="text-1xl mb-4 block">
            Nome do Sector: {infoSearch["Business.Sector.name"]}
          </p>
          <label className="mb-4 font-thin text-xl block">
            Localização do Mercado:{" "}
            <Link
              to={"/app/map"}
              onClick={() => {
                setCoodernates(
                  market["Market.latitude"],
                  market["Market.logitude"]
                );
              }}
            >
              {market["Market.latitude"]}, {market["Market.logitude"]}
            </Link>
          </label>
        </div>
        <div className="projects container-inner mx-auto border-t text-xl border-gray-500 py-6 mb-6 relative">
          <Typography className="mb-4" variant="h4">
            Informações do Mercador:
          </Typography>
          <p className="text-1xl mb-4 block">
            Nome: {infoSearch["User.username"]}
          </p>
          <p className="text-1xl mb-4 block">
            Número de Telefone: {infoSearch["User.number_phone"]}
          </p>
          <p className="text-1xl mb-4 block">
            Email: {infoSearch["User.email"]}
          </p>
        </div>
      </div>
    </>
  );
}

export default View;
