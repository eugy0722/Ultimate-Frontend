import React from "react";

// import @mui/material
import { Button, Grid, Typography } from "@mui/material";

// ant-icons
import { PlusOutlined } from "@ant-design/icons";

// import componentSkeleton
import ComponentSkeleton from "../ComponentSkeleton";
import DataTable from "../../../components/Tables/SectorizationDataTable";
import Formulary from "../../../components/formularies/Sectorization";

const ComponentMarket = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <ComponentSkeleton>
      <Grid className="flex flex-col m-4">
        <Typography variant="h5" margin={2}>
          Onde trabalhas e sector de atuação
        </Typography>
        <Grid sx={{ width: "100%", textAlign: "right" }}>
          <Button
            sx={{ background: "#b8e0e3" }}
            onClick={() => setIsModalOpen(true)}
          >
            <PlusOutlined style={{ fontSize: "20px" }} />
          </Button>
        </Grid>
        <Formulary isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
        <DataTable />
      </Grid>
    </ComponentSkeleton>
  );
};

export default ComponentMarket;
