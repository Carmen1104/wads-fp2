import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../Theme";
import { mockDataContacts } from "../../data/mockData";
import PeopleIcon from '@mui/icons-material/People';
import QuizIcon from '@mui/icons-material/Quiz';
import ReceiptIcon from '@mui/icons-material/Receipt';

import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import DashBox from "../../components/DashBox";
import Sidebar from "../global/Sidebar";
import Topbar from "../global/Topbar";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <div className="app">
      <Sidebar />
      <main className="content">
        <Topbar />
        <Box  m="20px">
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Header title="DASHBOARD" subtitle="Welcome to COURS Dashboard" />
          </Box> 

          <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gridAutoRows="140px" gap="20px">
            {/*first row */}
            <Box gridColumn="span 4" backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center">
              <DashBox title="18" subTitle="Students" icon={<PeopleIcon sx={{ color: colors.greenAccent[400], fontSize: "48px"
              }}/>}/>
            </Box>
            <Box gridColumn="span 4" backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center">
              <DashBox title="4" subTitle="Exams" icon={<QuizIcon sx={{ color: colors.greenAccent[400], fontSize: "48px"
              }}/>}/>
            </Box>
            <Box gridColumn="span 4" backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center">
              <DashBox title="Rp 3.600.000" subTitle="Next Payment" icon={<ReceiptIcon sx={{ color: colors.greenAccent[400], fontSize: "48px"
              }}/>}/>
            </Box>

            {/*row 2 */}
            <Box gridColumn="span 8" gridRow="span 2" backgroundColor={colors.primary[400]}>
              <Box mt="25px" p="0 30px" display="flex" justifyContent="center" alignItems="center">
                <Box>
                  <Typography variant="h5" fontWeight="600" color={colors.grey[100]}>
                    GRADES
                  </Typography>
                </Box>
              </Box>
              <Box m="-30px 0 0 0" height="275px">
                <LineChart isDashboard={false}/>
              </Box>
            </Box>

            <Box
              gridColumn="span 4"
              gridRow="span 2"
              backgroundColor={colors.primary[400]}
              overflow="auto"
            > 
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                borderBottom={`4px solid ${colors.primary[500]}`}
                colors={colors.grey[100]}
                p="15px"
              >
                <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
                  Teachers Contacts
                </Typography>
              </Box>
              {mockDataContacts.map((contact, i) => (
                <Box
                  key={`${contact.registrarId}-${i}`}
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  borderBottom={`4px solid ${colors.primary[500]}`}
                  p="15px"
                >
                  <Box>
                    <Typography color={colors.grey[100]} variant="h6"
                      fontWeight="600">
                      {contact.name}
                    </Typography>
                    <Typography color={colors.grey[100]}>
                      {contact.phone}
                    </Typography>
                  </Box>
                  <Box color={colors.grey[100]}>{contact.email}</Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </main>
    </div>
    
  )
}

export default Dashboard