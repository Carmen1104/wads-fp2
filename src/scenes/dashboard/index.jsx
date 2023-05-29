import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../Theme";
import { mockTransactions } from "../../data/mockData";
import PeopleIcon from '@mui/icons-material/People';
import QuizIcon from '@mui/icons-material/Quiz';
import ReceiptIcon from '@mui/icons-material/Receipt';

import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import DashBox from "../../components/DashBox";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
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
        <Box gridColumn="span 8" gridRow="span 3" backgroundColor={colors.primary[400]}>
          <Box mt="25px" p="0 30px" display="flex" justifyContent="center" alignItems="center">
            <Box>
              <Typography variant="h5" fontWeight="600" color={colors.grey[100]}>
                GRADES
              </Typography>
            </Box>
          </Box>
          <Box height="400px" m="-20px 0 0 0">
            <LineChart isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 3"
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
              Recent Transactions
            </Typography>
          </Box>
          {mockTransactions.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
            >
              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  variant="h5"
                  fontWeight="600"
                >
                  {transaction.txId}
                </Typography>
                <Typography color={colors.grey[100]}>
                  {transaction.user}
                </Typography>
              </Box>
              <Box color={colors.grey[100]}>{transaction.date}</Box>
              <Box
                backgroundColor={colors.greenAccent[500]}
                p="5px 10px"
                borderRadius="4px"
              >
                ${transaction.cost}
              </Box>
            </Box>
          ))}
        </Box>

      </Box>

    </Box>
  )
}

export default Dashboard