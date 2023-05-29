import { Box } from "@mui/material";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";

const Line = () => {
  return (
    <Box m="20px">
      <Header title="Grade Line Chart" subtitle="Grades in Line Chart Form" />
      <Box height="75vh">
        <LineChart />
      </Box>
    </Box>
  );
};

export default Line;
