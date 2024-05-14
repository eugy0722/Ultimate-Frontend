import { useState } from "react";
import { Link } from "react-router-dom";

//assets
import ReactLogo from "./ReactLogo";
import { BarsOutlined, CloseOutlined } from "@ant-design/icons";

// project imports
import useUserStore from "../../zustand/store";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const { isAuthenticated, logout, user } = useUserStore();

  // Variable with tailwindcss
  const styleLinkNav = "font-bold text-xl navbar-link hover:text-emerald-400";
  const styleLinkHeader =
    "font-bold text-xl header-link hover:text-emerald-400";

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="mx-auto flex h-24 max-w-screen-xl items-center justify-between px-4 text-white">
      <ReactLogo type="spin" />
      <div className="hidden md:flex">
        <p className={styleLinkHeader}>
          <Link to={"/home"}>Casa</Link>
        </p>
        <p className={styleLinkHeader}>
          <Link to={"/app/map"}>Mapas</Link>
        </p>
        {isAuthenticated ? (
          <>
            <p className={styleLinkHeader}>
              <Link to={"/settings/profile"}>Perfil</Link>
            </p>
            {user.perfil === "Consumidor" ? (
              <p className={styleLinkHeader}>
                <Link to={"/app/search"}>Pesquise</Link>
              </p>
            ) : (
              <></>
            )}
            {user.perfil === "Comerciante" ||
            user.perfil === "Prestador de Serviço" ? (
              <p className={styleLinkHeader}>
                <Link to={"/app/management/sectorization"}>Dashboard</Link>
              </p>
            ) : (
              <></>
            )}
            {user.perfil === "Administrador" ? (
              <p className={styleLinkHeader}>
                <Link to={"/dashboard/default"}>Dashboard</Link>
              </p>
            ) : (
              <></>
            )}
            <p className={styleLinkHeader}>
              <Link onClick={() => logout()}>Sair</Link>
            </p>
          </>
        ) : (
          <>
            <p className={styleLinkHeader}>
              <Link to={"/register"}>Inscrever-se</Link>
            </p>
            <p className={styleLinkHeader}>
              <Link to={"/login"}>Entrar</Link>
            </p>
          </>
        )}
      </div>

      <div onClick={handleNav} className="block md:hidden text-emerald-400">
        {nav ? (
          <CloseOutlined style={{ fontSize: "32px", cursor: "pointer" }} />
        ) : (
          <BarsOutlined style={{ fontSize: "32px", cursor: "pointer" }} />
        )}
      </div>

      <div
        className={
          nav
            ? "fixed left-0 top-0 h-full w-[60%] max-w-[300px] border-r border-gray-800 bg-gray-950 duration-500 ease-in-out"
            : "fixed left-[-100vw]"
        }
      >
        <div className="m-4">
          <ReactLogo type="spin" />
        </div>
        <ul>
          <li className={styleLinkNav}>
            <Link to={"/home"}>Casa</Link>
          </li>
          <li className={styleLinkNav}>
            <Link to={"/app/map"}>Mapas</Link>
          </li>
          {isAuthenticated ? (
            <>
              <li className={styleLinkNav}>
                <Link to={"/settings/profile"}>Perfil</Link>
              </li>
              {user.perfil === "Consumidor" ? (
                <p className={styleLinkNav}>
                  <Link to={"/app/search"}>Pesquise</Link>
                </p>
              ) : (
                <></>
              )}
              <li className={styleLinkNav}>
                <Link to={"#"}>Sair</Link>
              </li>
            </>
          ) : (
            <>
              <li className={styleLinkNav}>
                <Link to={"/register"}>Inscrever-se</Link>
              </li>
              <li className={styleLinkNav}>
                <Link to={"/login"}>Entrar</Link>
              </li>
            </>
          )}
          <li className={styleLinkNav}>
            <Link to={"/sobre"}>Sobre</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
