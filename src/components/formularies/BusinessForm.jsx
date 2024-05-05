// material-ui
import {
  Button,
  FormHelperText,
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
import AnimateButton from "../../components/@extended/AnimateButton";

function Formulary() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    axios
      .post("http://localhost:8080/business/register", data)
      .then((response) => {
        alert(JSON.stringify(response.data, null, 2));
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Stack spacing={1}>
              <InputLabel htmlFor="name-business">Nome do Negócio*</InputLabel>
              <OutlinedInput
                id="name-business-register"
                type="name"
                name="name"
                aria-invalid={errors.name ? "true" : "false"}
                placeholder="Nome do negócio"
                {...register("name", {
                  required: "E requerido um nome",
                  maxLength: 40,
                })}
                fullWidth
              />
              <FormHelperText error id="helper-text-name-business">
                {errors.name?.type === "required" && (
                  <p role="alert">{errors.name.message}</p>
                )}
                {errors.name?.type === "maxLength" && (
                  <p role="alert">O nome deve ter no maximo 40 letras</p>
                )}
              </FormHelperText>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack spacing={1}>
              <InputLabel htmlFor="type-business">Tipo de Negócio*</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="type-signup"
                name="type"
                label="Type"
                {...register("type", { required: true })}
              >
                <MenuItem value={"Producto"}>Producto</MenuItem>
                <MenuItem value={"Servicos"}>Serviço</MenuItem>
              </Select>
              <FormHelperText error id="helper-text-type-signup">
                {errors.type?.type === "required" && (
                  <p role="alert">Escolha um tipo de Negocio</p>
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
                Registar Negócio
              </Button>
            </AnimateButton>
          </Grid>
        </Grid>
      </form>
    </>
  );
}

export default Formulary;
