import { ColorModeContext, useMode } from "./Theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar  from "./scenes/global/Topbar";
import Sidebar  from "./scenes/global/Sidebar";
import Dashboard  from "./scenes/dashboard";
import Classes  from "./scenes/classes";
import Schedule  from "./scenes/schedule";
import Contact  from "./scenes/contacts";
import Assignments  from "./scenes/assignments";
import { Routes, Route } from "react-router-dom";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider  value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
          <div className="app">
            <Sidebar />
            <main className="content">
              <Topbar />
              <Routes>
                <Route path="/" element={<Dashboard />}></Route> 
                <Route path="/classes" element={<Classes />}></Route>
                <Route path="/schedule" element={<Schedule />}></Route>
                <Route path="/contacts" element={<Contact />}></Route>
                <Route path="/assignments" element={<Assignments />}></Route>
              </Routes>
            </main>
          </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
