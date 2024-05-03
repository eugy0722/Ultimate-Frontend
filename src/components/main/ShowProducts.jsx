import Productos from "../../assets/MostreSeusProductos.jpg";
import TextButton from "./TextButton";

const ShowProducts = () => {
  return (
    <div className="w-full px-4 py-6">
      <div className="mx-auto grid max-w-screen-xl md:grid-cols-2">
        <div className="flex flex-col items-start justify-center">
          <p className="font-bold uppercase text-emerald-400">
            Publique Seus Productos
          </p>
          <h1 className="mt-2 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
            Visibilidade dos Seus Productos
          </h1>
          <p className="mt-2 text-white"></p>
        </div>
        <img className="mx-auto my-4 w-[500px]" src={Productos} alt="/" />
      </div>
    </div>
  );
};

export default ShowProducts;
