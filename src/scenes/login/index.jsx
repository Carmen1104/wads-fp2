import React, {useState, useEffect} from "react";
import { Box, useTheme, Button, TextField, IconButton, Typography, FormControlLabel} from '@mui/material';
import { useAuthState } from "react-firebase-hooks/auth";
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/FilledInput';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import LoginIcon from '@mui/icons-material/Login';
import GoogleIcon from '@mui/icons-material/Google';
import LoginTopbar from "../global/LoginTopbar";
import Checkbox from '@mui/material/Checkbox';
import { tokens } from "../../Theme";
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "../../Firebase";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  //darkmode lightmode
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  //see/hide password
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  }
  
  //remember me checkbox
  const [checked, setChecked] = useState(false);

  //login
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate("");

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }

    if (user) {
      console.log(user.displayName);
      navigate("/dashboard");
    }
    if (error) alert(error);
  }, [error, loading, navigate, user]);

  return (
    <div className="app">
      <main className="content">
        <LoginTopbar />
          <Box textAlign="center" width="350px" alignItems="center" justifyContent="center" m="0 auto" mt="30px" height="400px" padding="20px"
           sx={{backgroundColor: colors.primary[400], borderRadius: "16px",
           border:4 , borderColor:colors.greenAccent[200]}}>
              <Typography variant='h2' sx={{color: colors.greenAccent[200]}}>Welcome to COURS </Typography>
              <Box>
                <p>
                <TextField 
                id='standard-basic' 
                label="Email" 
                variant='standard' 
                fullWidth 
                size='small'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
                </p> 

                <p>
                <FormControl sx={{ width: '100%' }} variant="standard">
                  <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                  <Input
                    id="standard-adornment-password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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
                  <Link to='/resetpass' style={{color:colors.blueAccent[300]}}>
                  Forgot Password?
                  </Link>
                </Box>

                <p>
                  <Button fullWidth variant='contained' sx={{color: "white", marginTop:"5px"}} type='submit' startIcon={<LoginIcon />}
                  onClick={() => logInWithEmailAndPassword(email, password)}>
                    Login
                  </Button>
                </p>

                <p>
                  <Button fullWidth variant='contained' sx={{color: "white", marginTop:"5px"}} type='submit' startIcon={<GoogleIcon />}
                  onClick={signInWithGoogle}>
                    Login with Google
                  </Button>
                </p>
 
                <p>
                  <Typography variant='h6' sx={{color: colors.greenAccent[200]}}>
                    Don't have an account? 
                    <Link  to='/signup' style={{color:colors.blueAccent[300]}}>
                      Sign up 
                    </Link>

                     here.
                  </Typography>
                </p>
              </Box>
        </Box>
      </main>
    </div>
  )
};

export default Login;