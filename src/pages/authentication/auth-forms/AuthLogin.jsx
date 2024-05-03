import React from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";

// material-ui
import {
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  FormHelperText,
  Grid,
  Link,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography,
} from "@mui/material";

// third party
import { useForm } from "react-hook-form";

// project import
import FirebaseSocial from "./FirebaseSocial";
import AnimateButton from "../../../components/@extended/AnimateButton";
import { loginUser } from "../../../zustand/loginUser";

// assets
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";
import useUserStore from "../../../zustand/store";

// ============================|| FIREBASE - LOGIN ||============================ //

const AuthLogin = () => {
  // Estados
  const [checked, setChecked] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);

  // Hook
  const { isAuthenticated } = useUserStore();
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

  const onSubmit = async (data) => {
    await loginUser(data);
    if (isAuthenticated) navigate("/home");
  };

  return (
    <>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Stack spacing={1}>
              <InputLabel htmlFor="email-login">Endereço de Email</InputLabel>
              <OutlinedInput
                id="email-login"
                type="email"
                name="email"
                aria-invalid={errors.email ? "true" : "false"}
                placeholder="Entrar com endereço de email"
                {...register("email", {
                  required: "Introduza um email válido",
                })}
                fullWidth
              />
              <FormHelperText
                error
                id="standard-weight-helper-text-email-login"
              >
                {errors.email?.type === "required" && (
                  <p role="alert">{errors.email.message}</p>
                )}
              </FormHelperText>
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <Stack spacing={1}>
              <InputLabel htmlFor="password-login">Palavra Passe</InputLabel>
              <OutlinedInput
                fullWidth
                id="-password-login"
                type={showPassword ? "text" : "password"}
                name="password"
                aria-invalid={errors.password ? "true" : "false"}
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
                placeholder="Entre com a sua Palavra Passe"
                {...register("password", {
                  required: "É necessário uma Palavra Passe",
                })}
              />
              <FormHelperText
                error
                id="standard-weight-helper-text-password-login"
              >
                {errors.password?.type === "required" && (
                  <p role="alert">{errors.password.message}</p>
                )}
              </FormHelperText>
            </Stack>
          </Grid>

          <Grid item xs={12} sx={{ mt: -1 }}>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              spacing={2}
            >
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checked}
                    onChange={(event) => setChecked(event.target.checked)}
                    name="checked"
                    color="primary"
                    size="small"
                  />
                }
                label={<Typography variant="h6">Lembre de min</Typography>}
              />
              <Link
                variant="h6"
                component={RouterLink}
                to=""
                color="text.primary"
              >
                Esqueceu-se da Palavra Passe?
              </Link>
            </Stack>
          </Grid>
          {errors.submit && (
            <Grid item xs={12}>
              <FormHelperText error>{errors.submit}</FormHelperText>
            </Grid>
          )}
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
                Entrar
              </Button>
            </AnimateButton>
          </Grid>
          <Grid item xs={12}>
            <Divider>
              <Typography variant="caption"> Entrar com </Typography>
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

export default AuthLogin;
