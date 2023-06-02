import { Box, Button, useTheme } from "@mui/material";
import { tokens } from "../../Theme";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import DashBox from "../../components/DashBox";
import PeopleIcon from '@mui/icons-material/People';
import Header from "../../components/Header";

import Math from "../../img/math.png";
import ClassBox from "../../components/ClassBox";

const Classes = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box  m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="MY CLASSES" subtitle="Find Your Classes and Grades Here" />
      </Box>
      
      <Box m="10px">
        <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gridAutoRows="140px" gap="20px">

        {/*Row 1*/}
        <Box gridColumn="span 4" backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center"
          sx={{ border: 2, BorderColor:colors.primary[400], borderRadius: "16px"}}>
            <ClassBox 
            subject="Mathematics"
            teacher="Ms.Maria Cynthia" 
            image={Math}
            altText="Maths"
            to="/line" />
        </Box>
        <Box gridColumn="span 4" backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center"
          sx={{ border: 2, BorderColor:colors.primary[400], borderRadius: "16px"}}>
           <ClassBox 
            subject="English"
            teacher="Mr.Connor Maxwell" 
            image={Math}
            altText="English"
            to="/line" />
        </Box>
        <Box gridColumn="span 4" backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center"
          sx={{ border: 2, BorderColor:colors.primary[400], borderRadius: "16px"}}>
            <ClassBox 
            subject="Bahasa Indonesia"
            teacher="Ibu Yustine Agustina" 
            image={Math}
            altText="B.Indo"
            to="/line" />
        </Box>
        
        {/*Row 2*/}
        <Box gridColumn="span 4" backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center"
        sx={{ border: 2, BorderColor:colors.primary[400], borderRadius: "16px"}}>
            <ClassBox 
            subject="Biology"
            teacher="Ms.Theresa Ashley" 
            image={Math}
            altText="Biology"
            to="/line" />
        </Box>
        <Box gridColumn="span 4" backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center"
          sx={{ border: 2, BorderColor:colors.primary[400], borderRadius: "16px"}}>
            <ClassBox 
            subject="Chemistry"
            teacher="Ms.Julie Anggun" 
            image={Math}
            altText="Chemistry"
            to="/line" />
        </Box>
        <Box gridColumn="span 4" backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center"
          sx={{ border: 2, BorderColor:colors.primary[400], borderRadius: "16px"}}>
            <ClassBox 
            subject="Physics"
            teacher="Ms.Erik Purnomo" 
            image={Math}
            altText="Physics"
            to="/line" />
        </Box>

        {/*Row 3*/}
        <Box gridColumn="span 4" backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center"
        sx={{ border: 2, BorderColor:colors.primary[400], borderRadius: "16px"}}>
            <ClassBox 
            subject="Mandarin"
            teacher="Lao shi Cheng lei" 
            image={Math}
            altText="Mandarin"
            to="/line" />
        </Box>
        <Box gridColumn="span 4" backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center"
        sx={{ border: 2, BorderColor:colors.primary[400], borderRadius: "16px"}}>
            <ClassBox 
            subject="Religion"
            teacher="Mr.Yohannes Sebastian" 
            image={Math}
            altText="Religion"
            to="/line" />
        </Box>
        <Box gridColumn="span 4" backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center"
        sx={{ border: 2, BorderColor:colors.primary[400], borderRadius: "16px"}}>
            <ClassBox 
            subject="PKN"
            teacher="Ms. Eka Putri" 
            image={Math}
            altText="PKN"
            to="/line" />
        </Box>

        </Box>
      </Box>

  </Box>
  )
}

export default Classes