import { Box, useTheme } from "@mui/material";
import { tokens } from "../../Theme";
import Header from "../../components/Header";

import Math from "../../img/math.png";
import English from "../../img/english.jpeg";
import BahasaIndonesia from "../../img/BIndo.png";
import Bio from "../../img/biology.jpeg";
import Chem from "../../img/chemistry.png";
import Physics from "../../img/download.png";
import Mandarin from "../../img/mandarin.jpeg";
import Accounting from "../../img/accounting.jpeg";
import PKN from "../../img/pkn.jpeg";
import ClassBox from "../../components/ClassBox";
import Sidebar from "../global/Sidebar";
import Topbar from "../global/Topbar";

const Classes = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <div className="app">
      <Sidebar />
      <main className="content">
        <Topbar />
          <Box  m="20px">
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Header title="MY CLASSES" subtitle="Find Your Classes and Grades Here" />
            </Box>
            
            <Box m="10px">
              <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gridAutoRows="140px" gap="20px">

              {/*Row 1*/}
              <Box gridColumn="span 4" backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center"
                sx={{ border: 2, BorderColor:colors.primary[400], borderRadius: "16px", minWidth: "480px"}}>
                  <ClassBox 
                  subject="Mathematics"
                  teacher="Ms. Maria Cynthia" 
                  image={Math}
                  altText="Maths"
                  to="/line" />
              </Box>
              <Box gridColumn="span 4" backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center"
                sx={{ border: 2, BorderColor:colors.primary[400], borderRadius: "16px", minWidth: "480px"}}>
                <ClassBox 
                  subject="English"
                  teacher="Mr. Connor Maxwell" 
                  image={English}
                  altText="English"
                  to="/line" />
              </Box>
              <Box gridColumn="span 4" backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center"
                sx={{ border: 2, BorderColor:colors.primary[400], borderRadius: "16px", minWidth: "480px"}}>
                  <ClassBox 
                  subject="Bahasa Indonesia"
                  teacher="Ibu Yustine Agustina" 
                  image={BahasaIndonesia}
                  altText="B.Indo"
                  to="/line" />
              </Box>
              
              {/*Row 2*/}
              <Box gridColumn="span 4" backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center"
              sx={{ border: 2, BorderColor:colors.primary[400], borderRadius: "16px"}}>
                  <ClassBox 
                  subject="Biology"
                  teacher="Ms. Theresa Ashley" 
                  image={Bio}
                  altText="Biology"
                  to="/line" />
              </Box>
              <Box gridColumn="span 4" backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center"
                sx={{ border: 2, BorderColor:colors.primary[400], borderRadius: "16px"}}>
                  <ClassBox 
                  subject="Chemistry"
                  teacher="Ms. Julie Anggun" 
                  image={Chem}
                  altText="Chemistry"
                  to="/line" />
              </Box>
              <Box gridColumn="span 4" backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center"
                sx={{ border: 2, BorderColor:colors.primary[400], borderRadius: "16px"}}>
                  <ClassBox 
                  subject="Physics"
                  teacher="Mr. Erik Purnomo" 
                  image={Physics}
                  altText="Physics"
                  to="/line" />
              </Box>

              {/*Row 3*/}
              <Box gridColumn="span 4" backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center"
              sx={{ border: 2, BorderColor:colors.primary[400], borderRadius: "16px"}}>
                  <ClassBox 
                  subject="Mandarin"
                  teacher="Lao shi Cheng lei" 
                  image={Mandarin}
                  altText="Mandarin"
                  to="/line" />
              </Box>
              <Box gridColumn="span 4" backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center"
              sx={{ border: 2, BorderColor:colors.primary[400], borderRadius: "16px"}}>
                  <ClassBox 
                  subject="Accounting"
                  teacher="Mr. Yohannes Sebastian" 
                  image={Accounting}
                  altText="accounting"
                  to="/line" />
              </Box>
              <Box gridColumn="span 4" backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center"
              sx={{ border: 2, BorderColor:colors.primary[400], borderRadius: "16px"}}>
                  <ClassBox 
                  subject="PKN"
                  teacher="Ms. Eka Putri" 
                  image={PKN}
                  altText="PKN"
                  to="/line" />
              </Box>

              </Box>
            </Box>

        </Box>
      </main>
    </div>
    
  )
}

export default Classes