import { Box, useTheme } from "@mui/material";
import { DataGrid, GridToolbarContainer, GridToolbarColumnsButton, GridToolbarFilterButton, GridToolbarDensitySelector } from "@mui/x-data-grid";
import { tokens } from "../../Theme";
import { mockDataContacts } from "../../data/mockData";

import Header from "../../components/Header";
import Sidebar from "../global/Sidebar";
import Topbar from "../global/Topbar";

function CustomToolbar() {
    return (
      <GridToolbarContainer>
        <GridToolbarColumnsButton />
        <GridToolbarFilterButton />
        <GridToolbarDensitySelector />
      </GridToolbarContainer>
    );
  }

const Contact = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "No", flex: 0.5 }, 
    { field: "registrarId", headerName: "Teacher ID"},
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Role",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    ];
      
    return (
      <div className="app">
        <Sidebar />
        <main className="content">
          <Topbar />
            <Box m="20px">
              <Header title="TEACHERS CONTACT" subtitle="List of Teachers Contacts" />
              <Box
                  m="40px 0 0 0"
                  height="75vh"
                  sx={{
                  "& .MuiDataGrid-root": {
                      border: "none",
                  },
                  "& .MuiDataGrid-cell": {
                      borderBottom: "none",
                  },
                  "& .name-column--cell": {
                      color: colors.greenAccent[300],
                  },
                  "& .MuiDataGrid-columnHeaders": {
                      backgroundColor: colors.blueAccent[700],
                      borderBottom: "none",
                  },
                  "& .MuiDataGrid-virtualScroller": {
                      backgroundColor: colors.primary[400],
                  },
                  "& .MuiDataGrid-footerContainer": {
                      borderTop: "none",
                      backgroundColor: colors.blueAccent[700],
                  },
                  "& .MuiCheckbox-root": {
                      color: `${colors.greenAccent[200]} !important`,
                  },
                  "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                      color: `${colors.grey[100]} !important`
                  }
                  }}
              >   
                  <DataGrid 
                  rows={mockDataContacts} 
                  columns={columns} 
                  components={{ Toolbar: CustomToolbar}} />
              </Box>
            </Box>
        </main>
      </div>
        
  );
};

export default Contact;
