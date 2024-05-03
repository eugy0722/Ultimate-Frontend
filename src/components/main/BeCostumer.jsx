import { Typography } from "@mui/material";
import BeCostumerImage from "../../assets/beCostumerImage.png";

const BeCostumer = () => {
  return (
    <div className="w-full bg-white px-4 py-6">
      <div className="mx-auto grid max-w-screen-xl md:grid-cols-2">
        <img className="mx-auto my-4 w-[500px]" src={BeCostumerImage} alt="/" />
        <div className="flex flex-col items-start justify-center">
          <p className="font-bold uppercase text-emerald-400">Por Quê Usar?</p>
          <h1 className="mt-2 text-2xl font-bold text-black sm:text-3xl md:text-4xl">
            Pesquise Seus Productos sem Sair de Casa
          </h1>
          <ul className="flex gap-4 flex-col mt-6 text-black">
            <li>
              <Typography variant="h5">O quê Comprar?</Typography>
            </li>
            <li>
              <Typography variant="h5">Onde Comprar?</Typography>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BeCostumer;
