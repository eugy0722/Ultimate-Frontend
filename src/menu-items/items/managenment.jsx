// assets
import {
  UserOutlined,
  ShopOutlined as MarketOutlined,
  LayoutOutlined as SectorOutlined,
  ShoppingCartOutlined as ProductServiceOutlined,
} from "@ant-design/icons";

// icons
const icons = {
  UserOutlined,
  MarketOutlined,
  SectorOutlined,
  ProductServiceOutlined,
};

// ==============================|| MENU ITEMS - UTILITIES ||============================== //

const managenment = {
  id: "managenment",
  title: "managenment",
  type: "group",
  children: [
    {
      id: "manager-users",
      title: "Utilizadores",
      type: "item",
      url: "/dashboard/user",
      icon: icons.UserOutlined,
    },
    {
      id: "manager-markets",
      title: "Mercados",
      type: "item",
      url: "/dashboard/market",
      icon: icons.MarketOutlined,
    },
    {
      id: "manager-sectors",
      title: "Sectores",
      type: "item",
      url: "/dashboard/sector",
      icon: icons.SectorOutlined,
    },
    {
      id: "manager-products",
      title: "Productos & Servicos",
      type: "item",
      url: "/dashboard/business",
      icon: icons.ProductServiceOutlined,
    },
  ],
};

export default managenment;
