import React, {useState, useEffect} from 'react'
import { Box, useTheme, Button, IconButton, Typography} from '@mui/material';
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
import { tokens } from "../../Theme";
import { auth, db } from "../../Firebase";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { collection, addDoc, query, getDocs, where} from "firebase/firestore";

function SignUp() {
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
  const [name, setName] = useState("");
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate("");
  const register = () => {
    if (!name) alert("Please enter name");
    registerWithEmailAndPass(name, email, password);
    if (user) navigate.replace("/dashboard");
  };

  useEffect(() => {
    if (loading) {
      return;
    }
    if (user) navigate.replace("/");
  })

  /*Google Auth */
  const googleProvider = new GoogleAuthProvider();
  const signInWithGoogle = async() => {
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

  const registerWithEmailAndPass = async(e, name, email, password) =>{
    if (e && e.preventDefault) {
        e.preventDefault();
    }
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, 'users'), {
            user: user.uid,
            name,
            authProvider: "local",
            email,
        });
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
  };
  
  return (
    <div className="app">
      <main className="content">
        <LoginTopbar />
          <Box textAlign="center" width="350px" alignItems="center" justifyContent="center" m="0 auto" mt="30px" height="425px" padding="20px"
           sx={{backgroundColor: colors.primary[400], borderRadius: "16px",
           border:4 , borderColor:colors.greenAccent[200]}}>
              <Typography variant='h2' sx={{color: colors.greenAccent[200]}}>Welcome to COURS </Typography>
              <Box>
                <p>
                <FormControl sx={{ width: '100%' }} variant="standard">
                  <InputLabel >Full Name</InputLabel>
                  <Input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </FormControl>
                </p> 

                <p>
                <FormControl sx={{ width: '100%' }} variant="standard">
                  <InputLabel >Email</InputLabel>
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormControl>
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

                <p>
                  <Button fullWidth variant='contained' sx={{color: "white", marginTop:"5px"}} type='submit' startIcon={<LoginIcon />}
                  onClick={register}>
                    Register
                  </Button>
                </p>

                <p>
                  <Button fullWidth variant='contained' sx={{color: "white", marginTop:"5px"}} type='submit' startIcon={<GoogleIcon />}
                  onClick={signInWithGoogle}>
                    Register with google
                  </Button>
                </p>


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

export default SignUp;