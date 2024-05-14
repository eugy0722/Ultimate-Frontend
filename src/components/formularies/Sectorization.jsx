/* eslint-disable react/prop-types */
import React from "react";

// routes from backend
import { backendRoutes } from "../../utils/routes";

// material-ui
import {
  FormHelperText,
  Typography,
  Button,
  Grid,
  InputLabel,
  OutlinedInput,
  Stack,
  Select,
  MenuItem,
} from "@mui/material";

// third party
import axios from "axios";
import { useForm } from "react-hook-form";

// project import
import AnimateButton from "../@extended/AnimateButton";
import useUserStore from "../../zustand/store";
import Modal from "../Modal/MarketRelation/Modal";

function Formulary({ isModalOpen, setIsModalOpen }) {
  const [markets, setMarkets] = React.useState([]);
  const [sectors, setSectors] = React.useState([]);

  const { user } = useUserStore();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  React.useEffect(() => {
    axios
      .get(`http://localhost:8080${backendRoutes.FindMarkets}`)
      .then((response) => {
        const data = response.data;

        setMarkets(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleChange = (e) => {
    const data = e.target.value;
    axios
      .get(
        `http://localhost:8080${backendRoutes.FindAllRelationshipAboutThisMarket}${data}`
      )
      .then((res) => {
        setSectors(res.data);
      })
      .catch((error) => console.log(error));
  };

  const onSubmit = (data) => {
    alert(JSON.stringify(data, null, 2));
    axios
      .post(`http://localhost:8080${backendRoutes.RegisterSectorization}`, data)
      .then((res) => alert(JSON.stringify(res.data, null, 2)))
      .catch((error) => console.log(error));
  };

  return (
    <>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        className="flex justify-center px-1 bg-white rounded-md max-w-80"
      >
        <div className="flex justify-center items-center flex-col p-5 gap-10">
          <Typography variant="h5">
            Registre seu mercado e sector de actuação
          </Typography>
          <form noValidate onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="name-market">ID do Mercador*</InputLabel>
                  <OutlinedInput
                    fullWidth
                    id="id_marketman"
                    name="id_marketman"
                    value={user.id_user}
                    placeholder="ID do mercador"
                    {...register("id_marketman", { required: true })}
                    aria-invalid={errors.name ? "true" : "false"}
                  />

                  <FormHelperText error id="helper-text-name-market">
                    {errors.name?.type === "required" && (
                      <p role="alert">ID é requerido</p>
                    )}
                  </FormHelperText>
                </Stack>
              </Grid>
              <Grid item xs={12} md={6}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="id-market">ID do Mercado*</InputLabel>
                  <Select
                    fullWidth
                    id="id_market"
                    type="number"
                    name="id_market"
                    {...register("id_market", { required: true })}
                    inputProps={{}}
                    onChange={handleChange}
                    aria-invalid={errors.id_market ? "true" : "false"}
                  >
                    {markets.map(({ id_market, name }) => {
                      // eslint-disable-next-line react/jsx-key
                      return <MenuItem value={id_market}>{name}</MenuItem>;
                    })}
                  </Select>
                  <FormHelperText error id="helper-text-id-market">
                    {errors.id_market?.type === "required" && (
                      <p role="alert">ID é requerido</p>
                    )}
                  </FormHelperText>
                </Stack>
              </Grid>
              <Grid item xs={12} md={6}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="id-sector">ID do Sector*</InputLabel>
                  <Select
                    fullWidth
                    id="id_sector"
                    type="number"
                    name="id_sector"
                    {...register("id_sector", { required: true })}
                    inputProps={{}}
                    aria-invalid={errors.id_sector ? "true" : "false"}
                  >
                    {sectors.map(({ id_sector, sectorname }) => {
                      return (
                        // eslint-disable-next-line react/jsx-key
                        <MenuItem value={id_sector}>{sectorname}</MenuItem>
                      );
                    })}
                  </Select>
                  <FormHelperText error id="helper-text-id-sector">
                    {errors.id_sector?.type === "required" && (
                      <p role="alert">ID é requerido</p>
                    )}
                  </FormHelperText>
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <AnimateButton>
                  <Button
                    disableElevation
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                    color="primary"
                  >
                    Registrar
                  </Button>
                </AnimateButton>
              </Grid>
            </Grid>
          </form>
        </div>
      </Modal>
    </>
  );
}

export default Formulary;
