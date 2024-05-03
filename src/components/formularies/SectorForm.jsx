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
      .post("http://localhost:8080/sector/register", data)
      .then((response) => alert(JSON.stringify(response.data, null, 2)))
      .catch((error) => console.log(error));
  };

  return (
    <>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Stack spacing={1}>
              <InputLabel htmlFor="name-sector">Nome Do Sector*</InputLabel>
              <OutlinedInput
                id="name-sector-register"
                type="name"
                name="name"
                placeholder="Insira o nome do sector"
                fullWidth
                {...register("name", {
                  required: true,
                  minLength: 4,
                  maxLength: 60,
                })}
                aria-invalid={errors.name ? "true" : "false"}
              />
              <FormHelperText error id="helper-text-name-sector">
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
                Registar Sector
              </Button>
            </AnimateButton>
          </Grid>
        </Grid>
      </form>
    </>
  );
}

export default Formulary;
