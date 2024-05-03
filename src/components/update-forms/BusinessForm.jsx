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
  Select,
  MenuItem,
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
    type: "",
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
      type: localStorage.getItem("Type"),
    });
  }, []);

  const checkUpdated = ({ name, type }) => {
    let inputs = {};

    if (name && name !== dataStore.name) inputs["name"] = name;
    if (type && type !== dataStore.type) inputs["type"] = type;

    return inputs;
  };

  const onSubmit = (data) => {
    const inputs = checkUpdated(data);

    if (!(inputs.name || inputs.type))
      alert("Por favor, insira um campo para actualizar");
    else
      axios
        .post(`http://localhost:8080/business/update/${id}`, data)
        .then((response) => alert(JSON.stringify(response.data, null, 2)))
        .catch((error) => console.log(error));
  };

  return (
    <>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Stack spacing={1}>
              <InputLabel htmlFor="name-business">
                Nome do Novo Negócio*
              </InputLabel>
              <OutlinedInput
                id="name-business-register"
                type="name"
                name="name"
                aria-invalid={errors.name ? "true" : "false"}
                placeholder="Name of your business"
                {...register("name", { maxLength: 40 })}
                fullWidth
              />
              <FormHelperText error id="helper-text-name-business">
                {errors.name?.type === "maxLength" && (
                  <p role="alert">O nome deve ter no maximo 40 letras</p>
                )}
              </FormHelperText>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack spacing={1}>
              <InputLabel htmlFor="type-business">Tipo de Negocio*</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="type-signup"
                name="type"
                label="Type"
                {...register("type", {})}
              >
                <MenuItem value={"Producto"}>Producto</MenuItem>
                <MenuItem value={"Servicos"}>Serviços</MenuItem>
              </Select>
              <FormHelperText
                error
                id="helper-text-type-signup"
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
                Actualizar Negócio
              </Button>
            </AnimateButton>
          </Grid>
        </Grid>
      </form>
    </>
  );
}

export default Formulary;
