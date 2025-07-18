import { Box, Button, Tooltip, Typography } from "@mui/material";
import { motion } from "motion/react";
import Navbar from "../../atoms/Navbar/Navbar";
import "./Home.scss";
import pic from "../../assets/images/pic.jpg";
import externalIcon from "../../assets/images/external-link.svg";
import linkedin from "../../assets/images/linkedin.png";
import twitter from "../../assets/images/twitter.png";
import mail from "../../assets/images/mail.png";
import call from "../../assets/images/call.png";
import github from "../../assets/images/github.png";
import microsoft from "../../assets/images/microsoft.png";
import oracle from "../../assets/images/oracle.png";
import download from "../../assets/images/download.png";
import { ABOUT } from "../constants";
import { DefaultMotion } from "../../atoms/Motion/CustomMotion";
const TooltipStyle = ({tooltip}) => {
    return <Box>
        {tooltip}
    </Box>
}
const SocialMedia = ({height, width, src, tooltipObj, onClick}) => {
    const {label, tooltip, link=null} = tooltipObj;
    return (
        <Tooltip title={<TooltipStyle tooltip={tooltip}/>} placement="bottom">
            <Box onClick={onClick} height={height} className="icon">
                <img height={height} width={width} src={src}/>
            </Box>
        </Tooltip>
    )
}

const IconWrapper = ({src}) => {
    return (
        <>
            <Box className="icon-wrapper">
                <img height="34px" src={src} />
            </Box>
        </>
    )
}
const renderSocialMedia = () => {
    const handlePhoneClick = () => {
        window.open(`tel:${ABOUT.PHONE.link}`, "_blank");
    }
    const handleLinkedInClick = () => {
        window.open(ABOUT.LINKEDIN.link, "_blank");
    }
    const handleMailClick = () => {
        window.open(`mailto:${ABOUT.GMAIL.link}`, "_blank");
    }
    const handleTwitterClick = () => {
        window.open(ABOUT.TWITTER.link, "_blank");
    }
    const handleGithubClick = () => {
        window.open(ABOUT.GITHUB.link, "_blank");
    }
    return (
        <Box className="box-wrapper">
            <Box className="social-media-wrapper">
            {/* Social media */}
            <SocialMedia
            height="24px"
            src={call}
            tooltipObj={ABOUT.PHONE}
            onClick={handlePhoneClick}
            />
            <SocialMedia
            height="40px"
            src={linkedin}
            tooltipObj={ABOUT.LINKEDIN}
            onClick={handleLinkedInClick}
            />
            <SocialMedia
            height="36px"
            src={mail}
            tooltipObj={ABOUT.GMAIL}
            onClick={handleMailClick}
            />
            <SocialMedia
            height="36px"
            src={twitter}
            tooltipObj={ABOUT.TWITTER}
            onClick={handleTwitterClick}
            />
            <SocialMedia
            height="30px"
            src={github}
            tooltipObj={ABOUT.GITHUB}
            onClick={handleGithubClick}
            />
        </Box>
    </Box>
    )
}
const Home = () => {

     const handleMicrosoftClick = () => {
        window.open("https://drive.google.com/file/d/1UMR4G_shf1FjHvvejIJuzS4wavKYvsuH/view?usp=sharing", "_blank");
    }

    const handleOracleClick = () => {
        window.open("https://drive.google.com/file/d/1Vk02P7Cxt1c-sJw1RMBDCXnfKjKyUgsb/view?usp=sharing", "_blank");
    }

    const handleResume = () => {
        window.open("https://drive.google.com/file/d/10F1oJ6p3vLtQgiwD6dy9PUJ7rC48TYhT/view?usp=sharing", "_blank");
    }

    const renderPortfolioCard = () => {
        return (
            <Box className="box-wrapper portfolio-wrapper">
                <Box className="pic-main-wrapper">
                    {/* Picture */}
                    <Box className="pic-wrapper">
                        <img height="100%" width="100%" src={pic}/>
                    </Box>
                </Box>

                <Box onClick={handleResume} className="my-description">
                    <Typography className="description-text">
                        {/* Name */}
                        Gyaneshwar Kumar
                    </Typography>
                    <Box className="external-icon-wrapper">
                        <img src={externalIcon}/>
                    </Box>
                </Box>
        </Box>

        )
    }

    const renderJobTitle = () => {
        return (
            <Box className="box-wrapper job-title-main-wrapper">
                <Typography className="text-1">Frontend</Typography>
                <Typography className="text-2">Developer</Typography>
            </Box>
        )
    }

    const renderCertification = () => {
        return (
            <Box className="box-wrapper certification-main-wrapper">
                <Typography>Certifications</Typography>
                <Box width="100%" display="flex" justifyContent="space-evenly" gap="1rem" alignItems="center">
                    <Box onClick={handleMicrosoftClick} className="cursor" >
                        <img height="40px" src={microsoft}/>
                    </Box>
                    <Box onClick={handleOracleClick} className="cursor">
                        <img height="40px" src={oracle}/>
                    </Box>
                </Box>
            </Box>
        )
    }


    const renderResumePoster = () => {
        return (
            <Box className="box-wrapper resume-poster-main-wrapper">
                <Button className="mui-button-wrapper">
                    <Box className="resume-button-wrapper">
                        <Typography onClick={handleResume} className="text-1">Resume</Typography>
                        <Box height="22px">
                            <img height="22px" src={download}/>
                        </Box>
                    </Box>
                </Button>
            </Box>
        )
    }

    const renderSkills = () => {
        return (
            <Box width="100%" className="box-wrapper skills-main-wrapper">
                        <Box className="dev-wrapper">
                                <IconWrapper src="/images/react.png"/>
                                <IconWrapper src="/images/nextjs.png"/>
                                <IconWrapper src="/images/typescript.png"/>
                                <IconWrapper src="/images/nodejs.png"/>
                                <IconWrapper src="/images/express.png"/>
                                <IconWrapper src="/images/redux.png"/>
                        </Box>
                        <Box className="dev-wrapper">
                                <IconWrapper src="/images/storybook.png"/>
                                <IconWrapper src="/images/scss.png"/>
                                <IconWrapper src="/images/tailwind.png"/>
                                <IconWrapper src="/images/mui.png"/>
                                <IconWrapper src="/images/photoshop.png"/>
                                <IconWrapper src="/images/figma.png"/>
                        </Box>

                        <Box className="dev-wrapper">
                                <IconWrapper src="/images/trello.png"/>
                                <IconWrapper src="/images/github.png"/>
                                <IconWrapper src="/images/vscode.png"/>
                                <IconWrapper src="/images/sql.png"/>
                                <IconWrapper src="/images/mongodb.png"/>
                                <IconWrapper src="/images/notion.png"/>
                        </Box>


            </Box>
        )
    }

    const renderExperiencePoster = () => {
        return (
            <Box className="box-wrapper experience-main-container">
                <Box>
                    <Typography className="text-1">+3</Typography>
                    <Typography className="text-2">YEARS EXPERIENCE</Typography>
                </Box>
                <Box>
                    <Typography className="text-1">+20</Typography>
                    <Typography className="text-2">PROFESSIONAL SKILLS</Typography>
                </Box>
                <Box>
                    <Typography className="text-1">+15</Typography>
                    <Typography className="text-2">DEVELOPMENT TOOLS</Typography>
                </Box>
            </Box>
        )
    }
    return <Box className="home-main-container">
            <Navbar/>
            <Box className="home-container">
                <Box width="100%" display="flex" flexDirection="column" gap="1rem">
                    <DefaultMotion style={{height:"100%"}}>{renderPortfolioCard()}</DefaultMotion>
                    <DefaultMotion >{renderSocialMedia()}</DefaultMotion>
                </Box>
                <Box width="100%" display="flex" flexDirection="column" gap="1rem">
                    <Box width="100%" className="job-box">
                        <DefaultMotion>
                            {renderJobTitle()}
                        </DefaultMotion>  
                        <DefaultMotion style={{width:"100%"}}>  
                            {renderCertification()}
                        </DefaultMotion>    
                        <DefaultMotion style={{height:"100%"}}>
                            {renderResumePoster()}
                        </DefaultMotion>
                    </Box>
                    {/* <DefaultMotion style={{height:"100%"}}>
                    {renderSkills()}
                    </DefaultMotion> */}
                </Box>
                <Box className="resume-box">
               
                <DefaultMotion style={{height:"100%"}}>    
                    {renderExperiencePoster()}
                </DefaultMotion>
                </Box>
              
            </Box>
    </Box>
}
export default Home;