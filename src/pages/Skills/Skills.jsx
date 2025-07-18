import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "./Skills.scss";
import { DefaultMotion } from "../../atoms/Motion/CustomMotion";

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

const Skills = () => {
    return (
       <DefaultMotion>
            <Box className="skills-main-container">
                <Box className="skills-wrapper">
                    {/* Frontend */}
                    <Box className="box-wrapper">
                        <Typography className="header-text">Skills</Typography>
                        <Box display="flex" flexDirection="column" gap="30px" mt="20px" ml="20px">

                            <Box display="flex" flexDirection="column"  gap="12px">
                                <Typography className="header-description">Programming Languages</Typography>
                                <Box className="dev-wrapper">
                                    <IconWrapper src="/images/java.png" name="Java"/>
                                    <IconWrapper src="/images/javascript.png" name="Javascript"/>
                                </Box>
                            </Box>

                            <Box display="flex" flexDirection="column"  gap="12px">
                                <Typography className="header-description">Frontend & Backend Development</Typography>
                                <Box className="dev-wrapper">
                                    <IconWrapper src="/images/react.png" name="React JS"/>
                                    <IconWrapper src="/images/nextjs.png" name="Next JS"/>
                                    <IconWrapper src="/images/typescript.png" name="Typescript"/>
                                    <IconWrapper src="/images/nodejs.png" name="Node JS"/>
                                    <IconWrapper src="/images/express.png" name="Express JS"/>
                                    <IconWrapper src="/images/redux.png" name="Redux"/>
                                    <IconWrapper src="/images/storybook.png" name="Storybook"/>
                                    <IconWrapper src="/images/scss.png" name="SASS/SCSS"/>
                                    <IconWrapper src="/images/tailwind.png" name="Tailwind"/>
                                    <IconWrapper src="/images/mui.png" name="Material UI"/>
                                </Box>
                            </Box>

                             <Box display="flex" flexDirection="column"  gap="12px">
                                <Typography className="header-description">Database Management</Typography>
                                <Box className="dev-wrapper">
                                    <IconWrapper src="/images/mongodb.png" name="Mongodb"/>
                                    <IconWrapper src="/images/sql.png" name="MySQL"/>
                                </Box>
                            </Box>

                            <Box display="flex" flexDirection="column"  gap="12px">
                                <Typography className="header-description">Development Tools</Typography>
                                <Box className="dev-wrapper">
                                    <IconWrapper src="/images/github.png" name="Github"/>
                                    <IconWrapper src="/images/vscode.png" name="VSCode"/>
                                    <IconWrapper src="/images/notion.png" name="Notion"/>
                                    <IconWrapper src="/images/photoshop.png" name="Photoshop"/>
                                    <IconWrapper src="/images/figma.png" name="Figma"/>
                                </Box>
                            </Box>
                        </Box>

                    </Box>
                </Box>
            </Box>
        </DefaultMotion>
    );
};

export default Skills;
