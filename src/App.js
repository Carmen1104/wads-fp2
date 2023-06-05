import { ColorModeContext, useMode } from "./Theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Dashboard  from "./scenes/dashboard";
import Classes  from "./scenes/classes";
import Schedule  from "./scenes/schedule";
import Contact  from "./scenes/contacts";
import Tasks  from "./scenes/assignments";
import { Routes, Route } from "react-router-dom";
import Line from "./scenes/line";
import Login from "./scenes/login";
//import SignUp from "./scenes/signup";
import ResetPass from "./scenes/resetPassword";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider  value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
          <Routes>
            
            {/* <Route path="/" element={<Login />}></Route>*/}
            <Route path="/" element={<Dashboard />}></Route> 
            <Route path="/classes" element={<Classes />}></Route>
            <Route path="/schedule" element={<Schedule />}></Route>
            <Route path="/contacts" element={<Contact />}></Route>
            <Route path="/assignments" element={<Tasks />}></Route>
            <Route path="/line" element={<Line />}></Route>
            {/*<Route path="/login" element={<Login />}></Route>           
            <Route path="/signup" element={<SignUp />}></Route>
            <Route path="/resetpass" element={<ResetPass />}></Route>*/}
          </Routes>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
