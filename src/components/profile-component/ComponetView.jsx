// Tailwind file
import "./css/tailwind.css";

// mui-material
import { Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

//Avatar componet
import Avatar from "@mui/material/Avatar";

// import project
import useUserStore from "../../zustand/store";
import UserhasApp from "./UserhasApp";
import { ExpandMoreOutlined } from "@mui/icons-material";
// import ImageUploader from "../ImageUploader";

function View() {
  const { user } = useUserStore();

  return (
    <>
      <div className="hero container-inner mx-auto flex flex-col sm:flex-row justify-between py-16">
        <div className="text-4xl font-bold w-full sm:w-3/5 text-center sm:text-left">
          <label className="font-thin text-xl">Nome Completo: </label>
          <Typography variant="h2" marginLeft={2} marginBottom={2}>
            {user.full_name}
          </Typography>
          <div className="text-green-700 leading-tight">
            <label className="font-thin text-xl">Nome De Utilizador: </label>
            <Typography variant="h2" marginLeft={2}>
              {user.username}
            </Typography>
          </div>
        </div>
        <div className="mt-8 mx-auto sm:mt-0">
          {/* {user.avatar_image ? ( */}
          <Avatar
            alt="avatar-user"
            src={`http://localhost:8080/user/avatar/${user.avatar_image}`}
            sx={{ width: 290, height: 290 }}
          />
          {/* ) : (
             <> 
               <h1>Upload sua imagem</h1> 
               <ImageUploader /> 
             </>
         )} */}
        </div>
      </div>
      <div className="container-inner mx-auto flex">
        <Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<ExpandMoreOutlined />}
            aria-controls="panel3-content"
            id="panel3-header"
          >
            <Typography variant="h5">Suas Informações</Typography>
          </AccordionSummary>
          <AccordionDetails className="w-96 mx-auto flex flex-col gap-6 sm:p-4 sm:flex-row sm:w-full">
            <p className="text-xl">Perfil: {user.perfil}</p>
            <p className="text-xl">Número de Telefone: {user.number_phone}</p>
            <p className="text-xl">Email: {user.email}</p>
          </AccordionDetails>
        </Accordion>
      </div>
      <div className="overflow-x-hidden">
        <div className="projects container-inner mx-auto text-xl border-t border-gray-500 border-b py-16 mb-16 relative">
          <h2 id="projects" className="font-bold mb-6"></h2>
          <div
            className="absolute right-0"
            style={{
              top: "50px",
              transform: "translate(100%) rotate(180deg)",
            }}
          >
            <svg width="170px" height="170px"></svg>
          </div>
          <UserhasApp />
        </div>
      </div>
    </>
  );
}

export default View;
