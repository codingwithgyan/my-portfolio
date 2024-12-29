import { Box, Button, Tooltip, Typography } from "@mui/material";
import Marquee from "react-fast-marquee";
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
const TooltipStyle = ({tooltip}) => {
    return <Box>
        {tooltip}
    </Box>
}
const SocialMedia = ({height, width, src, tooltipObj}) => {
    const {label, tooltip, link=null} = tooltipObj;
    return (
        <Tooltip title={<TooltipStyle tooltip={tooltip}/>} placement="bottom">
            <Box height={height} className="icon">
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
    return (
        <Box className="box-wrapper">
            <Box className="social-media-wrapper">
            {/* Social media */}
            <SocialMedia
            height="24px"
            src={call}
            tooltipObj={ABOUT.PHONE}
            />
            <SocialMedia
            height="40px"
            src={linkedin}
            tooltipObj={ABOUT.LINKEDIN}
            />
            <SocialMedia
            height="36px"
            src={mail}
            tooltipObj={ABOUT.GMAIL}
            />
            <SocialMedia
            height="36px"
            src={twitter}
            tooltipObj={ABOUT.TWITTER}
            />
            <SocialMedia
            height="30px"
            src={github}
            tooltipObj={ABOUT.GITHUB}
            />
        </Box>
    </Box>
    )
}
const Home = () => {

    const renderPortfolioCard = () => {
        return (
            <Box className="box-wrapper portfolio-wrapper">
                <Box className="pic-main-wrapper">
                    {/* Picture */}
                    <Box className="pic-wrapper">
                        <img height="100%" width="100%" src={pic}/>
                    </Box>
                </Box>

                <Box className="my-description">
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
                <Box display="flex" gap="1rem" alignItems="center">
                    <Box className="cursor">
                        <img height="40px" src={microsoft}/>
                    </Box>
                    <Box className="cursor">
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
                        <Typography className="text-1">Resume</Typography>
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
                    <Marquee direction="left" speed="14">
                        <Box className="dev-wrapper">
                                <IconWrapper src="/images/react.png"/>
                                <IconWrapper src="/images/nextjs.png"/>
                                <IconWrapper src="/images/typescript.png"/>
                                <IconWrapper src="/images/nodejs.png"/>
                                <IconWrapper src="/images/express.png"/>
                                <IconWrapper src="/images/redux.png"/>
                                <IconWrapper src="/images/aws.png"/>
                                <IconWrapper src="/images/react.png"/>
                                <IconWrapper src="/images/nextjs.png"/>
                                <IconWrapper src="/images/typescript.png"/>
                                <IconWrapper src="/images/nodejs.png"/>
                                <IconWrapper src="/images/express.png"/>
                                <IconWrapper src="/images/redux.png"/>
                                <IconWrapper src="/images/aws.png"/>
                        </Box>
                    </Marquee>
                    <Marquee direction="right" speed="14">
                        <Box className="dev-wrapper">
                                <IconWrapper src="/images/storybook.png"/>
                                <IconWrapper src="/images/scss.png"/>
                                <IconWrapper src="/images/tailwind.png"/>
                                <IconWrapper src="/images/mui.png"/>
                                <IconWrapper src="/images/notion.png"/>
                                <IconWrapper src="/images/photoshop.png"/>
                                <IconWrapper src="/images/figma.png"/>
                                <IconWrapper src="/images/storybook.png"/>
                                <IconWrapper src="/images/scss.png"/>
                                <IconWrapper src="/images/tailwind.png"/>
                                <IconWrapper src="/images/mui.png"/>
                                <IconWrapper src="/images/notion.png"/>
                                <IconWrapper src="/images/photoshop.png"/>
                                <IconWrapper src="/images/figma.png"/>
                        </Box>
                    </Marquee>

                    <Marquee direction="left" speed="14">
                        <Box className="dev-wrapper">
                                <IconWrapper src="/images/trello.png"/>
                                <IconWrapper src="/images/github.png"/>
                                <IconWrapper src="/images/figma.png"/>
                                <IconWrapper src="/images/vscode.png"/>
                                <IconWrapper src="/images/sql.png"/>
                                <IconWrapper src="/images/mongodb.png"/>
                                <IconWrapper src="/images/notion.png"/>
                                <IconWrapper src="/images/trello.png"/>
                                <IconWrapper src="/images/github.png"/>
                                <IconWrapper src="/images/figma.png"/>
                                <IconWrapper src="/images/vscode.png"/>
                                <IconWrapper src="/images/sql.png"/>
                                <IconWrapper src="/images/mongodb.png"/>
                                <IconWrapper src="/images/notion.png"/>
                        </Box>
                    </Marquee>


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
                    {renderPortfolioCard()}
                    {renderSocialMedia()}
                </Box>
                <Box width="100%" display="flex" flexDirection="column" gap="1rem">
                    <Box width="100%" className="job-box">
                        {renderJobTitle()}
                        {renderCertification()}
                    </Box>
                    {renderSkills()}
                </Box>
                <Box className="resume-box">
                    {renderResumePoster()}
                    {renderExperiencePoster()}
                </Box>
              
            </Box>
    </Box>
}
export default Home;