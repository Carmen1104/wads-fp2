import { Box, Button, Typography, useTheme } from "@mui/material";
import { tokens } from "../Theme";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const ClassBox = ({subject, teacher, image, altText, to}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

  return (
    <Box width="100%" m="0 30px">
        <Box display="flex" justifyContent="space-between">
            <Box>
                <img style={{maxWidth: 180, minWidth:100, width:140}} src={image} alt={altText} />
            </Box>
            <Box>
                <Typography variant="h2" fontWeight="bold" sx={{ color: colors.grey[100]}}>
                    {subject}
                </Typography>
                <Typography variant="h4" mt="5px" mb="5px" sx={{ color: colors.grey[100]}}>
                    {teacher}
                </Typography>
                <Button href={to} sx={{backgroundColor: colors.blueAccent[700], color:colors.grey[100], fontSize: "14px", fontWeight: "bold", padding: "5px 10px" }}>
                Learn More
                <ArrowForwardIcon sx={{ mr: "10px" }} />
                </Button>
            </Box>
        </Box>
    </Box>
  )
}

export default ClassBox