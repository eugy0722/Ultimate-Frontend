import { useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";

// material-ui
import {
  Button,
  Divider,
  FormHelperText,
  Grid,
  Link,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography,
  Select,
  MenuItem,
} from "@mui/material";

// third party
import { useForm } from "react-hook-form";
import axios from "axios";

// project import
import FirebaseSocial from "./FirebaseSocial";
import AnimateButton from "../../../components/@extended/AnimateButton";

// assets
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";

// ============================|| FIREBASE - REGISTER ||============================ //

const AuthRegister = () => {
  // Estados
  const [showPassword, setShowPassword] = useState(false);

  // Hooks
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const onSubmit = (data) => {
    axios
      .post("http://localhost:8080/user/register", data)
      .then((res) => {
        if (res.status === 200) navigate("/login");
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Stack spacing={1}>
              <InputLabel htmlFor="first_name-signup">
                Primeiro Nome*
              </InputLabel>
              <OutlinedInput
                id="first_name-login"
                aria-invalid={errors.first_name ? "true" : "false"}
                type="first_name"
                name="first_name"
                placeholder="John"
                {...register("first_name", { required: true, maxLength: 100 })}
                fullWidth
              />
              <FormHelperText error id="helper-text-first_name-signup">
                {errors.first_name?.type === "required" && (
                  <p role="alert">Um Primeiro nome é requerido</p>
                )}
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
              <InputLabel htmlFor="last_name-signup">Último Nome*</InputLabel>
              <OutlinedInput
                fullWidth
                id="last_name-signup"
                type="last_name"
                name="last_name"
                aria-invalid={errors.last_name ? "true" : "false"}
                placeholder="Doe"
                {...register("last_name", { required: true, maxLength: 100 })}
                inputProps={{}}
              />
              <FormHelperText error id="helper-text-last_name-signup">
                {errors.last_name?.type === "required" && (
                  <p role="alert">Um Ultimo nome é requerido</p>
                )}
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
                Número de Telefone*
              </InputLabel>
              <OutlinedInput
                fullWidth
                id="number_phone-signup"
                name="number_phone"
                aria-invalid={errors.number_phone ? "true" : "false"}
                placeholder="+244 9xx xxx xxx"
                {...register("number_phone", { required: true, maxLength: 9 })}
                inputProps={{}}
              />
              <FormHelperText error id="helper-text-number_phone-signup">
                {errors.number_phone?.type === "required" && (
                  <p role="alert">Um número de telefone é requerido</p>
                )}
                {errors.number_phone?.type === "minLength" && (
                  <p role="alert">Um número de telefone no máximo 9 números</p>
                )}
              </FormHelperText>
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <Stack spacing={1}>
              <InputLabel htmlFor="email-signup">Endereço de Email*</InputLabel>
              <OutlinedInput
                fullWidth
                id="email-login"
                type="email"
                name="email"
                aria-invalid={errors.email ? "true" : "false"}
                placeholder="demo@company.com"
                {...register("email", {
                  required: "O endereço de email não e válido",
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
                Nome de Utilizador*
              </InputLabel>
              <OutlinedInput
                fullWidth
                id="username-login"
                type="username"
                name="username"
                aria-invalid={errors.username ? "true" : "false"}
                placeholder="Insira o nome de Utilizador"
                {...register("username", { required: true, maxLength: 50 })}
                inputProps={{}}
              />
              <FormHelperText error id="helper-text-username-signup">
                {errors.username?.type === "required" && (
                  <p role="alert">Um Nome de Utilizador é requerido</p>
                )}
                {errors.username?.type === "minLength" && (
                  <p role="alert">Um Nome de Utilizador no máximo 50 números</p>
                )}
              </FormHelperText>
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <Stack spacing={1}>
              <InputLabel htmlFor="perfil-signup">Perfil*</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="perfil-signup"
                name="perfil"
                label="Perfil"
                {...register("perfil", { required: true })}
              >
                <MenuItem value={"Consumidor"}>Consumidor</MenuItem>
                <MenuItem value={"Comerciante"}>Comerciante</MenuItem>
                <MenuItem value={"Prestador de Servicos"}>
                  Prestador de Servicos
                </MenuItem>
              </Select>
              <FormHelperText error id="helper-text-perfil-signup">
                {errors.perfil?.type === "required" && (
                  <p role="alert">Escolha um tipo de Utilizador</p>
                )}
              </FormHelperText>
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <Stack spacing={1}>
              <InputLabel htmlFor="password-signup">Palavra Passe*</InputLabel>
              <OutlinedInput
                fullWidth
                id="password-signup"
                type={showPassword ? "text" : "password"}
                name="password"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                      size="large"
                    >
                      {showPassword ? (
                        <EyeOutlined />
                      ) : (
                        <EyeInvisibleOutlined />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
                aria-invalid={errors.password ? "true" : "false"}
                placeholder="******"
                {...register("password", {
                  required: "Uma palavra passe é requerida",
                })}
                inputProps={{}}
              />
              <FormHelperText error id="helper-text-password-signup">
                {errors.password?.type === "required" && (
                  <p role="alert">{errors.password.message}</p>
                )}
              </FormHelperText>
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2">
              Por se cadastrar, você está aceitando os nossos &nbsp;
              <Link variant="subtitle2" component={RouterLink} to="#">
                Termos de Serviços
              </Link>
              &nbsp; e &nbsp;
              <Link variant="subtitle2" component={RouterLink} to="#">
                Política de Privacidade
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <FormHelperText error></FormHelperText>
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
                Criar a sua conta
              </Button>
            </AnimateButton>
          </Grid>
          <Grid item xs={12}>
            <Divider>
              <Typography variant="caption">Entra com</Typography>
            </Divider>
          </Grid>
          <Grid item xs={12}>
            <FirebaseSocial />
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default AuthRegister;
