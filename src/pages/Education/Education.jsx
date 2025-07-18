import { DefaultMotion } from "../../atoms/Motion/CustomMotion";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "./Education.scss";
const Education = () => {
  return (
    <DefaultMotion>
        <Box className="education-main-container">
            <Box className="box-wrapper">
                <Typography className="header-text">Education</Typography>
                <Box className="education-content-wrapper" mt="20px" ml="20px">
                    <Box className="education-item">
                        <Typography className="education-title">Bachelor of Computer Application (BCA)</Typography>
                        <Typography className="education-institution">Integral University, Lucknow</Typography>
                        <Typography className="education-duration">2017 — 2020</Typography>
                    </Box>
                    <Box className="education-item">
                        <Typography className="education-title">Master of Computer Applications (MCA)</Typography>
                        <Typography className="education-institution">Arunachal University</Typography>
                        <Typography className="education-duration">2021 — 2023</Typography>
                    </Box>
                </Box>
            </Box>
        </Box>        
    </DefaultMotion>
  )
};

export default Education;
