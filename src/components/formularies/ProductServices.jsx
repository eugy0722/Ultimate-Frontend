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

function Formulary({ isModalOpen, setIsModalOpen, id_sector }) {
  const [businesses, setBusinesses] = React.useState([]);
  const [idSector, setIdSector] = React.useState(0);
  const { user } = useUserStore();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  React.useEffect(() => {
    setIdSector(id_sector);
    if (idSector) {
      axios
        .get(
          `http://localhost:8080${backendRoutes.FindBusinessesAboutSector}${id_sector}`
        )
        .then((res) => {
          setBusinesses(res.data);
        })
        .catch((error) => {
          setBusinesses([]);
          console.log(error);
        });
    }
  }, [idSector, id_sector]);

  const onSubmit = (data) => {
    if (data.id_business) {
      axios
        .post(
          `http://localhost:8080${backendRoutes.RegisterMarketmanBusiness}`,
          data
        )
        .then(() => {
          alert(JSON.stringify({ message: "Savo com Sucesso" }, null, 2));
        })
        .catch((error) => {
          if (error.message === "Request failed with status code 401") {
            alert(
              JSON.stringify(
                { "message de erro": "Sector não encontrado" },
                null,
                2
              )
            );
          }
          if (error.message === "Request failed with status code 409") {
            alert(
              JSON.stringify(
                { "message de erro": "Conflicto de Dados" },
                null,
                2
              )
            );
          }
        });
    } else
      alert(
        JSON.stringify({ mensagem: "Campo producto e requerido!" }, null, 2)
      );
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
            Registre seus Productos ou Serviços
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
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="id-business">
                    Nome do Producto*
                  </InputLabel>
                  <Select
                    fullWidth
                    id="id_business"
                    type="number"
                    name="id_business"
                    {...register("id_business", { required: true })}
                    inputProps={{}}
                    aria-invalid={errors.id_business ? "true" : "false"}
                  >
                    {businesses.map(({ id_business, name }) => {
                      // eslint-disable-next-line react/jsx-key
                      return <MenuItem value={id_business}>{name}</MenuItem>;
                    })}
                  </Select>
                  <FormHelperText error id="helper-text-id-business">
                    {errors.id_business?.type === "required" && (
                      <p role="alert">ID é requerido</p>
                    )}
                  </FormHelperText>
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="description-business">
                    Descreva o seu Producto ou Servico
                  </InputLabel>
                  <OutlinedInput
                    fullWidth
                    type="text"
                    id="description"
                    name="description"
                    placeholder="Descrição do Producto ou Serviço"
                    {...register("description")}
                    aria-invalid={errors.description ? "true" : "false"}
                  />
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="description-business">
                    Preço do seu Producto ou Servico
                  </InputLabel>
                  <OutlinedInput
                    fullWidth
                    type="text"
                    id="price"
                    name="price"
                    placeholder="AOA 100.000,00"
                    {...register("price")}
                    aria-invalid={errors.price ? "true" : "false"}
                  />
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
