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
import { auth } from "../../Firebase";
import { Link, useNavigate } from "react-router-dom";
import { sendPasswordResetEmail } from "firebase/auth";

function ResetPass() {
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
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate("");

  /*Pass Reset */
  const sendPasswordReset = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
      alert("Password reset link sent!");
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  useEffect(() => {
    if (loading) {
      return;
    }
    if (user) navigate("/");
  })

  return (
    <div className="app">
      <main className="content">
        <LoginTopbar />
          <Box textAlign="center" width="350px" alignItems="center" justifyContent="center" m="0 auto" mt="30px" height="250px" padding="20px"
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
                  <Button fullWidth variant='contained' sx={{color: "white", marginTop:"5px"}} type='submit'
                  onClick={() => sendPasswordReset(email)}>
                    Reset Password
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
                <p>
                  <Typography variant='h6' sx={{color: colors.greenAccent[200]}}>
                    Already have an account?
                    <Link  to='/login' style={{color:colors.blueAccent[300]}}>
                     Login 
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

export default ResetPass;