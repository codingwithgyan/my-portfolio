import { DefaultMotion } from "../../atoms/Motion/CustomMotion";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "./Projects.scss";

const IconWrapper = ({src, name}) => {
    return (
        <>
            <Box className="icon-wrapper">
                <Box height="26px"><img height="26px" src={src} alt={name}/></Box>
                <Typography>{name}</Typography>
            </Box>
        </>
    )
}

const Projects = () => {
    const handleArtGridClick = () => {
        window.open("https://arts-grid.vercel.app/", "_blank");
    };  
    const handleArtGridGithubClick = () => {
        window.open("https://github.com/codingwithgyan/ArtGrid", "_blank");
    };

    const handleSmartHireClick = () => {
        window.open("https://smarthire.vercel.app/login", "_blank");
    };

    const handleSmartHireGithubClick = () => {
        window.open("https://github.com/codingwithgyan/smart-hire-BE", "_blank");
    };  
  return (
        <DefaultMotion>
            <Box className="projects-main-container">
                <Box className="box-wrapper">
                    <Typography className="header-text">Projects</Typography>
                    <Box className="projects-content-wrapper" mt="20px" ml="20px">

                        {/* Project - 1 */}
                        <Box className="project-item-wrapper">
                            <Box className="item-description-container">
                                <Typography className="project-title">ArtGrid</Typography>
                                <Typography className="project-description">
                                   ArtGrid Link is a Figma-inspired collaborative design tool with real-time multi-user editing, live cursor presence, and custom shape tools, built using Liveblocks and WebSockets.
                                </Typography>
                                <Box mt="20px" display="flex" alignItems="center" gap="22px">
                                        <IconWrapper src="/images/react.png"/>
                                        <IconWrapper src="/images/javascript.png"/>
                                        <IconWrapper src="/images/liveblock.png"/>
                                        <IconWrapper src="/images/mui.png"/>
                                </Box>
                                <Box  mt="20px" display="flex" alignItems="center" gap="22px">
                                    <Box>
                                        <Button onClick={handleArtGridClick} className="item-btn">Website</Button>
                                    </Box>
                                     <Box>
                                        <Button onClick={handleArtGridGithubClick} className="item-btn">Github</Button>
                                    </Box>
                                </Box>
                            </Box>
                            <Box>
                                <img className="img" src="/images/projects/artgrid.png" alt="ArtGrid"/>
                            </Box>
                        </Box>

                        {/* Project - 2 */}
                        <Box className="project-item-wrapper">
                            <Box className="item-description-container">
                                <Typography className="project-title">Smart Hire</Typography>
                                <Typography className="project-description">
                                   Smart Hire is a real-time coding interview platform featuring a multi language code editor with syntax highlighting and a dashboard for streamlined interview and test management.
                                </Typography>
                                <Box mt="20px" display="flex" alignItems="center" gap="22px">
                                     <IconWrapper src="/images/react.png"/>
                                    <IconWrapper src="/images/nodejs.png"/>
                                    <IconWrapper src="/images/express.png"/>
                                    <IconWrapper src="/images/mongodb.png"/>
                                </Box>
                                <Box  mt="20px" display="flex" alignItems="center" gap="22px">
                                    <Box>
                                        <Button onClick={handleSmartHireClick} className="item-btn">Website</Button>
                                    </Box>
                                     <Box>
                                        <Button onClick={handleSmartHireGithubClick} className="item-btn">Github</Button>
                                    </Box>
                                </Box>
                            </Box>
                            <Box>
                                <img className="img" src="/images/projects/smarthire.png" alt="Smart Hire"/>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
         </DefaultMotion>   
  )
};

export default Projects
