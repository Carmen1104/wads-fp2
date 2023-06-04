import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../Theme";


const DashBox = ({title, subTitle, icon}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

  return (
    <Box width="100%" m="0 30px">
        <Box display="flex"flexWrap="nowrap" justifyContent="space-between">
            <Box>
                {icon}
            </Box>
            <Box>
                <Typography variant="h4" noWrap fontWeight="bold" sx={{ color: colors.grey[100]}}>
                    {title}
                </Typography>
                <Typography variant="h5" noWrap sx={{ color: colors.greenAccent[300]}}>
                    {subTitle}
                </Typography>
            </Box>
        </Box>
    </Box>
  )
}

export default DashBox