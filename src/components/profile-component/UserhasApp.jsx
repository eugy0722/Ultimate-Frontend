// import project
import useUserStore from "../../zustand/store";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const UserhasApp = () => {
  const { user } = useUserStore();

  if (user.perfil === "Consumidor") {
    return (
      <>
        <ul className="text-lg sm:text-xl">
          <li className="checkmark mb-6">
            <Typography variant="h3">
              <Link to={"#"}>Lista de Desejos</Link>
            </Typography>
            <div className="text-lg text-gray-600"></div>
          </li>
          <li className="checkmark mb-6">
            <Typography variant="h3">
              <Link to={"#"}>Queridos comerciantes</Link>
            </Typography>
            <div className="text-lg text-gray-600"></div>
          </li>
          <li className="checkmark mb-6">
            <Typography variant="h3">
              <Link to={"/app/search"}>Productos, Serviços e Mercados</Link>
            </Typography>
            <div className="text-lg text-gray-600"></div>
          </li>
          <li className="checkmark mb-6">
            <Typography variant="h3">
              <Link to={"#"}>Mapas</Link>
            </Typography>
            <div className="text-lg text-gray-600"></div>
          </li>
        </ul>
      </>
    );
  }
  if (user.perfil === "Comerciante") {
    return (
      <>
        <ul className="text-lg sm:text-xl">
          <li className="checkmark mb-6">
            <Typography variant="h3">
              <Link to={"#"}>Meus Productos ou Serviços</Link>
            </Typography>
            <div className="text-lg text-gray-600"></div>
          </li>
          <li className="checkmark mb-6">
            <Typography variant="h3">
              <Link to={"#"}>Meu Local de Trabalho</Link>
            </Typography>
            <div className="text-lg text-gray-600"></div>
          </li>
          <li className="checkmark mb-6">
            <Typography variant="h3">
              <Link to={"#"}>Productos, Serviços e Mercados</Link>
            </Typography>
            <div className="text-lg text-gray-600"></div>
          </li>
        </ul>
      </>
    );
  }
  if (user.perfil === "Administrador") {
    return (
      <>
        <Typography variant="h2" sx={{ marginBottom: 5 }}>
          Aplicações úteis:
        </Typography>
        <ul className="m-4 text-lg sm:text-xl">
          <li className="checkmark mb-6">
            <Typography variant="h3">
              <Link to={"/Dashboard/default"}>Dashboard e Administração</Link>
            </Typography>
            <div className="text-lg text-gray-600"></div>
          </li>
          <li className="checkmark mb-6">
            <Typography variant="h3">
              <Link to={"#"}>Consultar Mercados</Link>
            </Typography>
            <div className="text-lg text-gray-600"></div>
          </li>
          <li className="checkmark mb-6">
            <Typography variant="h3">
              <Link to={"#"}>Consultar Productos e Serviços</Link>
            </Typography>
            <div className="text-lg text-gray-600"></div>
          </li>
        </ul>
      </>
    );
  }
};

export default UserhasApp;
