import { Box, useTheme, Button, TextField, IconButton, Typography, FormControlLabel} from '@mui/material';
import React, {useState, useEffect} from 'react'
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
import { auth, db } from "../../Firebase";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { query, getDocs, collection, where, addDoc } from "firebase/firestore";

function Login() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  }
  
  //Input Error
    const [checked, setChecked] = useState(false);

    const handleChange = (event) => {
      setChecked(event.target.checked);
    };

  //Set Value/login
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user] = useAuthState(auth);
  const navigate = useNavigate("");

  /*Google Auth */
  const googleProvider = new GoogleAuthProvider();
  const signInWithGoogle = async(e) => {
    e.preventDefault()
      try {
          const res = await signInWithPopup(auth, googleProvider);
          const user = res.user;
          const q = query(collection(db, 'users'), where("uid", "==", user.uid));
          const docs = await getDocs(q);
          if (docs.docs.length === 0) {
              await addDoc(collection(db, 'users'), {
                  uid: user.uid,
                  name: user.displayName,
                  authProvider: "google",
                  email: user.email,
              });
          }
      } catch (err) {
          console.error(err);
          alert(err.message);
      }
  };

  /*Login with Email & Password */
  const loginWithEmailAndPass = async( email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};
  

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, );

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
                onChange={(e) => setEmail(e.target.value)}
                value={email}
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
                  onClick={() => loginWithEmailAndPass(email, password)}>
                    Login
                  </Button>
                </p>

                <p>
                  <Button fullWidth variant='contained' sx={{color: "white", marginTop:"5px"}} type='submit' startIcon={<GoogleIcon />}
                  onClick={signInWithGoogle}>
                    Login with Google
                  </Button>
                </p>

                {/* 
                <p>
                  <Typography variant='h6' sx={{color: colors.greenAccent[200]}}>
                    Don't have an account?
                    <Link  to='/signup' style={{color:colors.blueAccent[300]}}>
                     Sign up 
                    </Link>

                     here.
                  </Typography>
                </p>
                */}
              </Box>
        </Box>
      </main>
    </div>
  )
};

export default Login;