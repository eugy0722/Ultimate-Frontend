// import @mui/material
import { Grid, Typography } from "@mui/material";

// import ComponentSkeleton
import ComponentSkeleton from "../ComponentSkeleton";
import Formulary from "../../../components/formularies/SectorForm";
import DataTable from "../../../components/Tables/SectorDataTable";

const Sector = () => (
  <ComponentSkeleton>
    <Grid>
      <Grid>
        <Typography variant="h5" marginBottom={2}>
          Registar Sector
        </Typography>
        <Formulary />
      </Grid>
      <Grid>
        <Typography variant="h5" marginTop={2} marginBottom={2}>
          Lista de Sectores
        </Typography>
        <DataTable />
      </Grid>
    </Grid>
  </ComponentSkeleton>
);

export default Sector;
