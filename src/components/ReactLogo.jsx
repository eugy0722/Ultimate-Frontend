import { ShopOutlined } from "@ant-design/icons";
import { Typography } from "@mui/material";

const ReactLogo = () => {
  return (
    <div className="flex gap-4 text-emerald-400">
      <ShopOutlined style={{ fontSize: "32px" }} />
      <Typography variant="h3">AMMIL</Typography>
    </div>
  );
};

export default ReactLogo;
