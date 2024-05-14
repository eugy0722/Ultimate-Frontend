// import @mui/material
import { Grid, Typography } from "@mui/material";

// import componentSkeleton
import ComponentSkeleton from "../ComponentSkeleton";

const ComponentMarket = () => (
  <ComponentSkeleton>
    <Grid>
      <Typography variant="h5" margin={2}>
        Lista de Mercados
      </Typography>
    </Grid>
  </ComponentSkeleton>
);

export default ComponentMarket;
