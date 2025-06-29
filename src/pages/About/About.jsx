import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "./About.scss";
import { DefaultMotion } from "../../atoms/Motion/CustomMotion";
const About = () => {
    return <DefaultMotion>
        <Box className="about-main-container">
            <Box className="header-wrapper">
                <Typography className="header-text">Hello,</Typography>
                <Typography className="header-text">I'm Gyaneshwar</Typography>
            </Box>
            <Typography className="header-description">
            Results-driven Frontend Developer with around 3 years of experience specializing in React.js, Next.js, and Node.js. Expertise in designing scalable and responsive web applications that improve user experience and business outcomes. Proven ability to lead projects that enhance website performance, SEO, and client engagement. Seeking to leverage my technical skills in a dynamic environment to contribute to cutting-edge software solutions.
            </Typography>
    </Box>
    </DefaultMotion>
}
export default About;