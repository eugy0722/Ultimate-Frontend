/* eslint-disable react/jsx-key */
import React from "react";
import axios from "axios";

// Assets
import { PlusOutlined } from "@ant-design/icons";

// import @mui/material
import {
  Button,
  Grid,
  Typography,
  Stack,
  Select,
  InputLabel,
  MenuItem,
} from "@mui/material";

// import ComponentSkeleton
import ComponentSkeleton from "../ComponentSkeleton";

// import project
import { backendRoutes } from "../../../utils/routes.js";
import useUserStore from "../../../zustand/store.js";
import DataTable from "../../../components/Tables/MarketmanBusinessDataTable";
import Formulary from "../../../components/formularies/ProductServices";

const ProductService = () => {
  const [sectors, setSectors] = React.useState([]);
  const [id_sector, setId_Sector] = React.useState("");
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const { user } = useUserStore();

  React.useEffect(() => {
    axios
      .get(
        `http://localhost:8080${backendRoutes.SearchInfoMarketman}${user.id_user}`
      )
      .then((response) => {
        const data = response.data;

        setSectors(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleChange = (e) => {
    setId_Sector(e.target.value);
    console.log(user.id_user, id_sector);
  };

  return (
    <ComponentSkeleton>
      <Grid className="">
        <Typography variant="h5" marginBottom={4} marginTop={2}>
          Lista dos seus Productos & Serviços Registrados
          <Grid className="flex gap-4 items-end my-4">
            <Grid item xs={12} style={{ flex: 6 }}>
              <Stack spacing={1}>
                <InputLabel htmlFor="id-business">Nome do Producto*</InputLabel>
                <Select
                  fullWidth
                  id="id_business"
                  type="number"
                  name="id_business"
                  inputProps={{}}
                  onChange={handleChange}
                >
                  {sectors.map(({ id_sector, sectorname }) => {
                    // eslint-disable-next-line react/jsx-key
                    return <MenuItem value={id_sector}>{sectorname}</MenuItem>;
                  })}
                </Select>
              </Stack>
            </Grid>
            <Grid style={{ flex: 1 }}>
              <Button
                sx={{ background: "#b8e0e3", height: 43, width: 175 }}
                onClick={() => setIsModalOpen(true)}
              >
                <PlusOutlined style={{ fontSize: "20px" }} />
              </Button>
            </Grid>
          </Grid>
          <Formulary
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            id_sector={id_sector}
          />
        </Typography>
        <DataTable id_sector={id_sector} />
      </Grid>
    </ComponentSkeleton>
  );
};

export default ProductService;
