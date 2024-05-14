// import @mui/material
import { Grid, Typography } from "@mui/material";

// import ComponentSkeleton
import ComponentSkeleton from "../ComponentSkeleton";
import Formulary from "../../../components/formularies/BusinessForm";
import DataTable from "../../../components/Tables/BusinessDataTable";

const ProductService = () => {
  return (
    <ComponentSkeleton>
      <Grid>
        <Grid>
          <Typography variant="h5" marginBottom={2}>
            Registrar Productos ou Serviços
          </Typography>
          <Formulary />
        </Grid>
        <Grid>
          <Typography variant="h5" marginBottom={2} marginTop={2}>
            Lista de Productos & Serviços
          </Typography>
          <DataTable />
        </Grid>
      </Grid>
    </ComponentSkeleton>
  );
};

export default ProductService;
