import { Box, Typography } from "@mui/material";
import Navbar from "../../atoms/Navbar/Navbar";
import "./Home.scss";
import pic from "../../assets/images/pic.jpg";
import externalIcon from "../../assets/images/external-link.svg";
import linkedin from "../../assets/images/linkedin.png";
import twitter from "../../assets/images/twitter.png";
import mail from "../../assets/images/mail.png";
import call from "../../assets/images/call.png";
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

                <Box className="social-media-wrapper">
                    {/* Social media */}
                    <Box className="icon">
                        <img height="24px" src={call}/>
                    </Box>
                    <Box className="icon">
                        <img height="40px" src={linkedin}/>
                    </Box>
                    <Box className="icon">
                        <img height="36px" src={mail}/>
                    </Box>
                    <Box className="icon">
                        <img height="36px" src={twitter}/>
                    </Box>
                    
                </Box>
        </Box>

        )
    }

    const renderAboutUs = () => {
        return (
            <Box className="box-wrapper">
            

            </Box>
        )
    }
    return <Box className="home-main-container">
            <Navbar/>
            <Box className="home-container">
                {renderPortfolioCard()}
                {renderAboutUs()}
              

            </Box>
    </Box>
}
export default Home;