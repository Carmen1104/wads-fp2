import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { DataGrid, GridToolbarContainer, GridToolbarColumnsButton, GridToolbarFilterButton, GridToolbarDensitySelector } from "@mui/x-data-grid";
import { tokens } from "../../Theme";

import Header from "../../components/Header";

const Classes = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box  m="20px">
      <Header title="MY CLASSES" subtitle="Find Your Classes and Grades Here" />
    </Box>
  )
}

export default Classes