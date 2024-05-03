// import @mui/material
import { Grid, Typography } from "@mui/material";

// import componentSkeleton
import ComponentSkeleton from "../ComponentSkeleton";
import Formulary from "../../../components/formularies/MarketForm";
import DataTable from "../../../components/Tables/MarketDataTable";

const ComponentMarket = () => (
  <ComponentSkeleton>
    <Grid>
      <Grid>
        <Typography variant="h5" margin={2}>
          Registrar Mecados
        </Typography>
        <Formulary />
      </Grid>
      <Grid>
        <Typography variant="h5" margin={2}>
          Lista de Mercados
        </Typography>
        <DataTable />
      </Grid>
    </Grid>
  </ComponentSkeleton>
);

export default ComponentMarket;
