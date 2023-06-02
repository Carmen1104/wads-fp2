import { Box, Button, useTheme} from "@mui/material";
import { tokens } from "../../Theme";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Line = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Grade Line Chart" subtitle="Grades in Line Chart Form" />
          
          <Box>
            <Button href="/classes" sx={{backgroundColor: colors.redAccent[700], color:colors.grey[100], fontSize: "14px", fontWeight: "bold", padding: "10px 20px"}}>
              <ArrowBackIcon sx={{ mr: "10px" }} />
                Back
            </Button>
          </Box>
      </Box>
      
      <Box height="75vh">
        <LineChart />
      </Box>
    </Box>
  );
};

export default Line;
