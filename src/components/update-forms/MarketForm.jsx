// React
import { useState, useEffect } from "react";

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
  // Estados
  const [id, setID] = useState("");
  const [dataStore, setDataStore] = useState({
    name: "",
    geo: "",
  });

  // use Hooks
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  useEffect(() => {
    setID(localStorage.getItem("ID"));
    setDataStore({
      name: localStorage.getItem("Name"),
      geo: localStorage.getItem("Geo"),
    });
  }, []);

  const checkUpdated = ({ name, geo }) => {
    let inputs = {};

    if (name && name !== dataStore.name) inputs["name"] = name;
    if (geo && geo !== dataStore.geo) inputs["geo"] = geo;

    return inputs;
  };

  const onSubmit = (data) => {
    const inputs = checkUpdated(data);

    if (!(inputs.name || inputs.geo))
      alert("Por favor, insira um campo para actualizar");
    else
      axios
        .post(`http://localhost:8080/market/update/${id}`, data)
        .then((response) => alert(JSON.stringify(response.data, null, 2)))
        .catch((error) => console.log(error));
  };

  return (
    <>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Stack spacing={1}>
              <InputLabel htmlFor="name-market">
                Novo Nome Do Mercado
              </InputLabel>
              <OutlinedInput
                fullWidth
                id="name-market-register"
                type="name"
                name="name"
                placeholder="Kongoleses"
                {...register("name", { minLength: 5, maxLength: 30 })}
                aria-invalid={errors.name ? "true" : "false"}
              />

              <FormHelperText error id="helper-text-name-market">
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
              <InputLabel htmlFor="geo-market">
                Nova Localização do mercado
              </InputLabel>
              <OutlinedInput
                fullWidth
                id="geo-market-register"
                type="geo"
                name="geo"
                placeholder="Introduze a market's geolocalization"
                {...register("geo", {})}
                inputProps={{}}
                aria-invalid={errors.geo ? "true" : "false"}
              />
              <FormHelperText
                error
                id="helper-text-geo-market"
              ></FormHelperText>
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
                Actualizar Mercado
              </Button>
            </AnimateButton>
          </Grid>
        </Grid>
      </form>
    </>
  );
}

export default Formulary;
