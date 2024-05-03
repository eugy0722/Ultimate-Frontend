// React
import { useState } from "react";
// material-ui
import {
  Button,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
} from "@mui/material";

// third party

// assets
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";

// project import
import AnimateButton from "components/@extended/AnimateButton";

// import MainCard from 'components/MainCard';

// ==============================|| COMPONENTS - TYPOGRAPHY ||============================== //

function Formulary() {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = async () => {};

  return (
    <>
      <Grid>
        <form action="#" noValidate onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Stack spacing={1}>
                <InputLabel htmlFor="first_name-signup">First Name*</InputLabel>
                <OutlinedInput
                  id="first_name-login"
                  type="first_name"
                  name="first_name"
                  placeholder="John"
                  fullWidth
                />
                <FormHelperText
                  error
                  id="helper-text-first_name-signup"
                ></FormHelperText>
              </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
              <Stack spacing={1}>
                <InputLabel htmlFor="last_name-signup">Last Name*</InputLabel>
                <OutlinedInput
                  fullWidth
                  id="last_name-signup"
                  type="last_name"
                  name="last_name"
                  placeholder="Doe"
                  inputProps={{}}
                />
                <FormHelperText
                  error
                  id="helper-text-last_name-signup"
                ></FormHelperText>
              </Stack>
            </Grid>
            <Grid item xs={12}>
              <Stack spacing={1}>
                <InputLabel htmlFor="number_phone-signup">
                  Number Phone*
                </InputLabel>
                <OutlinedInput
                  fullWidth
                  id="number_phone-signup"
                  name="number_phone"
                  placeholder="+244 9xx xxx xxx"
                  inputProps={{}}
                />
                <FormHelperText
                  error
                  id="helper-text-number_phone-signup"
                ></FormHelperText>
              </Stack>
            </Grid>
            <Grid item xs={12}>
              <Stack spacing={1}>
                <InputLabel htmlFor="email-signup">Email Address*</InputLabel>
                <OutlinedInput
                  fullWidth
                  id="email-login"
                  type="email"
                  name="email"
                  placeholder="demo@company.com"
                  inputProps={{}}
                />
                <FormHelperText
                  error
                  id="helper-text-email-signup"
                ></FormHelperText>
              </Stack>
            </Grid>
            <Grid item xs={12}>
              <Stack spacing={1}>
                <InputLabel htmlFor="username-signup">Username*</InputLabel>
                <OutlinedInput
                  fullWidth
                  id="username-login"
                  type="username"
                  name="username"
                  placeholder="Type your username"
                  inputProps={{}}
                />
                <FormHelperText
                  error
                  id="helper-text-username-signup"
                ></FormHelperText>
              </Stack>
            </Grid>
            <Grid item xs={12}>
              <Stack spacing={1}>
                <InputLabel htmlFor="perfil-signup">Perfil*</InputLabel>
                <OutlinedInput
                  fullWidth
                  id="perfil-login"
                  type="perfil"
                  name="perfil"
                  placeholder="Choose your perfil"
                  inputProps={{}}
                />
                <FormHelperText
                  error
                  id="helper-text-perfil-signup"
                ></FormHelperText>
              </Stack>
            </Grid>
            <Grid item xs={12}>
              <Stack spacing={1}>
                <InputLabel htmlFor="password-signup">Password</InputLabel>
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
                  placeholder="******"
                  inputProps={{}}
                />
                <FormHelperText
                  error
                  id="helper-text-password-signup"
                ></FormHelperText>
              </Stack>
            </Grid>
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
                Create Account
              </Button>
            </AnimateButton>
          </Grid>
        </form>
      </Grid>
    </>
  );
}

export default Formulary;
