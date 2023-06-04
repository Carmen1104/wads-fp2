import { ColorModeContext, useMode } from "./Theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar  from "./scenes/global/Topbar";
import Sidebar  from "./scenes/global/Sidebar";
import Dashboard  from "./scenes/dashboard";
import Classes  from "./scenes/classes";
import Schedule  from "./scenes/schedule";
import Contact  from "./scenes/contacts";
import Tasks  from "./scenes/assignments";
import { Routes, Route } from "react-router-dom";
import Line from "./scenes/line";
import Login from "./scenes/login";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider  value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
          <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/dashboard" element={<Dashboard />}></Route> 
            <Route path="/classes" element={<Classes />}></Route>
            <Route path="/schedule" element={<Schedule />}></Route>
            <Route path="/contacts" element={<Contact />}></Route>
            <Route path="/assignments" element={<Tasks />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/line" element={<Line />}></Route>
          </Routes>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
