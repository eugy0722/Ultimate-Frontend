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
  Typography,
} from "@mui/material";

// third party
import axios from "axios";
import { useForm } from "react-hook-form";

// assets

// project import
import AnimateButton from "../../components/@extended/AnimateButton";

// ==============================|| COMPONENTS - TYPOGRAPHY ||============================== //

function Formulary() {
  // Estados
  const [id, setID] = useState("");
  const [dataStore, setDataStore] = useState({
    first_name: "",
    last_name: "",
    number_phone: "",
    email: "",
    username: "",
    perfil: "",
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
      first_name: localStorage.getItem("First Name"),
      number_phone: localStorage.getItem("Number Phone"),
      last_name: localStorage.getItem("Last Name"),
      email: localStorage.getItem("Email"),
      username: localStorage.getItem("Username"),
      perfil: localStorage.getItem("Perfil"),
    });
  }, []);

  const checkUpdated = ({
    first_name,
    last_name,
    username,
    number_phone,
    email,
    perfil,
  }) => {
    let inputs = {};

    if (first_name && first_name !== dataStore.first_name)
      inputs["first_name"] = first_name;
    if (last_name && last_name !== dataStore.last_name)
      inputs["last_name"] = last_name;
    if (username && username !== dataStore.username)
      inputs["username"] = username;
    if (email && email !== dataStore.email) inputs["email"] = email;
    if (number_phone && number_phone !== dataStore.number_phone)
      inputs["number_phone"] = number_phone;
    if (perfil && perfil !== dataStore.perfil) inputs["perfil"] = perfil;

    return inputs;
  };

  const onSubmit = (data) => {
    const inputs = checkUpdated(data);
    if (
      !(
        inputs.first_name ||
        inputs.last_name ||
        inputs.username ||
        inputs.email ||
        inputs.number_phone ||
        inputs.perfil
      )
    ) {
      alert("Por favor, insira um campo para actualizar");
    } else {
      axios
        .post(`http://localhost:8080/user/update/${id}`, inputs)
        .then((response) => alert(JSON.stringify(response.data, null, 2)))
        .catch((error) => console.log(error));
    }
  };

  return (
    <>
      <Grid>
        <Typography variant="h5" marginBottom={2}>
          Actualize o Campo dejesado
        </Typography>
        <form action="#" noValidate onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Stack spacing={1}>
                <InputLabel htmlFor="first_name-signup">
                  Um Novo Primeiro Nome
                </InputLabel>
                <OutlinedInput
                  id="first_name-login"
                  aria-invalid={errors.first_name ? "true" : "false"}
                  type="first_name"
                  name="first_name"
                  placeholder="John"
                  {...register("first_name", { maxLength: 100 })}
                  fullWidth
                />
                <FormHelperText error id="helper-text-first_name-signup">
                  {errors.first_name?.type === "maxLength" && (
                    <p role="alert">
                      Um Primeiro nome deve ter no máximo 100 letras
                    </p>
                  )}
                </FormHelperText>
              </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
              <Stack spacing={1}>
                <InputLabel htmlFor="last_name-signup">
                  Um Novo Último Nome
                </InputLabel>
                <OutlinedInput
                  fullWidth
                  id="last_name-signup"
                  type="last_name"
                  name="last_name"
                  aria-invalid={errors.last_name ? "true" : "false"}
                  placeholder="Doe"
                  {...register("last_name", { maxLength: 100 })}
                  inputProps={{}}
                />
                <FormHelperText error id="helper-text-last_name-signup">
                  {errors.last_name?.type === "maxLength" && (
                    <p role="alert">
                      Um Ultimo nome deve ter no máximo 100 letras
                    </p>
                  )}
                </FormHelperText>
              </Stack>
            </Grid>
            <Grid item xs={12}>
              <Stack spacing={1}>
                <InputLabel htmlFor="number_phone-signup">
                  Um Novo Número de Telefone
                </InputLabel>
                <OutlinedInput
                  fullWidth
                  id="number_phone-signup"
                  name="number_phone"
                  aria-invalid={errors.number_phone ? "true" : "false"}
                  placeholder="+244 9xx xxx xxx"
                  {...register("number_phone", { maxLength: 9 })}
                  inputProps={{}}
                />
                <FormHelperText error id="helper-text-number_phone-signup">
                  {errors.number_phone?.type === "minLength" && (
                    <p role="alert">
                      Um número de telefone no máximo 9 números
                    </p>
                  )}
                </FormHelperText>
              </Stack>
            </Grid>
            <Grid item xs={12}>
              <Stack spacing={1}>
                <InputLabel htmlFor="email-signup">
                  Um Novo Endereço de Email
                </InputLabel>
                <OutlinedInput
                  fullWidth
                  id="email-login"
                  type="email"
                  name="email"
                  aria-invalid={errors.email ? "true" : "false"}
                  placeholder="demo@company.com"
                  {...register("email", {
                    email: "O endereço de email não e válido",
                  })}
                  inputProps={{}}
                />
                <FormHelperText error id="helper-text-email-signup">
                  {errors.email && <p role="alert"> {errors.email.message} </p>}
                </FormHelperText>
              </Stack>
            </Grid>
            <Grid item xs={12}>
              <Stack spacing={1}>
                <InputLabel htmlFor="username-signup">
                  Um Novo Nome de Utilizador
                </InputLabel>
                <OutlinedInput
                  fullWidth
                  id="username-login"
                  type="username"
                  name="username"
                  aria-invalid={errors.username ? "true" : "false"}
                  placeholder="Type your username"
                  {...register("username", { maxLength: 50 })}
                  inputProps={{}}
                />
                <FormHelperText error id="helper-text-username-signup">
                  {errors.username?.type === "minLength" && (
                    <p role="alert">
                      Um Nome de Utilizador no máximo 50 números
                    </p>
                  )}
                </FormHelperText>
              </Stack>
            </Grid>
            <Grid item xs={12}>
              <Stack spacing={1}>
                <InputLabel htmlFor="perfil-signup">
                  Defina Um Novo Perfil
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="perfil-signup"
                  name="perfil"
                  label="Perfil"
                  {...register("perfil", {})}
                >
                  <MenuItem value={"Consumidor"}>Consumidor</MenuItem>
                  <MenuItem value={"Comerciante"}>Comerciante</MenuItem>
                  <MenuItem value={"Prestador de Servicos"}>
                    Prestador de Servicos
                  </MenuItem>
                </Select>
                <FormHelperText
                  error
                  id="helper-text-perfil-signup"
                ></FormHelperText>
              </Stack>
            </Grid>
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <AnimateButton>
              <Button
                disableElevation
                fullWidth
                size="large"
                type="submit"
                variant="contained"
                color="primary"
              >
                Actualizar Conta
              </Button>
            </AnimateButton>
          </Grid>
        </form>
      </Grid>
    </>
  );
}

export default Formulary;
