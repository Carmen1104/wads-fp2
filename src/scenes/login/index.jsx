import { Box, useTheme, Button, Paper, TextField, IconButton, Typography, FormControlLabel, Link,} from '@mui/material';
import React, {useState} from 'react'
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/FilledInput';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import LoginIcon from '@mui/icons-material/Login';
import LoginTopbar from "../global/LoginTopbar";
import Checkbox from '@mui/material/Checkbox';
import { tokens } from "../../Theme";

const Login = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  }
  
  //Validate username
  const handleUsername = () => {
    if(!usernameInput || usernameInput < 5 || usernameInput.length > 30){
      setUsernameError(true);
      return;
    }
    setUsernameError(false);
  };

  //Set Value
  const [usernameInput, setUsernameInput] = useState();
  const [passwordInput, setPasswordInput] = useState();

  //Input Error
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div className="app">
      <main className="content">
        <LoginTopbar />
          <Box textAlign="center" width="350px" alignItems="center" justifyContent="center" m="0 auto" mt="30px" height="375px" padding="20px"
           sx={{backgroundColor: colors.primary[400], borderRadius: "16px",
           border:4 , borderColor:colors.greenAccent[200]}}>
              <Typography variant='h2' sx={{color: colors.greenAccent[200]}}>Welcome to COURS </Typography>
              <Box>
                <p>
                <TextField 
                id='standard-basic' 
                error={usernameError}
                label="Username/Email" 
                variant='standard' 
                fullWidth 
                onBlur={handleUsername}
                size='small'
                value={usernameInput}
                onChange={(event) => setUsernameInput(event.target.value)}
                />
                </p> 

                <p>
                <FormControl sx={{ width: '100%' }} variant="standard">
                  <InputLabel error={passwordError} htmlFor="standard-adornment-password">Password</InputLabel>
                  <Input
                    id="standard-adornment-password"
                    error={passwordError}
                    type={showPassword ? 'text' : 'password'}
                    value={passwordInput}
                onChange={(event) => setPasswordInput(event.target.value)}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
                </p> 

                <Box display="flex" justifyContent="space-between" alignItems="center">
                  <FormControlLabel
                  label="Remember Me"
                  control={
                    <Checkbox
                      onChange={(event) => setChecked(event.target.value)}
                      inputProps={{ 'aria-label': 'controlled' }} 
                      sx={{color:colors.blueAccent[300], '&..Mui-checked': {color:colors.blueAccent[300]}}}
                    />}
                  />
                  <Link component="button" sx={{color:colors.blueAccent[300]}}>
                  Forgot Password?
                  </Link>
                </Box>

                <p>
                  <Button fullWidth variant='contained' sx={{color: "white", marginTop:"5px"}} type='submit' startIcon={<LoginIcon />}>
                    Login
                  </Button>
                </p>

              </Box>
        </Box>
      </main>
    </div>
  )
}

export default Login;