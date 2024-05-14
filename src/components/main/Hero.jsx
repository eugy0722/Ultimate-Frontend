import Typewriter from "./Typewriter";
import TextButton from "./TextButton";
import useUserStore from "../../zustand/store";

const Hero = () => {
  const { isAuthenticated, user } = useUserStore();

  console.log(user);

  if (isAuthenticated) {
    return (
      <div className="top-0 mx-auto mt-[-96px] flex h-screen w-full max-w-screen-xl flex-col items-start justify-center text-left text-white">
        <p className="font-bold uppercase text-emerald-400 sm:text-4xl md:text-4xl">
          Seja Bem-vindo,{" "}
          <span className="text-2xl font-bold sm:text-5xl md:text-5xl">
            {" "}
            {user.full_name}{" "}
          </span>
        </p>
        <div className="mt-4 flex text-xl font-bold sm:text-3xl md:text-4xl">
          <p className="mr-2 md:mr-3">Faça as suas compras mais </p>
          <Typewriter staticText="Static" />
        </div>
        <p className=" mt-4 w-[90vw] text-xl font-bold text-white md:text-2xl">
          Bem-vindo a AMMIL, sua porta de entrada para desbloquear o potencial
          dos mercados informais.
        </p>
      </div>
    );
  } else {
    return (
      <div className="top-0 mx-auto mt-[-96px] flex h-screen w-full max-w-screen-xl flex-col items-center justify-center text-center text-white">
        <p className="p-2 font-bold uppercase text-emerald-400">
          Faça suas compras com
        </p>
        <h1 className="text-5xl font-bold sm:text-6xl md:text-7xl">AMMIL</h1>
        <div className="mt-4 flex text-xl font-bold sm:text-3xl md:text-4xl">
          <p className="mr-2 md:mr-3">Faça as suas compras mais </p>
          <Typewriter staticText="Static" />
        </div>
        <p className=" mt-4 w-[90vw] text-xl font-bold text-gray-400 md:text-2xl">
          Bem-vindo a AMMIL, sua porta de entrada para desbloquear o potencial
          dos mercados informais.
        </p>
      </div>
    );
  }
};

export default Hero;
