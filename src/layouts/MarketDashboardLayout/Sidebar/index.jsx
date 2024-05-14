import React from "react";

// assets
import {
  UserOutlined,
  ShopOutlined as MarketOutlined,
  LayoutOutlined as SectorOutlined,
  ShoppingCartOutlined as ProductServiceOutlined,
  BarsOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const liClasses = "px-4 py-2 cursor-pointer hover:bg-slate-100";
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(
    window.innerWidth < 730 ? false : true
  );
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div
        className={`fixed bg-white py-16 h-96 rounded-2xl border-r-2 border-b-2 transition-all w-16`}
      >
        {/* <div className="mx-2">
          <span
            onClick={toggleSidebar}
            className="inline-flex w-12 h-12 items-center justify-center cursor-pointer rounded-full hover:bg-slate-200"
          >
            <BarsOutlined style={{ fontSize: "24px" }} />
          </span>
        </div> */}

        <ul className="my-4 whitespace-nowrap overflow-x-hidden">
          <Link to={"sectorization"}>
            <li className={liClasses}>
              <span className="inline-block mb-4 w-8 mr-3.5">
                <MarketOutlined style={{ fontSize: "24px" }} />
              </span>
              <span>Mercado de actuação</span>
            </li>
          </Link>
          <li className={liClasses}>
            <Link to={"product"}>
              <span className="inline-block mb-4 w-8 mr-3.5">
                <ProductServiceOutlined style={{ fontSize: "24px" }} />
              </span>
              <span>Meus Productos e Serviços</span>
            </Link>
          </li>
          <li className={liClasses}>
            <Link to={"/settings/profile"}>
              <span className="inline-block mb-4 w-8 mr-3.5">
                <UserOutlined style={{ fontSize: "24px" }} />
              </span>
              <span>Perfil de comerciante</span>
            </Link>
          </li>
        </ul>
      </div>

      {/* Empty div for pushing main content to right according to the width of the sidebar */}
      <div
        className={`flex-shrink-0 h-screen w-16 ${isSidebarOpen && "md:w-60"}`}
      ></div>
    </>
  );
};

export default Sidebar;
