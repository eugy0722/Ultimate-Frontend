// Tailwind file
import "./css/tailwind.css";

// mui-material
import { Typography } from "@mui/material";

//Avatar componet
import Avatar from "@mui/material/Avatar";

// import project

function View() {
  return (
    <>
      <div className="hero container-inner mx-auto flex flex-col gap-16 sm:flex-row justify-between py-16">
        <div className="mt-8 mx-auto sm:mt-0">
          <Avatar
            alt="avatar-user"
            src={`http://localhost:8080/user/avatar/${}`}
            sx={{ width: 290, height: 290 }}
            className="rounded-none"
          />
        </div>
        <div className="text-4xl font-bold w-full sm:w-3/5 text-center sm:text-left">
          <Typography className="mb-8" variant="h4">
            Informações do Producto:
          </Typography>
          <label className="mb-4 font-thin text-xl block">
            Nome Producto:{" "}
          </label>
          <label className="mb-4 font-thin text-xl block">
            Preço do Producto:{" "}
          </label>
          <label className="mb-4 font-thin text-xl block">
            Nome de Mercado:{" "}
          </label>
        </div>
      </div>
      <div className="overflow-x-hidden">
        <div className="projects container-inner mx-auto border-t text-xl border-gray-500 border-b py-16 mb-16 relative">
          <Typography className="mb-4" variant="h4">
            Informações do Mercador:
          </Typography>
          <p className="text-1xl mb-4 block">Nome: {}</p>
          <p className="text-1xl mb-4 block">Número de Telefone: {}</p>
          <p className="text-1xl mb-4 block">Email: {}</p>
        </div>
      </div>
    </>
  );
}

export default View;
