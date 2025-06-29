import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "./Skills.scss";
import { DefaultMotion } from "../../atoms/Motion/CustomMotion";

const Skills = () => {
    return (
       <DefaultMotion>
            <Box className="skills-main-container">
                <Box className="skills-wrapper">
                    {/* Frontend */}
                    <Box className="box-wrapper">
                        
                    </Box>
                    {/* Backend */}
                    <Box className="box-wrapper">

                    </Box>
                </Box>
                {/* Tools */}
                <Box className="box-wrapper">

                </Box>
            </Box>
        </DefaultMotion>
    );
};

export default Skills;
