// material-ui
import {
  Button,
  FormHelperText,
  Grid,
  InputLabel,
  OutlinedInput,
  Stack,
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
      .post("http://localhost:8080/market/register", data)
      .then((response) => alert(JSON.stringify(response.data, null, 2)))
      .catch((error) => console.log(error));
  };

  return (
    <>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Stack spacing={1}>
              <InputLabel htmlFor="name-market">Nome Do Mercado*</InputLabel>
              <OutlinedInput
                fullWidth
                id="name-market-register"
                type="name"
                name="name"
                placeholder="ex: Kongoleses"
                {...register("name", {
                  required: true,
                  minLength: 5,
                  maxLength: 30,
                })}
                aria-invalid={errors.name ? "true" : "false"}
              />

              <FormHelperText error id="helper-text-name-market">
                {errors.name?.type === "required" && (
                  <p role="alert">Um nome é requerido</p>
                )}
                {errors.name?.type === "minLength" && (
                  <p role="alert">
                    Um nome deve ter no mínimo 4 letras e no máximo 40 letras
                  </p>
                )}
              </FormHelperText>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack spacing={1}>
              <InputLabel htmlFor="latitude-market">Localização</InputLabel>
              <OutlinedInput
                fullWidth
                id="latitude-market-register"
                type="latitude"
                name="latitude"
                placeholder="Introduza a latitude do mercado"
                {...register("latitude", { required: true })}
                inputProps={{}}
                aria-invalid={errors.latitude ? "true" : "false"}
              />
              <FormHelperText error id="helper-text-latitude-market">
                {errors.latitude?.type === "required" && (
                  <p role="alert">Um nome é requerido</p>
                )}
              </FormHelperText>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6} marginTop={"20px"}>
            <Stack spacing={1}>
              <InputLabel htmlFor="logitude-market"> </InputLabel>
              <OutlinedInput
                fullWidth
                id="logitude-market-register"
                type="logitude"
                name="logitude"
                placeholder="Introduza a logitude do mercado"
                {...register("logitude", { required: true })}
                inputProps={{}}
                aria-invalid={errors.logitude ? "true" : "false"}
              />
              <FormHelperText error id="helper-text-logitude-market">
                {errors.logitude?.type === "required" && (
                  <p role="alert">Um nome é requerido</p>
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
                Registar Mercado
              </Button>
            </AnimateButton>
          </Grid>
        </Grid>
      </form>
    </>
  );
}

export default Formulary;
